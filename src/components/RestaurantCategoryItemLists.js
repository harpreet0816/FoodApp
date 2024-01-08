import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCategoryItemLists = ({ items }) => {
  const imagDef = "tkgjzysrduhijeenua5b";
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-grey-200 text-left flex justify-between h-45"
        >
          <div className="w-3/4 ">
            <div className="pb-2 text-lg text-slate-950">
              <span>{item.card.info.name}</span>
              <span className="ml-22">
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p>{item.card.info.description}</p>
          </div>
          <div>
          <div className="absolute">
            <button className="px-6 py-2 bg-slate-700 shadow-lg rounded-lg text-green-400 mx-10 mt-25">Add +</button>
            </div>
            <img
              src={
                CDN_URL +
                (item.card.info.imageId ? item.card.info.imageId : imagDef)
              }
              className="w-40"
            ></img>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCategoryItemLists;
