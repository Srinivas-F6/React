import { createSlice } from "@reduxjs/toolkit";

const ReduxCounterSlice = createSlice({
    name:'ReduxCouter',
    initialState:{
        count:0
    },
    reducers:{
        increment: (state, action)=>{
            state.count++;
        },
        decrement: (state, action)=>{
            state.count--;
        },
        reset: (state, action)=>{
            state.count = 0;
        },
        incrementByCount: (state,action)=>{
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, reset, incrementByCount} = ReduxCounterSlice.actions;
export default ReduxCounterSlice.reducer;