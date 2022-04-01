import React from "react";
import AddUser from "../components/AddUser";
import AdminNavbar from "../components/AdminNavbar";
import homePage from "./auth";

const adduser = () => {
  homePage();
  return (
    <>
      <AddUser />
    </>
  );
};

export default adduser;
