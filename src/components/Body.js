import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContextInfo from "../utils/UserContext";
const Body = () => {
  console.log("body rendered")
  const [listOfResturants, setlistOfResturants] = useState([]);
  console.log(listOfResturants, "list of resturants <>>>>><<<<>>>>>")
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  const [searchText, setsearchText] = useState("");

  const { loggInUser, setUserName} = useContext(UserContextInfo)
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    
    const json = await data.json();
    //optional chaining
    // x.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // .data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log(json, "<<<<json>>>>")
    var jsonData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(jsonData, "json data after chaining>>>>>>>>>>>>>>>>>>>>>>>")
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
            className="px-4 py-2 w-96 border-2 border-black rounded-2xl"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 w-72 border-2 border-black rounded-2xl "
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
            className="px-4 py-2 bg-green-200 w-72 border-2 border-black rounded-2xl"
            onClick={() => {
              let filteredList = listOfResturants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setfilteredRestaurants(filteredList);
              //console.log(">>>>>yo", filteredList);
            }}
          >
            Top Rated restaurant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <input
        type="text"
        className="yoo px-4 py-2 bg-green-200 w-72 border-2 border-black rounded-2xl"
        defaultValue={loggInUser}
        onChange={(e) => setUserName(e.target.value)}
      />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="Link"
          >
          {
          restaurant.info.avgRating > 4.3 ? <RestaurantCardPromoted  resDa={restaurant}/> : <RestaurantCard resDa={restaurant} />
        }
        {/* <RestaurantCard resDa={restaurant} />*/}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
