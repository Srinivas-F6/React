import React,{useState} from "react";

function UpdateState(){
    
   const[foods, setFoods] = useState(['Apple','PineApple','Mango','Orange']);
   
    function handleAddFood(){
        const newfood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";
        setFoods([...foods,newfood]);
        
    }

    function handleRemovefoods(index){
        setFoods(foods.filter((_,i)=> i!==index));
    }

    return(
       <>
       <h3>List of Foods</h3>
       <ul>
        {
            foods.map((fruit,index)=>
                <li key={index} onClick={()=>handleRemovefoods(index)}>{fruit}</li>
            )
        }
       </ul>
       <input type="text" id="foodInput" placeholder="Enter food name"/>
       <button onClick={handleAddFood}>Add Food</button>
       </>
    )
}
export default UpdateState;