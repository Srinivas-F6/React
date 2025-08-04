import { useState } from 'react'
import ComponentA from './components/componentA'
import UseReference from './useRef'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA/>
      <UseReference/>
    </>
  )
}

export default App
