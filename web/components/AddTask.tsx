import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import Axios from "axios";
// let activeArray: any = [];
const AddTask = () => {
  const [userData, setUserData] = useState([]);
  const [addtask, setAddTask] = useState({
    title: "",
    assignUser: "",
    CompletionDate: "",
  });
  // const [activeData, setActiveData] = useState<any>([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/active")
      .then((result) => {
        return result;
      })
      .then((data) => {
        setUserData(data.data);
        // console.log(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setAddTask({
      ...addtask,
      [event.target.name]: value,
    });
  };
  // console.log(addtask.assignUser);

  const onsubmitHandler = async (e: React.FormEvent) => {
    if (addtask.title.trim() === "") {
      toast("title is required");
    } else if (addtask.CompletionDate === "") {
      toast("CompletionDate is required");
    } else {
      const taskData = {
        title: addtask.title,
        assignUser: addtask.assignUser,
        CompletionDate: addtask.CompletionDate,
      };
      console.log(taskData);
      const res = await Axios.post("http://localhost:8080/addtask", taskData);
      if (res.status === 200) {
        alert("Task Created");
        Router.push("/taskdetails");
      }
    }
  };

  return (
    <>
      <ToastContainer />
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
                    <h2 className="text-uppercase text-center mb-5">
                      Create Task
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          name="title"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Assign User</label>
                        {/* {console.log(activeArray)} */}
                        <select
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                          name="assignUser"
                        >
                          <option>Select User</option>

                          {userData.map((userData: any) => {
                            return (
                              <>
                                <option key={userData.id} value={userData.id}>
                                  {userData.firstname} {userData.lastname}
                                </option>
                              </>
                            );
                          })}
                        </select>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Completion Date</label>
                        <input
                          type="date"
                          name="CompletionDate"
                          onChange={inputHandler}
                          // id="form3Example4cg"
                          //   onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      {/* <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                      </div> */}

                      <div className="mt-5">
                        <Link href="/taskdetails" passHref>
                          <button type="button" className="btn btn-primary">
                            Back
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-primary f-right"
                          onClick={onsubmitHandler}
                        >
                          Add Task
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

export default AddTask;
