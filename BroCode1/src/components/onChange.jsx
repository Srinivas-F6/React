/*onChange = event handler used primarly wiht form elements
            ex: <input>, <textarea>, <select>, <radio>
            Triggers a function every time the value of the input changes
*/

import React,{useState} from "react";
function Onchange(){
    const [name,setName] = useState();
    const [shipping,setShipping] = useState("");

    const handleNameChange = (e)=>{
         setName(e.target.value);
    }

    const handleShippingChange = (e)=>{
        setShipping(e.target.value);
    }
     return(
        <div>
            <input valueee={name} onChange={handleNameChange}/>
            <p>name : {name}</p>


            <label>
                <input type="radio" value="Pick up"
                        checked={shipping === "Pick up"}
                        onChange={handleShippingChange}/>
                Pick Up
            </label><br/>
            <label>
                <input type="radio" value="Delivery"
                        checked={shipping === "Delivery"}
                        onChange={handleShippingChange}/>
               Delivery
            </label>
            <p>Shipping : {shipping}</p>
        </div>
     )
}
export default Onchange;