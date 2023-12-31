import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import UserLocation from "./Components/UserLocation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import About from "./Components/Navbar/About";
import Connect from "./Components/Navbar/Connect";
import Map from "./Components/Map";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";

import RescueLogin from "./Components/Authentication/RescueCenter/RescueLogin";
import RescueRegister from "./Components/Authentication/RescueCenter/RescueRegister";
import UserLogin from "./Components/Authentication/User/UserLogin";
import UserRegister from "./Components/Authentication/User/UserRegister";
import RescueCenterDashboard from "./Components/Profile/RescueCenterDashboard";
import RequestCenterRequestBoard from "./Components/Profile/RescueCenterReqBoard";

import Error from "./Components/Error";
import Chat from "./Components/Chat";
import TeamMemberBoard from "./Components/Profile/TeamMemberBoard";

import NavBar from "./Components/Navbar/Navbar";

export default function App() {
  const optionsSet1 = ["Option A", "Option B", "Option C"];
  return (
    <Router>
      <Routes>
        <Route path="/userlocation" element={<UserLocation />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/home" element={<Map url="rescuecenters" />} />
        //rescuecenter profile page
        <Route
          path="/rescue/dashboard/:id"
          element={<RescueCenterDashboard />}
        />
        <Route
          path="/rescue/requestboard/:id"
          element={<RequestCenterRequestBoard />}
        />
        <Route
          path="/rescue/requestboard/:id/:memberId"
          element={<TeamMemberBoard />}
        />
        // auth routes
        <Route path="/auth/login" element={<SignIn />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/user/login" element={<UserLogin />} />
        <Route path="/auth/user/register" element={<UserRegister />} />
        <Route path="/auth/rescue/login" element={<RescueLogin />} />
        <Route
          path="/auth/rescue/register"
          element={<RescueRegister options={optionsSet1} />}
        />
        <Route path="/" element={<NavBar />} />
        <Route path="/chat/:roomId" element={<Chat />} />
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}
