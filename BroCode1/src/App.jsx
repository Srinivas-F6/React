import { useState } from 'react'
import ClickEvent from './components/clickEvent'
import UseState from './components/usestate'
import Onchange from './components/onChange'
import UpdateState from './components/useStateupd'
import StateUpdates from './components/stateUpdates'
import Useeffect from './components/useEffect'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickEvent/>
      <UseState/>
      <Onchange/>
      <UpdateState/>
      <StateUpdates/>
       <p>This block of code for useEffect</p>
       <Useeffect/>
    </>
  )
}

export default App








/* React Hook = Special fuction that allows functional components
                to use React features without writing a class components
                (useState, useEffect, useContext, useReducer, useCallback, and more.....)
                
  useState() = A react hoook that allows the creation of a stateful variable
              AND a setter function to update its value in the virtual DOM.
              [name, setName]          
                
*/