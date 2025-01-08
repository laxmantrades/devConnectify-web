import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Feed from "./Components/Feed";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Profile from "./Components/Profile";
import Connection from "./Components/Connection";
import Requests from "./Components/Requests";
import Setting from "./Components/Setting";
import Error from "./Components/Error";
import SearchPage from "./Components/SearchPage";
import Home from "./Components/Home";
import { ConditionalHomePage, ConditionalLogin, ProtectedRoute } from "./Components/ProtectedRoute";
import ViewProfile from "./Components/ViewProfile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
     

        <Body />
     
    ),
    children: [
      {
        path: "/",
        element: <ConditionalHomePage/>,
      },
      {
        path: "feed",
        element: <ProtectedRoute><Feed /></ProtectedRoute>,
      },
      {
        path: "login",
        element: <ConditionalLogin/>,
      },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
      },
      {
        path: "connection",
        element: <ProtectedRoute><Connection /></ProtectedRoute>,
      },
      {
        path: "requests",
        element: <ProtectedRoute><Requests /></ProtectedRoute>,
      },
      {
        path: "error",
        element: <Error />,
      },
      {
        path: "search",
        element: <ProtectedRoute><SearchPage /></ProtectedRoute>,
      },
      {
        path: "setting",
        element: <ProtectedRoute><Setting /></ProtectedRoute>,
      },
      {
        path: "profile/:userId",
        element: <ProtectedRoute>< ViewProfile/></ProtectedRoute>,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
