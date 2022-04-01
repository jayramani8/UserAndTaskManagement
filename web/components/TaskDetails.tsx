import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Router from "next/router";
import { Search } from "react-bootstrap-icons";

var i = 0;
const TaskDetails = () => {
  const [taskData, setTaskData] = useState([]);
  const [filterTask, setFilterTask] = useState<any>({
    searchTask: "",
    sortTask: "",
  });
  // const [sortTask, setSortTask] = useState<any>("");

  useEffect(() => {
    fetch("http://localhost:8080/showTask", {
      method: "post",
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log(data);

        setTaskData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortFiletrChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setFilterTask({
      ...filterTask,
      [e.target.name]: value,
    });
  };

  // const searchTask = async (e: any) => {
  //   setFilterTask(e.target.value);
  // };
  // const sortSubmit = async () => {
  //   const res = await fetch("http://localhost:8080/showTask", {
  //     method: "POST",
  //     body: JSON.stringify({ filterTask }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   setTaskData(data);
  //   console.log(data);
  // };
  console.log(filterTask);

  const searchSubmit = async () => {
    const res = await fetch("http://localhost:8080/showTask", {
      method: "POST",
      body: JSON.stringify(filterTask),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setTaskData(data);
    console.log(data);
  };

  const onClear = async () => {
    const res = await fetch("http://localhost:8080/showTask", {
      method: "POST",
    });
    const data = await res.json();
    setTaskData(data);
  };

  // const sortTaskData = (e: any) => {
  //   setSortTask(e.target.value);
  // };

  const onDeleteHandler = async (id: number) => {
    // alert(id);
    const res = await fetch(`http://localhost:8080/deleteTsk/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      alert("Task Deleted");
      Router.reload();
    }
  };
  return (
    <>
      <div className="">
        <div className="container">
          <div className="nav">
            <div className="nav-left">
              <div className="nav-left-manu">
                <div className="input-group rounded">
                  <div className=" border border-dark">
                    <input
                      type="search"
                      className="form-control"
                      onChange={sortFiletrChange}
                      name="searchTask"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={searchSubmit}
                  >
                    <Search />
                  </button>
                </div>
              </div>
            </div>

            <select
              style={{ width: "250px" }}
              onChange={sortFiletrChange}
              name="sortTask"
              onClick={searchSubmit}
            >
              <option value="">--Short By--</option>
              <option value="title">Title</option>
              <option value="status">Status</option>
              <option value="CompletionDate">Date</option>
              {/* <option value="task">Task</option> */}
            </select>
            <div className="mr-5">
              <button
                type="button"
                className="btn btn-primary mr-2"
                onClick={onClear}
              >
                clear
              </button>
            </div>
            <Link href="/addtask" passHref>
              <button className="btn btn-primary">Add Task</button>
            </Link>
          </div>
        </div>
      </div>
      <table className="table mt-3 container">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col">Assign USer</th>
            <th scope="col">Completion Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {taskData
            // .filter((value: any) => {
            //   if (
            //     value.title.toLowerCase().includes(filterTask.toLowerCase()) ||
            //     // value.assignUser.includes(filterTask.toLowerCase()) ||
            //     value.status.toLowerCase().includes(filterTask.toLowerCase())
            //   ) {
            //     return value;
            //   }
            // })
            // .sort((prev: any, next: any) => {
            //   if (sortTask === "") {
            //     return next;
            //   } else if (sortTask === "title") {
            //     if (prev.title.toLowerCase() < next.title.toLowerCase()) {
            //       return -1;
            //       // console.log("tsk");
            //     }
            //   } else if (sortTask === "status") {
            //     if (prev.status.toLowerCase() < next.status.toLowerCase()) {
            //       return -1;
            //       // console.log("tsk");
            //     }
            //   } else if (sortTask === "date") {
            //     if (
            //       prev.CompletionDate.toLowerCase() <
            //       next.CompletionDate.toLowerCase()
            //     ) {
            //       return -1;
            //       // console.log("tsk");
            //     }
            //   }
            // })
            .map((item: any) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>
                    {item.user.firstname} {item.user.lastname}
                  </td>
                  <td>{item.CompletionDate}</td>
                  <td>{item.status}</td>
                  <td className="text-center">
                    <Link href={`/EditTask/${item.id}`} passHref>
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    {/* <Link href="/edituser" passHref> */}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDeleteHandler(item.id)}
                    >
                      Delete
                    </button>
                    {/* </Link> */}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TaskDetails;
