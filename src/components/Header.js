import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContextInfo from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  console.log("header rendered")

   const {loggInUser} = useContext(UserContextInfo)

   let [btnNameReact, setbtnNameReact] = useState("Login");

  // selector is hook , comes from     react-redux , subscribing to the store using a selector 
   const cartItems = useSelector((store)=> store.cart.items)
   console.log(cartItems)
    useEffect(()=> {
      // console.log("useEffect called")
    }, [])

    const onlineStatus = useOnlineStatus();

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-green-200">
        <div className="logo-container">
          <img className= "w-24" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "❌"}</li>
            <li className="px-4"><Link to="/" className="Link">Home</Link></li>
            <li className="px-4"><Link to="/about" className="Link">About Us</Link></li>
            <li className="px-4"><Link to="/contact" className="Link">Contact US</Link></li>
            <li className="px-4"><Link to="/grocery" className="Link">Grocery</Link></li>
            <li className="px-4"><Link to="/cart" className="Link">Cart - ({cartItems.length} items)</Link></li>
            <button className="login px-4" onClick={()=>{
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact ("Login")
            }}>{btnNameReact}</button>
            <li className="px-4 text-xl font-bold">{loggInUser}</li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;