import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";
const Body = lazy(() => import("./Components/Body"));

const Feed = lazy(() => import("./Components/Feed"));

const Profile = lazy(() => import("./Components/Profile"));

const Connection = lazy(() => import("./Components/Connection"));

const Requests = lazy(() => import("./Components/Requests"));

const Setting = lazy(() => import("./Components/Setting"));

const Error = lazy(() => import("./Components/Error"));

const SearchPage = lazy(() => import("./Components/SearchPage"));

const ViewProfile = lazy(() => import("./Components/ViewProfile"));

const Editprofile = lazy(() => import("./Components/Editprofile"));

const Project = lazy(() => import("./Components/Projects"));

const ViewProject = lazy(() => import("./Components/ViewProject"));

const CreateProject = lazy(() => import("./Components/CreateProject"));

const EditProject = lazy(() => import("./Components/EditProject"));

const Chat = lazy(() => import("./Components/Chat"));

import {
  ConditionalHomePage,
  ConditionalLogin,
  ProtectedRoute,
} from "./Components/ProtectedRoute";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={<LoadingSpinner/>}><Body /></Suspense>,
    children: [
      {
        path: "/",
        element: (
         
          
            <ConditionalHomePage />
         
        ),
      },
      {
        path: "feed",
        element: (
          <ProtectedRoute>
            
              <Feed />
           
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <ConditionalLogin />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "connection",
        element: (
          <ProtectedRoute>
            <Connection />
          </ProtectedRoute>
        ),
      },
      {
        path: "requests",
        element: (
          <ProtectedRoute>
            <Requests />
          </ProtectedRoute>
        ),
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "search",
        element: (
          <ProtectedRoute>
            <SearchPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "setting",
        element: (
          <ProtectedRoute>
            <Setting />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile/:userId",
        element: (
          <ProtectedRoute>
            <ViewProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile/edit",
        element: (
          <ProtectedRoute>
            <Editprofile />
          </ProtectedRoute>
        ),
      },
      {
        path: "projects",
        element: (
          <ProtectedRoute>
            <Project />
          </ProtectedRoute>
        ),
      },
      {
        path: "project/view/:projectId",
        element: (
          <ProtectedRoute>
            <ViewProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "create-project",
        element: (
          <ProtectedRoute>
            <CreateProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "project/editproject/:projectId",
        element: (
          <ProtectedRoute>
            <EditProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "chat/:targetUserId",
        element: (
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
