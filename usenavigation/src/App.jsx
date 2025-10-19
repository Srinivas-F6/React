import { useState } from 'react'
import { Home } from './routes/home'
import { About } from './routes/about'
import { Login } from './routes/login'
import { Register } from './routes/register'
import { Navbar } from './navbar'
import { Route, Routes,useNavigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={navigate('/register')} /> 
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
