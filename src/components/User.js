import React, { useEffect } from 'react';
import { useState, useEffect } from 'react';
const User = (props) => {
    const [count, setcount] = useState(0);
    useEffect(()=>{
        apiData()
    }, [])
    const apiData = async () => {
        var data = await fetch("https://api.github.com/users/harpreet0816");
        var json = await data.json();
        console.log(json.login)
};
    console.log("user function component")
    return (
        <div className='userCard'>
        <h3>Count: {count}</h3>
        <button  onClick={() => { setcount(count + 1) }}>Click</button>
        <h2>Name: {props.name}</h2>
            <h3>Location: Srinagar</h3>
            <h4>Contact: @preet223</h4>
        </div>
    );
};

export default User;