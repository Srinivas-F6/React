import React,{useState} from "react";

function UseState(){
    const[count,setCount] = useState(0);
    
    const[car,setCar] = useState({
                         year:2024,
                         model:'Mustang',
                         make:'Ford'
                        });


    const increment = () =>{
        setCount(count+1);
    }
    const decrement = ()=>{
        setCount(count - 1);
    }
    const reset = ()=>{
        setCount(0);
    }

    // useState having object

    function changeMake(event){
        setCar({...car,make:event.target.value});
    }
    function changeYear(event){
        setCar({...car,year:event.target.value});
    }
    function changeModel(event){
        setCar({...car,model:event.target.value});
    }

    

    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>


            <p>My Favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="text" value={car.make} onChange={changeMake}/>
            <input type="number" value={car.year} onChange={changeYear}/>
            <input type="text" value={car.text} onChange={changeModel}/>
        </div>
    )
}
export default UseState;