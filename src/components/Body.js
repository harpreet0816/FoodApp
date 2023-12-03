import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);

  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");
  console.log("usestate default== body rendered  ", listOfResturants);
  console.log("usestate filtered resturant", filteredRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //optional chaining
    var jsonData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfResturants(jsonData);
    setfilteredRestaurants(jsonData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet Connection</h1>
    );
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter the resturant cards and update the UI
              console.log("search text", searchText);
              const filterResto = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              console.log("filterfunction returns=", filterResto);
              setfilteredRestaurants(filterResto);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 rounded-lg"
            onClick={() => {
              let filteredList = listOfResturants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setlistOfResturants(filteredList);
              //console.log(">>>>>yo", filteredList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="Link"
          >
            <RestaurantCard resDa={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
