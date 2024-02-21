import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserClass2 from "./Userclass2";
import UserContextInfo from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log("parent componentDidMount")
  };
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <UserContextInfo.Consumer>{
          // (UserContextInfo)=> <h1>{UserContextInfo.loggInUser}</h1>
          ({loggInUser})=> <h1 className="text-xl font-bold">{loggInUser}</h1>
        }</UserContextInfo.Consumer>
        <h2>This is Namaste React Web Series</h2>{" "}
        <User name={"Hapreet(function)"} />
        <UserClass name={"preet (class)"} location={"srinagar (class)"} />
        <UserClass name={"Happy (class)"} location={"jammu (class)"} />
        <UserClass2 name={"Userclass2 (class)"} location={"jammu (class)"} />
      </div>
    );
  }
}
// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             <User name={"Hapreet(function)"}/>
//             <UserClass name={"preet (class)"} location= {"srinagar (class)"} />
//         </div>
//     );
// };
export default About;
