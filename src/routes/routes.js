import React from "react";
import { Route } from "react-router-dom";
import Network from "../networkPage/Network";
import Dashboard from "../pages/Dashboard";
import LocationManagement from "../pages/LocationManagement/LocationManagement";
import LocationPage from "../pages/LocationManagement/LocationPage";
import LocationProfilePage from "../pages/LocationProfilePage/LocationProfilePage";
import LoginForm from "../pages/login";

export default [
  <Route path="/">
    <Route path="home"></Route>
    <Route path="Network" element={<Network />}></Route>
  </Route>
];
