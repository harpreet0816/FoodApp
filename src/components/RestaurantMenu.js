
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {
 const {resId} = useParams();
 const resInfo = useRestaurantMenu(resId);
  console.log("resinfoo", resInfo);

  // if resInfo is null it return the function
  if ( resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    console.log("resinfo has data now");
    console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    console.log(itemCards);
  

  // console.log(name)
  return(
    <div className="menu">
      {console.log("hello")}
      <h1>{name}</h1>
      <h2>{`${cuisines.join(",")}: ${costForTwoMessage}`}</h2>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (<li key={item?.card?.info?.id}  className="menuList">{item?.card?.info?.name} - <span className="menuPrice">{" Rs. "} {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</span></li>))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
