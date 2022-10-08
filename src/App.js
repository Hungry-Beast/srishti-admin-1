import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import CreateClub from "./pages/club/clubRegister";
import ClubEvent from "./pages/events/clubEvent";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { user } from "./localStore";
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
          {/* <Route path="/downloadPdf" element={<DownloadPdf />} /> */}
          <Route
            path="/createClub"
            element={user ? <CreateClub /> : <Navigate to="/login" />}
          />
          <Route path="/clubEvent" element={user ? <ClubEvent /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={user ? "/" : "/login"} />} />
          <Route indexcypher25
            element={<Home />} />
          <Route path="/events">
            {/* <Route index element={<List />} /> */}
            <Route path=":clubId" element={<Single1 />} />
          </Route>
          <Route path="/registration">
            <Route path=":eventId" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
