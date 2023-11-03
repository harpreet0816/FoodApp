import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  console.log("usestate default== body rendered  ", listOfResturants);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    var jsonData = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setlistOfResturants(
      jsonData
    );
  };
  // shimmer ui and conditional rendering
  //   if (listOfResturants.length === 0) {
  //     return <Shimmer />;
  //   }
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //filter the resturant cards and update the UI
              console.log("search text", searchText);
              const filterResto = listOfResturants.filter((res) => (
                res.info.name.toLowerCase().includes(searchText)
              ));
              console.log(filterResto);
              setlistOfResturants(filterResto);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfResturants.filter(
              (res) => res?.info?.avgRating > 4.3
            );
            setlistOfResturants(filteredList);
            console.log(">>>>>yo", filteredList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="res-container">
      {listOfResturants.map((restaurant) => (
        <RestaurantCard key={restaurant.info.id} resDa={restaurant} />
      ))}
      </div>
    </div>
  );
};
export default Body;
