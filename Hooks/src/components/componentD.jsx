import React,{useContext} from "react";
import { UserContext } from "./componentA";
function ComponentD(){
    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>My name is: {user}</h2>
        </div>
    )
}
export default ComponentD;
