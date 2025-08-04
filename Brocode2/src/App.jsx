import { useState } from 'react'
import Colorpicker from './components/Colorpicker'
import Windowresizer from './components/windowRsizer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Colorpicker/>
       <Windowresizer/>
    </>
  )
}

export default App
