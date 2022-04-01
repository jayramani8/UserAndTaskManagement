import React from "react";
import Router from "next/router";

const logout = () => {
  Router.push("/login");
  localStorage.removeItem("jwtoken");
  return <></>;
};

export default logout;
