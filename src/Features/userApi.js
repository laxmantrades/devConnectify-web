import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../utils/constants"
import { addUser } from "../utils/userSlice"


export const userApi=createApi({
    reducerPath:"userApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        credentials:"include"
    }),
    endpoints:(builder)=>({
        loadUser:builder.query({
            query:()=>({
                url:"profile/view",
                method:"get"
            }),
            async onQueryStarted(arg,{queryFulfilled,dispatch}){
                try {
                    const result=await queryFulfilled
                    dispatch(addUser(result.data))
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }),
        
    })
})
export const{useLoadUserQuery}=userApi