import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = () => {
 const {resId} = useParams();
 const resInfo = useRestaurantMenu(resId);
  console.log("resinfoo", resInfo);

const[showIndex, setShowIndex] = useState(null)

  // if resInfo is null it return the function
  if ( resInfo === null) return <Shimmer />;


    const { name, cuisines, costForTwoMessage } =
      resInfo?.cards[0]?.card?.card?.info;
    // const { itemCards } =
    //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card;
    const  itemCards  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(itemcatogery => itemcatogery.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log("resinfo has data now");
    // console.log("<<<<menuuuu>>>>>.", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(itemcatogery => itemcatogery.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    console.log("<<<<menuuuu>>>>>.",itemCards);
  

  // console.log(name)
  return(
    <div className="text-center">
      {console.log("hello")}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2  className="font-bold text-lg">{`${cuisines.join(",")}: ${costForTwoMessage}`}</h2>
      {/*<h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (<li key={item?.card?.info?.id}  className="menuList">{item?.card?.info?.name} - <span className="menuPrice">{" Rs. "} {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}</span></li>))}
      </ul>*/}
  {/**controled conponent ⬇️ */}
  {itemCards.map((category, index)=> 
  <RestaurantCategory key={category?.card?.card?.itemCards[0]?.card?.info.id} data={category?.card?.card} showAccordian={index === showIndex ? true : false} setShowIndex = {()=>setShowIndex(index)}/>
  )
  }
    </div>
  );
};
export default RestaurantMenu;
