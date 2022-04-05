import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import Axios from "axios";
// import { fetchDataType } from "../pages/EditTask/[editid]";
export type fetchDataType = {
  id: number;
  title: string;
  assignUser: string;
  CompletionDate: Date;
  status: string;
  userId: number;
  firstname: string;
  lastname: string;
};

const EditTask = (props: any) => {
  const [userData, setUserData] = useState([]);
  const {
    id,
    title,
    assignUser,
    CompletionDate,
    status,
    userId,
    firstname,
    lastname,
  } = props.fetchTask;
  const [updatedTask, setUpdatedTask] = useState({
    id,
    title,
    assignUser,
    CompletionDate,
    status,
  });
  // console.log(updatedTask);
  useEffect(() => {
    Axios.get("http://localhost:8080/active ")
      .then((result) => {
        return result;
      })
      .then((data) => {
        setUserData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setUpdatedTask({
      ...updatedTask,
      [e.target.name]: value,
    });
  };
  const onsubmitHandler = async (e: React.FormEvent) => {
    const UpdatedTaskData = {
      title: updatedTask.title,
      assignUser: updatedTask.assignUser,
      CompletionDate: updatedTask.CompletionDate,
      status: updatedTask.status,
    };
    console.log(UpdatedTaskData);

    const res = await Axios.put(
      `http://localhost:8080/updatedTask/${id}`,
      UpdatedTaskData
    );
    if (res.status === 200) {
      alert("Task Updated");
      Router.push("/taskdetails");
    }
  };
  return (
    <>
      <section
        className="vh-100 bg-image "
        // style={{"background-image: 'url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')'"}}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-4 ">
                <div className="card border border-dark">
                  <div className="card-body p-5">
                    <h2
                      className="text-uppercase text-center mb-5"
                      key={userId}
                    >
                      Edit Task
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          name="title"
                          defaultValue={title}
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Assign User</label>
                        <select
                          className="form-control form-control-lg border border-dark"
                          // defaultValue={userId}
                          name="assignUser"
                          onChange={inputHandler}
                        >
                          <option value={userId}>
                            {firstname} {lastname}
                          </option>
                          {userData.map((userData: any) => {
                            return (
                              <>
                                <option
                                  key={userData.id}
                                  value={userData.id}
                                  // selected={
                                  //   userId == userData.id ? "selected" : ""
                                  // }
                                >
                                  {userData.firstname} {userData.lastname}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Status</label>
                        <select
                          className="form-control form-control-lg border border-dark"
                          defaultValue={status}
                          name="status"
                          onChange={inputHandler}
                        >
                          <option value="complete">complete</option>
                          <option value="pending">pending</option>
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Completion Date</label>
                        <input
                          type="date"
                          name="CompletionDate"
                          id="form3Example4cg"
                          defaultValue={CompletionDate}
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      {/* <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                      </div> */}

                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={onsubmitHandler}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditTask;
