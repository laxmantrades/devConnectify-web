import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";

export const chatApi=createApi({
    reducerPath:"chatApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL,
        credentials:"include"
    }),
    endpoints:(builder)=>({
        fetchMessages:builder.query({
            query:(targetUserId)=>({
                url:`/chat/${targetUserId}`,
                method:"get"
            })
        })
    })

})
export const {useFetchMessagesQuery}=chatApi