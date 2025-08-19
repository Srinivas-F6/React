import React,{ useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/home'
import CareerPath from './components/careerpath'
import Navbars from './navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbars/>
      <Routes>
          <Route path='/' element={<h1>This is the starting page</h1>}/>
          <Route path='/careerpath' element = {<CareerPath/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App;
