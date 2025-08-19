import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
  const navigate = useNavigate();
  const[name,setName] = useState();
    function GoToUserPage(){
      navigate(`/user/${name}`)
    }
    return(
        <>
        {/* <Navbar/> */}
          <h4>Click The Home Button</h4>
          <input type="text" placeholder="Enter the name"
          onChange={(e)=>{
                setName(e.target.value)
          }} value={name}/>
          <button onClick={GoToUserPage} >Proceed</button>
        </>
    )
    
}
export default Home;