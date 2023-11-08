import React from "react"
class UserClass2 extends React.
Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
        console.log(props.name, "child constructor 2")
    }
    componentDidMount(){
        console.log(this.props.name, "child componentDidMount 2")
      };
    render(){
        const {name, location } = this.props;
        console.log(name, "child render 2");
        return (
            <div className='userCard'>
            <h3>Count: {this.state.count}</h3>
            <h3>Count2: {this.state.count2}</h3>
            <button onClick={()=>{
               
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
                })
            }}>
            Increase Count
            </button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @preet223</h4>
            </div>
        )
    }
}
export default UserClass2;