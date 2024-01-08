import React, { useState } from "react";
import RestaurantCategoryItemLists from "./RestaurantCategoryItemLists";

const RestaurantCategory = (props) => {
  const { data, showAccordian, setShowIndex } = props;
  // const [accordian, setAccordian] = useState(false);
  console.log(setShowIndex);
  function handleAccordian(){
    // setAccordian(!accordian)
    setShowIndex()
  }
  return (
    <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-6">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleAccordian}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* body */}
      <div style={{ display: showAccordian ? "block" : "none" }}>
        <RestaurantCategoryItemLists items={data?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
