import { useState } from 'react'
import { Home } from './components/home'
import './App.css'
import { Axios } from './components/axios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Axios/>
    </>
  )
}

export default App
