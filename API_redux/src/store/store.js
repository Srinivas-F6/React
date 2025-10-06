import {configureStore} from '@reduxjs/toolkit'
import jokeSlice from './jokeSlice'


const store = configureStore({
    reducer:{
       JokeSlice: jokeSlice
    }
})
export default store;