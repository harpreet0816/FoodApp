import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  let btnName = "Login";
  console.log("header rendered")
   let [btnNameReact, setbtnNameReact] = useState(btnName)
    return (
      <div className="header">
        <div className="logo-container">
          <img src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact US</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact ("Login")
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;