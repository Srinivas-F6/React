import {createSlice} from '@reduxjs/toolkit'

const jokeSlice = createSlice({

    name : "JokeSlice",
    initialState:{
       count:0
    },
    reducers:{
        increment: (state, action)=>{
            state.count++;
        }
    }


})

export const{increment} = jokeSlice.actions;
export default jokeSlice.reducer;