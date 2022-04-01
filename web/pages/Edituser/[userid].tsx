import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import EditUser from "../../components/EditUser";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8080/show");
  const data = await res.json();
  const userrData = data[0];
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

  const res = await fetch(`http://localhost:8080/fetchUser/${id}`);
  const data = await res.json();

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
  const fetchUserData: fetchuser = {
    id,
    firstname,
    lastname,
    email,
    status,
  };
  //   console.log(fetchUserData);

  return (
    <>
      <EditUser fetchUserData={fetchUserData} />
    </>
  );
};

export default edituser;
