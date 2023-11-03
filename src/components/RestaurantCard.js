import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    // console.log("inside Restaurant card component")
    const { resDa } = props
    //******  somelike this {resName, cuisine} then on the write only <h1>{resName}<h1>*
    if(resDa.info){
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            resDa?.info?.cloudinaryImageId
          }
        ></img>
        <h3>{resDa?.info?.name}</h3>
        <h4>{resDa?.info?.cuisines.join(", ")}</h4>
        <h4>{resDa?.info?.costForTwo}</h4>
        <span>{resDa?.info?.avgRating} "stars"</span>
        <span> 40 minutes</span>
      
      </div>
    )
  }
  }
export default RestaurantCard;