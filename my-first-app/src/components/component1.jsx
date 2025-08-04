import React from "react";

function ComponentOne({name,role}){
    return(
       <div>
            <p>Name: {name}</p>
            <p>Role: {role}</p>
       </div>
    )
}

export default ComponentOne;