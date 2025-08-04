import React,{useState,useEffect} from "react";

function Windowresizer(){

    const[height,setHeight] = useState(window.innerWidth);
    const[width,setWidth] = useState(window.innerHeight);

    useEffect(()=>{
       window.addEventListener("resize",handlewindow);
       console.log('odiwoe');
    },[]);

    function handlewindow(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    return(
        <>
          <p>Height: {height}</p>
          <p>Width : {width}</p>
        </>
    )
}
export default Windowresizer;