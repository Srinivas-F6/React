import React from "react";
import { useParams } from "react-router-dom";
function Userpage(){
    const {name} = useParams();
    return(
        <h1>Hi {name}, How are you</h1>
    )
}

export default Userpage;