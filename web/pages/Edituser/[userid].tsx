import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import EditUser from "../../components/EditUser";
import { GetStaticProps } from "next";
import Axios from "axios";

export const getStaticPaths = async () => {
  const res = await Axios.get("http://localhost:8080/show");
  const data = res;
  const userrData = data.data[0];
  const paths = userrData.map((curElem: { id: number }) => {
    return {
      params: {
        userid: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.userid;
  console.log("jhgd");

  const res = await Axios.get(`http://localhost:8080/fetchUser/${id}`);
  const data = res.data;

  return {
    props: {
      data,
    },
  };
};
export type fetchuser = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  status: string;
  //   task: number;
};
const edituser = (props: { data: any }) => {
  //   console.log(props.data[0].id);
  const { id, firstname, lastname, email, status } = props.data[0];
  const fetchUserData = {
    id,
    firstname,
    lastname,
    email,
    status,
  };
  //   console.log(fetchUserData);

  return (
    <>
      <AdminNavbar />
      <EditUser fetchUserData={fetchUserData} />
    </>
  );
};

export default edituser;
