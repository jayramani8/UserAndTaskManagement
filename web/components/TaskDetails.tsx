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
        console.log(data);

        setPage(data.data.page);

        setTaskData(data.data.data.rows);
      })
      .catch((err) => console.log(err));
  }, []);

  const sortFiletrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilterTask({
      ...filterTask,
      [e.target.name]: value,
    });
  };

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

  const sortTitle = async (e: any) => {
    const sortData = {
      searchTask: filterTask.searchTask,
      sortTask: e.target.id,
      order: !filterTask.order,
      pageNo: filterTask.pageNo,
    };

    setFilterTask(sortData);
    // console.log(filterTask);
    if (filterTask.sortTask) {
      const res = await Axios.post("http://localhost:8080/showTask", sortData);
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
    const pageData = {
      searchTask: filterTask.searchTask,
      sortTask: filterTask.sortTask,
      order: filterTask.order,
      pageNo: pageNo,
    };
    setFilterTask(pageData);

    const res = await Axios.post("http://localhost:8080/showTask", pageData);
    const data = res;
    setTaskData(data.data.data.rows);
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
                        className="form-control "
                        onChange={sortFiletrChange}
                        name="searchTask"
                      />
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary search-btn rounded"
                      onClick={searchSubmit}
                    >
                      <Search />
                    </button>
                    <button
                      type="reset"
                      className="btn btn-primary rounded"
                      onClick={onClear}
                    >
                      clear
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

              <div className="mr-5"></div>
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
            <th scope="col" className="text-center">
              No
            </th>
            <th
              scope="col"
              className="table-hading text-center"
              id="title"
              onClick={sortTitle}
            >
              Title
            </th>
            <th scope="col" className="text-center">
              Assign User
            </th>
            <th
              scope="col"
              id="CompletionDate"
              className="table-hading text-center"
              onClick={sortTitle}
            >
              Completion Date
            </th>
            <th
              scope="col"
              id="status"
              className="table-hading text-center"
              onClick={sortTitle}
            >
              Status
            </th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {taskData.map((item: any) => {
            // console.log(item);

            return (
              <tr key={item.id} className="text-center">
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>
                  {item.user === null ? "" : item.user.firstname}{" "}
                  {item.user === null ? "" : item.user.lastname}
                </td>
                <td>{item.CompletionDate}</td>
                <td>{item.status}</td>
                <td className="text-center d-flex">
                  {/* <div className="d-flex text-center"> */}
                  <div className="action-btn">
                    <Link href={`/EditTask/${item.id}`} passHref>
                      <button type="button" className="btn btn-primary">
                        Edit
                      </button>
                    </Link>
                  </div>
                  <div className="ml-5">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => onDeleteHandler(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                  {/* </div> */}
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
                className="rounded"
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
