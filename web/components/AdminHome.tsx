import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";

const AdminHome = () => {
  const [userData, setUserData] = useState([]);
  const [filterUser, setFilterUser] = useState("");
  const [sortUsers, setSortUsers] = useState({
    sortUsers: "",
    sortStatus: "",
  });
  // const [rowsData, setRowsData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/show")
      .then((result) => {
        return result;
      })
      .then((data) => {
        setUserData(data.data[0]);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchUser = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilterUser(event.target.value);
  };
  const sortUser = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSortUsers({
      sortUsers: event.target.value,
      sortStatus: "",
    });
  };
  const sortstatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortUsers({
      sortUsers: "",
      sortStatus: event.target.value,
    });
  };

  const onDeleteHandler = async (id: number) => {
    // alert(id);
    const res = await Axios.delete(`http://localhost:8080/deleteUser/${id}`);
    if (res.status === 200) {
      alert("User Deleted");

      Router.reload();
    }
  };
  // console.log(userData.COUNT(`tasks`.`assignUser`));
  return (
    <>
      {" "}
      <div className="container">
        <div className="">
          <div className="nav">
            <div className="nav-left">
              <div className="nav-left-manu">
                <div className="">
                  <input
                    type="text"
                    placeholder="Search..."
                    onChange={searchUser}
                  />
                </div>
              </div>
            </div>
            <select style={{ width: "250px" }} onChange={sortUser}>
              <option value="">Select Option</option>
              <option value="firstname">FirstName</option>
              <option value="lastname">LastName</option>
              <option value="email">Email</option>
              <option value="task">Task</option>
            </select>
            <select style={{ width: "250px" }} onChange={sortstatus}>
              <option value="">Select Option</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <Link href="/adduser" passHref>
              <button className="btn btn-primary"> Add User</button>
            </Link>
          </div>
        </div>
      </div>
      <table className="table mt-3 table-bordered container">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Task</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData
            .filter((value: any) => {
              if (sortUsers.sortStatus === "active") {
                return value.status === "Active";
                // console.log("jay");
              } else if (sortUsers.sortStatus === "inactive") {
                return value.status === "Inactive";
              }
              if (
                value.firstname
                  .toLowerCase()
                  .includes(filterUser.toLowerCase()) ||
                value.lastname
                  .toLowerCase()
                  .includes(filterUser.toLowerCase()) ||
                value.email.toLowerCase().includes(filterUser.toLowerCase())
                // value.task.includes(filterUser  )
              ) {
                return value;
              }
              // console.log(sortUsers.sortStatus.toLowerCase());
            })
            .sort((prev: any, next: any) => {
              if (sortUsers.sortUsers === "") {
                return next;
              } else if (sortUsers.sortUsers === "firstname") {
                if (
                  prev.firstname.toLowerCase() < next.firstname.toLowerCase()
                ) {
                  return -1;
                }
              } else if (sortUsers.sortUsers === "lastname") {
                if (prev.lastname.toLowerCase() < next.lastname.toLowerCase()) {
                  return -1;
                }
              } else if (sortUsers.sortUsers === "email") {
                if (prev.email.toLowerCase() < next.email.toLowerCase()) {
                  return -1;
                }
              } else if (sortUsers.sortUsers === "task") {
                if (prev.task < next.task) {
                  return -1;
                }
              }
            })
            .map((item: any) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                  <td>{item.task}</td>
                  <td className="text-center">
                    <div className="d-flex justify-content-around">
                      <div>
                        <Link href={`/Edituser/${item.id}`} passHref>
                          <button type="button" className="btn btn-primary">
                            Edit
                          </button>
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => onDeleteHandler(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* <Link href="/edituser" passHref> */}
                  {/* </Link> */}
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AdminHome;
