import { createSlice } from '@reduxjs/toolkit';


const Socialslice = createSlice({
    name:'Social',
    initialState:{
        books:["Book 1"]
    },
    reducers:{
        addbook: (state, action)=>{
            console.log("addbook function", action.payload)
            console.log(action)
            state.books.push(action.payload)
        },
        emptyBook: (state, action)=>{
            state.books = [];
            console.log(action)
        }
    }
})


export const {addbook,emptyBook} = Socialslice.actions
export default Socialslice.reducer;