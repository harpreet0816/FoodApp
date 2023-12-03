import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let btnName = "Login";
  console.log("header rendered")
   let [btnNameReact, setbtnNameReact] = useState(btnName);
    useEffect(()=> {
      console.log("useEffect called")
    }, [])

    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus)
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
            <li className="px-4">Cart</li>
            <button className="login px-4" onClick={()=>{
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact ("Login")
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;