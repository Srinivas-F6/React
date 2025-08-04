import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateDemo from './components/statesDemo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StateDemo/>
    </>
  )
}

export default App
