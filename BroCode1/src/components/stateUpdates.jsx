import React,{useState} from "react";

function StateUpdates(){
const[vehicle,setVehicle] = useState([]);
const[type,setType] = useState("");
const[number,setNumber] = useState(1010);

function addtoList(){
    const newVehicle = {
        cartype : type,
        carnumber : number     
    }
    setVehicle([...vehicle,newVehicle]);
    setType("");
    setNumber(1010);
}

function removeHandler(index){
    setVehicle(vehicle.filter((_,i)=> i!==index));
}

function handleType(event){
      setType(event.target.value);
}
function handleNumber(event){
    setNumber(event.target.value);
}

    return(
        <div>
            <ul>
               {
                vehicle.map((element,id)=>
                <li key={id} onClick={()=>removeHandler(id)}>
                    {element.cartype}  {element.carnumber}
                </li>
                )
               }
            </ul>
            <input type="text" value={type} placeholder="Enter the vehicle" onChange={handleType}/>
            <input type="number" value={number} placeholder="Vehicle Number" onChange={handleNumber}/>
            <button onClick={addtoList}>Add to List</button>
        </div>
    )
}
export default StateUpdates;