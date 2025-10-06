import { useState } from 'react'
import './App.css'
import { RenderList } from './renderLists';
import { RenderObj } from './renderObj';

function App() {
 const[isLoggedIn, setIsLoggedIn] = useState(false);
 const[renderList, setRenderList] = useState(false);
 const[renderObj, setRenderObj] = useState(false);

 const handleLogin = ()=>{
  setIsLoggedIn(true);
 }

 const handleLogout = ()=>{
  setIsLoggedIn(false);
 }

  return (
    <div>
      <h3>Conditional Rendering Example</h3>
      {
        isLoggedIn ? (
          <div>

            <button onClick={handleLogout}>Logout</button>
          </div>
        ):(
          <div>
          <p>Log In using Name and Password:</p><br/>
          <input type='text' placeholder='Enter the Name' required/><br/>
          <input type='password' placeholder='Enter the password' required/><br/>
         <button onClick={handleLogin}>Login</button>
         </div>
        )
      }<br/><br/><br/>
      {
        renderList ? (<RenderList/>) : (
          <>
          <h3>Render Lists</h3>
          <button onClick={()=>setRenderList(true)}>RenderList</button>
          </>
        )
      }<br/><br/><br/>
      {
        renderObj ? (<RenderObj/>) : (
          <>
          <h2>RenderObjects</h2>
          <button onClick={()=>setRenderObj(true)}>RenderObj</button>
          </>
        )
      }
    </div>
  )
}

export default App
