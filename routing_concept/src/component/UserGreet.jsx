import React from "react";

//Conditional Rendering
function UserGreeting({isLog, name}){
    return(
        isLog ? <h2>Hiii</h2>:<h2>Byeeeee {name}</h2> 
    )
}
export default UserGreeting;