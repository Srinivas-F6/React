import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';


const jokeSlice = createSlice({

    name : "JokeSlice",
    initialState:{
       count:0
    },
    reducers:{
    },
    extraReducers:{

    }

})

export const{increment} = jokeSlice.actions;
export default jokeSlice.reducer;