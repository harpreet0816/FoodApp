import React from "react"
import User from "./User"

//++++++ check read me line no 250
class UserClass extends React.
Component {
    constructor(props){
        // using of super component is important
        super(props);
        //console.log(this)
        // state varaible is a big object which will contain all the state varibl inside it
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy name",
            }
        }
        console.log(props.name, "child constructor")
    }

    async componentDidMount(){
        console.log(this.props.name, "child componentDidMount")
        const data = await fetch("https://api.github.com/users/harpreet0816")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
        console.log(json)
      };
      componentDidUpdate(){
        console.log("after api call componentDidUpdate called")
      }
      componentWillUnmount(){
        console.log("after ui disapears from page componentDidCatch called");
      }
    render(){
        const {name, location } = this.props;
        const {login} = this.state.userInfo;
        console.log(name, "child render");
        return (
            <div className='userCard'>
            <img src={"https://avatars.githubusercontent.com/u/95376529?v=4"}></img>
            <h2>Name: {this.state.userInfo.login}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @preet223</h4>
            </div>
        )
    }
}
export default UserClass;