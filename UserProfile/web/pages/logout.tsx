import React from "react";
import Navbar from "../components/Navbar";
import Router from "next/router";

const logout = () => {
  Router.push("/login");
  localStorage.removeItem("jwtoken");

  return (
    <>
      <Navbar />
    </>
  );
};
export default logout;
