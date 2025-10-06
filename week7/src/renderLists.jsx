import { useState } from "react";

export function RenderList() {
    const [list, setList] = useState([]);
    const[val,setVal] = useState("");

    const handleSubmit = ()=>{
        setList([...list,val]);
        setVal("");
    }
    const handleVal = (e)=>{
        setVal(e.target.value);
    }
    return (
        <div>
            <p>Name: </p>
            <input type='text' value={val} onChange={handleVal}  required/>
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {
                    list.map((ele, idx)=>(
                        <li key={idx}>{ele}</li>)
                    )
                }
            </ul>
        </div>
    )
}