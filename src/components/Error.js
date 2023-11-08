import { useRouteError } from "react-router-dom";
// this will run also without useRoute hook
// Using this hook we get more information about the error
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div>
        <h1>Oops!!!</h1>
        <h2>Something went Wrong</h2>
        <h3>{`${err.status}, ${err.statusText}`}</h3>
       <h4>Check Console for further information</h4>
        </div>
    )
}
export default Error;