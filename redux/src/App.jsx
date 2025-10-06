import { useState } from 'react'
import './App.css'
// import { useSelector, useDispatch } from 'react-redux'
// import { addbook, emptyBook } from './store/slice/Socialslice'

// Counter part
import { ReduxCounter } from './reduxCounter'




function App() {
  const [count, setCount] = useState(0)
/*
  const dispatch = useDispatch();
  const addBook = ()=>{
    dispatch(addbook("Book 2"))
  }
  const books = useSelector(book => book.Social.books)
  function getBooks(){
    console.log(books);
  }

  const emptyBooks = ()=>{
      dispatch(emptyBook());
      console.log("Books list is Empty")
  }
*/
  return (
    <>
      {/* <button onClick={addBook}>Add Book</button>
      <button onClick={getBooks}>Get Books</button>
      <button onClick={emptyBooks}>Empty books</button> */}

      <ReduxCounter/>
    </>
  )
}

export default App
