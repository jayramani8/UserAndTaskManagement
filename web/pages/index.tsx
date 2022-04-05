import type { NextPage } from "next";
import AdminNavbar from "../components/AdminNavbar";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
};

export default Home;
