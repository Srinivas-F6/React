/*
   useRef() = "use Reference" Does not cause re-renders when its value changes.
               when you want a component to "rememeber" some information,
               but you don't want that information to trigger new renders.


               1.Accessing/Interacting with DOM elements
               2.Handling Focus, Animations, and Transitions
               3.Managing Timers and Intervals.

*/

import React,{useState,useEffect,useRef} from "react";

function UseReference(){
    // const [count,setCount] = useState(0);

    const count = useRef(0);

    useEffect(()=>{
        console.log('Component Rendered!');
    },[handleCount]);
    
    function handleCount(){
        count.current++;
    }
    return(
        <>
          <button onClick={handleCount}>
            Click Me!
          </button>

        </>
    )
}
export default UseReference;