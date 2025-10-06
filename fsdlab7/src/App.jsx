import { useState } from 'react'
import { Component1 } from './components/component1';
import { Component2 } from './components/component2';

function App() {
  
  const[name, Setname] = useState("");
  const[village, Setvillage] = useState("");
  const[show, Setshow] = useState(false);

  function handleName(event){
     Setname(event.target.value);
  }

  function handleVillage(event){
     Setvillage(event.target.value);
  }


  return (
    <>
      <Component1/>
      <input type='text' value={name} onChange={handleName} placeholder='Enter the name' required/>
      <input type='text' value={village} onChange={handleVillage} placeholder='Enter the village' required/>
      <button onClick={()=>Setshow(true)}>Submit</button>
      {!show && <Component2 name={name} village = {village}/>}
    </>

  )
}

export default App
