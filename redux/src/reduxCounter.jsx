import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByCount } from "./store/slice/reduxCounterSlice";

export function ReduxCounter() {
  const val = useSelector((state) => state.ReduxCouter.count);

  const[dv, setDv] = useState("");
  const dispatch = useDispatch();

  function Incre() {
    dispatch(increment());
  }
  function Decre() {
    dispatch(decrement());
  }
  function Res() {
    dispatch(reset());
  }

  function IncreByCount(){
     if(dv!==""){
         dispatch(incrementByCount(Number(dv)));
         setDv("");
     }
  }

  return (
    <>
      <h1>Redux Counter Component</h1>
      <h2>{val}</h2>
      <button onClick={Incre}>Increment</button>
      <button onClick={Decre}>Decrement</button>
      <button onClick={Res}>Reset</button><br/><br/>
       
      <input type="number" value={dv} onChange={(e)=> {console.log(e.target); setDv(e.target.value)}} required placeholder="Enter the Value"/>
      <button onClick={IncreByCount}>IncrementBycount</button>
    </>
  );
}
