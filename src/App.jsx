import { BrowserRouter, Route, Routes } from "react-router";
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

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/error" element={<Error/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/setting" element={<Setting/>}></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
