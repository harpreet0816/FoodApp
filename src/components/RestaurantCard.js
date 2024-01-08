import { CDN_URL } from "../utils/constants";

const styleCard = {
    // backgroundColor: "#f0f0f0",
      backgroundColor: "#f0f0f0"
  };

const RestaurantCard = (props) => {
  console.log(props?.resDa,"<<<>>>>props<<>>>>")
    // console.log("inside Restaurant card component")
    const { resDa } = props
    console.log(resDa.info, "<<<<resDa>>>")
    //******  somelike this {resName, cuisine} then on the write only <h1>{resName}<h1>*
    if(resDa?.info){
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className="rounded-lg w-[250px] h-[260px]"
          alt="res-logo"
          src={
            CDN_URL +
            resDa?.info?.cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-lg">{resDa?.info?.name}</h3>
        <h4>{resDa?.info?.cuisines.join(", ")}</h4>
        <h4>{resDa?.info?.costForTwo}</h4>
        <span>{resDa?.info?.avgRating} "stars"</span>
        <span> 40 minutes</span>
      
      </div>
    )
  } else{
    <h1>res data does exits</h1>
  }
  }
  export const withPromotedLabel = (RestaurantCard)=>{
    console.log(RestaurantCard, ">>>>>>SGFSGS>>>>>>")
    return (props)=>{
      const { resDa } = props
      console.log(props, "<<<props>>>")
      return (
        <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        {/*<RestaurantCard resDa={resDa}/>*/}
        <RestaurantCard {...props}/>
        </div>
      )
    }
  }
export default RestaurantCard;