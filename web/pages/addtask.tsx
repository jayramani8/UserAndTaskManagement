import React from "react";
import AddTask from "../components/AddTask";
import AdminNavbar from "../components/AdminNavbar";
import homePage from "./auth";

const addtask = () => {
  homePage();
  return (
    <>
      <AddTask />
    </>
  );
};

export default addtask;
