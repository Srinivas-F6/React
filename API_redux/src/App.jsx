import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment } from './store/jokeSlice'


function App() {
  const [count, setCount] = useState(0)

  const counts = useSelector(state => state.JokeSlice.count);

  const dispatch = useDispatch();
  const incre = ()=>{
      dispatch(increment())
      console.log(counts);
  }

  return (
    <>
       <button onClick={incre}>Increment</button>
    </>
  )
}

export default App
