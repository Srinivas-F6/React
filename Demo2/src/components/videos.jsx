import React from "react";

function Videos(){
    let myVideos = ["Iran Vs Italy","Free Courses",
        "Comedy Shows"]

    return(
      <>
         <h1>Youtube videos</h1>
         {
            myVideos.map((video,index)=>{
                return <li>{index+1}-{video}</li>
            })
         }
      </>
    )
}

export default Videos;