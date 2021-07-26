import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/Navbar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./WeebWatchList.css";

export const WeebWatchList = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("weeb_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);