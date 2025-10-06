import { useState } from "react";


export function RenderObj(){

    const[obj, setObj] = useState({name:"",password:""});
    const[arr, setArr] = useState([]);

    const handleForm = (e)=>{
        setObj({...obj, [e.target.name] : e.target.value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        setArr([...arr,obj]);
        setObj({name:"",password:""})
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
            <h4>Name:</h4>
           <input type="text" name="name" value={obj.name} onChange={handleForm} placeholder="Enter the Name" required/><br/>
            <p>Password:</p>
           <input type="password" name="password" value={obj.password} onChange={handleForm} required/><br/>
           <button type="submit">Submit</button>
        </form>
        <ul>
            {
            arr.map((ele,idx)=>(
                <li>Name: <strong>{ele.name}</strong><br/>Password: <strong>{ele.password}</strong></li>
            ))
        }</ul>        
        </>
        
    )
}