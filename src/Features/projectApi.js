import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchProject: builder.query({
      query: (projectId) => ({
        url: `project/view/${projectId}`,
        method: "get",
      }),
    }),
    loadPersonalProjects: builder.query({
      query: () => ({ url: "myprojects", method: "GET" }),
    }),
    createProject:builder.mutation({
     query:(input)=>({
      url:"create-project",
      method:"POST",
      body:input
     })
    })
  }),
});
export const { useFetchProjectQuery, useLoadPersonalProjectsQuery ,useCreateProjectMutation} =
  projectApi;
