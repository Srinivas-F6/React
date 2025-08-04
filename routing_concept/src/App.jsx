import React,{useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './buttons/home'
import About from './buttons/about'
import Navbar from './component/Navbar'
import Userpage from './buttons/user'
import UserGreeting from './component/UserGreet'

// Conditional Rendering:
/*Allows you to control what gets rendered in 
  your application based on certain conditions 
(show, hide or change components)*/


 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<h1>This is the starting page</h1>}/>
      <Route path='/about' element = {<About/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/user/:name' element = {<Userpage/>}/>
       
       <Route path='*' element = {<h1>Incorrect Route</h1>}/>   //Here  '*' is used for other urls which are not in the routes
    </Routes>
     
     <UserGreeting isLog = {false} name = 'James'/>

    </>
  )
}

export default App
