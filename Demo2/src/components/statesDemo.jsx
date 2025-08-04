import React from "react";
import { useState, useEffect} from "react";

function StateDemo(){
    const [videoName, setVideoName] = useState("React Js");
    const [videoLikes, setVideoLikes] = useState(500);

    useEffect(() =>{
         console.log("Updation");
    },[videoLikes]);

    return(
        <>
            <h1>States Demo</h1>
            <h3>Vide0 Name : {videoName}</h3>
            <h3>Likes : {videoLikes}</h3>
            <button onClick={() => {
                setVideoLikes(videoLikes+1)
            }}>Like Button</button>
        </>
    )
}

export default StateDemo;