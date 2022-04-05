import React, { useEffect } from "react";
import AdminHome from "../components/AdminHome";
import AdminNavbar from "../components/AdminNavbar";
import Router from "next/router";
import homePage from "./auth";
const adminhome = () => {
  homePage();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // console.log(homePage());

  return (
    <>
      <AdminNavbar />
      <AdminHome />
    </>
  );
};

export default adminhome;
