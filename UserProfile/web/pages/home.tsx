import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Router from "next/router";
import { Cookies } from "react-cookie";
const userItem = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  mobile: "",
  hobbies: [],
  address: {},
};
const home = () => {
  const [userData, setUserData] = useState(userItem);
  let obj, saveToken;

  const homePage = async () => {
    saveToken = localStorage.getItem("jwtoken");
    // console.log(saveToken);
    if (saveToken === null) {
      Router.push("/login");
    }

    const res = await fetch("http://localhost:8000/auth", {
      method: "GET",
      headers: {
        passToken: "Bearer " + saveToken,
      },
      // credentials: "include",
    });
    if (res.status === 200) {
      const data = await res.json();
      // console.log(data);
      setUserData({
        ...userData,
        ...data,
      });
    } else {
      Router.push("/login");
    }
  };

  // console.log(userData);

  useEffect(() => {
    homePage();
  }, []);

  return (
    <>
      <Navbar />
      <Card user={Object.keys(userData).length === 0 ? "" : userData} />
    </>
  );
};

export default home;
