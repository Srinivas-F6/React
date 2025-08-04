import { useState } from "react";

function Colorpicker(){
    const[color,setColor] = useState("#FFFFFF");

    const handleColorChange = (e)=>{
        setColor(e.target.value);
    }
    return(
        <div className="colorpicker">
            <h1>Color Picker</h1>
            <div className="colordisplay" style={{backgroundColor: color}}>Selected Color: {color} </div>
            <label>Select a color: </label>
            <input value={color} type="color" onChange={handleColorChange}/>
        </div>
    )
}
export default Colorpicker;