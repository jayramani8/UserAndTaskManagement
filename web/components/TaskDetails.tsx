import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import Router from "next/router";
import { Search } from "react-bootstrap-icons";
import Axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var i = 0;
const TaskDetails = () => {
  const [taskData, setTaskData] = useState([]);
  const [page, setPage] = useState(1);
  const [filterTask, setFilterTask] = useState({
    searchTask: "",
    sortTask: "",
    order: false,
    pageNo: 1,
  });
  // const [order, setOrder] = useState(true);
  // const [sortTask, setSortTask] = useState("");

  useEffect(() => {
    Axios.post("http://localhost:8080/showTask")
      .then((result) => {
        return result;
      })
      .then((data) => {
        // console.log(data);

        setPage(data.data.page);

        setTaskData(data.data.data.rows);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortFiletrChange = (e: any) => {
    const value = e.target.value;
    setFilterTask({
      ...filterTask,
      [e.target.name]: value,
    });
  };
  // console.log(filterTask);
  // const filterSortData = {
  //   filterTask: filterTask,
  //   order: order,
  // };
  const searchSubmit = async () => {
    const res = await Axios.post("http://localhost:8080/showTask", filterTask);
    const data = res;
    setTaskData(data.data.data.rows);
    setPage(data.data.page);
    console.log(data);
  };

  const onClear = async () => {
    const res = await Axios.post("http://localhost:8080/showTask");
    const data = res;
    setTaskData(data.data.data.rows);
    setPage(data.data.page);
  };

  const sortTitle = async () => {
    setFilterTask({
      searchTask: filterTask.searchTask,
      sortTask: "title",
      order: !filterTask.order,
      pageNo: filterTask.pageNo,
    });
    console.log(filterTask);
    if (filterTask.sortTask) {
      const res = await Axios.post(
        "http://localhost:8080/showTask",
        filterTask
      );
      const data = res;
      setTaskData(data.data.data.rows);
      setPage(data.data.page);
      console.log(data);
    }
  };

  const onDeleteHandler = async (id: number) => {
    const res = await Axios.delete(`http://localhost:8080/deleteTsk/${id}`);
    if (res.status === 200) {
      alert("Task Deleted");
      Router.reload();
    }
  };

  const onPageSubmit = async (pageNo: number) => {
    setFilterTask({
      searchTask: filterTask.searchTask,
      sortTask: filterTask.sortTask,
      order: filterTask.order,
      pageNo: pageNo,
    });
    console.log(filterTask);

    const res = await Axios.post("http://localhost:8080/showTask", filterTask);
    const data = res;
    setTaskData(data.data.data.rows);
    console.log(data);
  };
  // console.log(typeof page);

  return (
    <>
      <div className="">
        <form action="">
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
              {/* 
              <select
                style={{ width: "250px" }}
                onChange={sortFiletrChange}
                name="sortTask"
                onClick={searchSubmit}
              >
                <option value="">--Short By--</option>
                <optgroup label="Title">
                  <option value="title-A">Title (A to Z)</option>
                  <option value="title-D">Title (Z to A)</option>
                </optgroup>
                <optgroup label="Status">
                  <option value="status-A">Status (A to Z)</option>
                  <option value="status-D">Status (Z to A)</option>
                </optgroup>
                <optgroup label="Date">
                  <option value="CompletionDate-A">ascending</option>
                  <option value="CompletionDate-D">descending</option>
                </optgroup>
              </select> */}

              <div className="mr-5">
                <button
                  type="reset"
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
        </form>
      </div>
      <table className="table mt-3 container table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            {/* onChange={sortFiletrChange} */}
            <th scope="col" onChange={sortFiletrChange}>
              Title
              <button
                className="btn"
                name="title"
                value="title"
                onClick={sortTitle}
              >
                sort
              </button>
            </th>
            <th scope="col">Assign USer</th>
            <th scope="col">Completion Date</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((item: any) => {
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
      <section className="container pagination ">
        {(() => {
          const pagecount = [];

          for (let i = 1; i <= page; i++) {
            pagecount.push(
              <button
                name="pageNo"
                key={i}
                value={i}
                onClick={() => onPageSubmit(i)}
              >
                {i}
              </button>
            );
          }

          return pagecount;
        })()}
      </section>
    </>
  );
};

export default TaskDetails;
