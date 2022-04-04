import React from "react";
import { GetStaticProps } from "next";
import Navbar from "../../components/Navbar";
import Edit from "../../components/Edit";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8000/fetchAll");
  const data = await res.json();
  const userrData = data;
  const paths = userrData.map((curElem: { _id: number }) => {
    return {
      params: {
        userId: curElem._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.userId;
  // console.log("jhgd");

  const res = await fetch(`http://localhost:8000/fetchUser/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
const fetchUSer = (props: { data: any }) => {
  console.log(props.data);
  const {
    _id,
    firstName,
    lastName,
    email,
    password,
    mobile,
    address,
    hobbies,
  } = props.data;
  const fetchUserData = {
    _id,
    firstName,
    lastName,
    email,
    password,
    mobile,
    address,
    hobbies,
  };
  return (
    <>
      <Edit fetchData={fetchUserData} />
    </>
  );
};

export default fetchUSer;
