import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

console.log(3);
export const api = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"https://dummyjson.com"
    }),
    endpoints:(builder)=>({
        getProducts: builder.query({
            query:(p)=>`/${p}`
        })
        // addProducts: builder.mutation({
        //     query: (product)=>({
        //         url:'/users',
        //         method:'POST',
        //         product
        //     })
        // })
      
    })
})
export const{useGetProductsQuery} = api;