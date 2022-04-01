/* eslint-disable react-hooks/rules-of-hooks */
import Router from "next/router";
import { useEffect } from "react";

const homePage = () => {
  const authHome = async () => {
    const saveToken = localStorage.getItem("jwtoken");
    // console.log(saveToken);
    if (saveToken === null) {
      // alert("please login first");
      Router.push("/login");
    }
    try {
      const res = await fetch("http://localhost:8080/authHome", {
        method: "GET",
        headers: {
          passToken: "Bearer " + saveToken,
        },
      });
      if (res.status === 200) {
      } else {
        //   alert("please login first");
        Router.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    authHome();
  }, []);
};
// eslint-disable-next-line react-hooks/rules-of-hooks

export default homePage;
