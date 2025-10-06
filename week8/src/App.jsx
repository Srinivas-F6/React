import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<h1>This is Home Page</h1>}/>
      <Route path='/info' element={<h1>Info</h1>} />
      <Route path='*' element = {<h1>Incorrect Route</h1>}/>
    </Routes>
    </>
  )
}

export default App
