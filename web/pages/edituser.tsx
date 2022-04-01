import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import EditUser from "../components/EditUser";
import homePage from "./auth";

const edituser = () => {
  homePage();
  return (
    <>
      <EditUser />
    </>
  );
};

export default edituser;
