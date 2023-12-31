import React from "react";
import Course from "./Course";
import Auth from "../Components/Auth";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

function AllRoute({ setuserpic }) {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Auth setuserpic={setuserpic} />} />
      </Routes>
    </>
  );
}

export default AllRoute;
