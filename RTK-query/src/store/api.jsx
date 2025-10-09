import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const api = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"link"
    }),
    endpoints:(builder)=>({
        
    })
})