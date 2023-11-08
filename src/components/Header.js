import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  let btnName = "Login";
  console.log("header rendered")
   let [btnNameReact, setbtnNameReact] = useState(btnName);
    useEffect(()=> {
      console.log("useEffect called")
    }, [])
    return (
      <div className="header">
        <div className="logo-container">
          <img className= "logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/" className="Link">Home</Link></li>
            <li><Link to="/about" className="Link">About Us</Link></li>
            <li><Link to="/contact" className="Link">Contact US</Link></li>
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