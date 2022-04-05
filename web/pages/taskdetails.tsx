import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import TaskDetails from "../components/TaskDetails";
import homePage from "./auth";

const taskdetails = () => {
  homePage();
  return (
    <>
      <AdminNavbar />
      <TaskDetails />
    </>
  );
};

export default taskdetails;
