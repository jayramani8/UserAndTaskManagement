import { useRouter } from "next/router";
import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import EditTask from "../../components/EditTask";
import { GetServerSideProps, GetStaticProps } from "next";
import { json } from "stream/consumers";
import fetch from "node-fetch";
import Axios from "axios";
import { type } from "os";

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:8080/showTask", {
//     method: "post",
//     body: JSON.stringify({ pageNo: 2 }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await res.json();

//   const paths = data.data.rows.map((curElem: { id: number }) => {
//     return {
//       params: {
//         editid: curElem.id.toString(),
//       },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const id = params.editid;
  // console.log("jhgd");

  const result = await Axios.get(`http://localhost:8080/update/${id}`);
  const data = result.data;

  return {
    props: {
      data,
    },
  };
};
export type fetchDataType = {
  id: number;
  title: string;
  assignUser: string;
  CompletionDate: Date;
  status: string;
  user: {
    id: number;
    firstname: string;
    lastname: string;
  };
};
const editData = (props: { data: fetchDataType[] }) => {
  // console.log(props.data);
  const { id, title, assignUser, CompletionDate, status } = props.data[0];
  const fetchTaskData = {
    id,
    title,
    assignUser,
    CompletionDate,
    status,
    userID: props.data[0].user === null ? "" : props.data[0].user.id,
    firstname: props.data[0].user === null ? "" : props.data[0].user.firstname,
    lastname: props.data[0].user === null ? "" : props.data[0].user.lastname,
  };
  // console.log(fetchTaskData);

  return (
    <>
      <AdminNavbar />
      <EditTask fetchTask={fetchTaskData} />
    </>
  );
};

export default editData;
