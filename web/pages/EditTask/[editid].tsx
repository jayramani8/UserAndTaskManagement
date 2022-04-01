import { useRouter } from "next/router";
import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import EditTask from "../../components/EditTask";
import { GetStaticProps } from "next";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8080/showTask", {
    method: "post",
  });
  const data = await res.json();

  const paths = data.map((curElem: { id: number }) => {
    return {
      params: {
        editid: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.editid;
  console.log("jhgd");

  const res = await fetch(`http://localhost:8080/update/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const editData = (props: { data: any }) => {
  // console.log(props.data[0].user.firstname);
  const { id, title, assignUser, CompletionDate, status } = props.data[0];
  const fetchTaskData = {
    id,
    title,
    assignUser,
    CompletionDate,
    status,
    userID: props.data[0].user.id,
    firstname: props.data[0].user.firstname,
    lastname: props.data[0].user.lastname,
  };
  // console.log(fetchTaskData);

  return (
    <>
      <EditTask fetchTask={fetchTaskData} />
    </>
  );
};

export default editData;
