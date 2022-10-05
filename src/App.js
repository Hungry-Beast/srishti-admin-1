import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { productInputs, userInputs } from "./formSource";

// import Register from "./pages/club/register";
import Login from "./pages/login/Login";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { Route } from "@mui/icons-material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateClub from "./pages/club/clubRegister";
import ClubEvent from "./pages/events/clubEvent";
import Single1 from "./pages/single/Single1";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/">
            <Route path="login" element={<Login />} />
          </Route> */}
          <Route path="/login" element={<Login />} />
          <Route path="/createClub" element={<CreateClub />} />
          <Route path="/clubEvent" element={<ClubEvent />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route index element={<Home />} />
          <Route path="/events">
            {/* <Route index element={<List />} /> */}
            <Route path=":clubId" element={<Single1 />} />
          </Route>
          <Route path='/registration'>
            <Route path=':eventId' element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
