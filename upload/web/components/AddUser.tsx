import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const AddUser = () => {
  const [insertUser, setInsertUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    status: "",
    task: "",
  });
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setInsertUser({
      ...insertUser,
      [event.target.name]: value,
    });
  };
  const onsubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const addUserData = {
      firstname: insertUser.firstname,
      lastname: insertUser.lastname,
      email: insertUser.email,
      status: insertUser.status,
    };
    console.log(addUserData);

    fetch("http://localhost:8080/insert", {
      method: "POST",
      body: JSON.stringify(addUserData),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
                    <h2 className="text-uppercase text-center mb-5">
                      Create an User
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          //   onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          //   onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="form3Example4cg"
                          //   onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Status</label>
                        <select
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                          name="status"
                        >
                          <option>Select</option>
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </div>

                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={onsubmitHandler}
                        >
                          Register
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

export default AddUser;
