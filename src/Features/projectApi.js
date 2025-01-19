import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";

export const projectApi = createApi({
  reducerPath: "projectApi",
  tagTypes: ["Refetch"],
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
      providesTags: ["Refetch"],
    }),
    loadPersonalProjects: builder.query({
      query: (userId) => ({ url: `myprojects/${userId}`, method: "GET" }),
      invalidatesTags: ["Refetch"],
    }),
    createProject: builder.mutation({
      query: (input) => ({
        url: "create-project",
        method: "POST",
        body: input,
      }),
      invalidatesTags: ["Refetch"],
    }),
    editProject: builder.mutation({
      query: ({ input, projectId }) => ({
        url: `/project/edit/${projectId}`,
        method: "PATCH",
        body: input,
      }),
      invalidatesTags: ["Refetch"],
    }),
    loadnetworkproject:builder.query({
      query:()=>({
        url:"projects/interested&accepted",
        method:"GET",
        
      })
    })
  }),
});
export const {
  useFetchProjectQuery,
  useLoadPersonalProjectsQuery,
  useCreateProjectMutation,
  useEditProjectMutation,
  useLoadnetworkprojectQuery
} = projectApi;
