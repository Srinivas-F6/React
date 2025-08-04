/*
useEffect() = React Hook that tells React DO SOME CODE WHEN(pick one):
              This component re-renders
              This component mounts
              The state of a value


useEffect(function,[dependencies])

1.useEffect(()=>{})         --Runs after every re-render
2.useEffect(()=>{},[])      --Runs only on mount
3.useEffect(()=>{},[value]) --Runs on mount + when a value changes


Uses:
1.Event Listeners
2.DOM Manipulation
3.Subscriptions (real-time updates)
4.Fetching Data from API
5.Clean up when a component unmounts
*/


import React,{useState,useEffect} from "react";

function Useeffect(){
    const[count,setCount] = useState(0);

    useEffect(()=>{
         document.title = `Count: ${count   }`;       //useEffect is used for cleaner code.
    },[]);

    function increaseCount(){
        setCount(c => c + 1);
    }
    function decreaseCount(){
        setCount(c => c - 1);
    }

    return(
       <>
        <p>count:{count}</p>
        <button onClick={increaseCount}>Add</button>
        <button onClick={decreaseCount}>Subract</button>
       </>
    )
}
export default Useeffect;
