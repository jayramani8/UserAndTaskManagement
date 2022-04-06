import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { type } from "os";
import Router from "next/router";
import Axios from "axios";
import { fetchuser } from "../pages/Edituser/[userid]";
import Link from "next/link";

const EditUser = (props: any) => {
  console.log(props.fetchUserData);
  const { id, firstname, lastname, email, status } = props.fetchUserData;
  const [fetchUserData, setFetchUserData] = useState(props.fetchUserData);
  console.log(fetchUserData);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setFetchUserData({
      ...fetchUserData,
      [e.target.name]: value,
    });
  };
  // console.log(fetchUserData);

  const onsubmitHandler = async (e: React.FormEvent) => {
    const UpdatedUserData = {
      firstname: fetchUserData.firstname,
      lastname: fetchUserData.lastname,
      email: fetchUserData.email,
      status: fetchUserData.status,
    };
    const res = await Axios.put(
      `http://localhost:8080/updateUSer/${id}`,
      UpdatedUserData
    );
    if (res.status === 200) {
      alert("User Updated");
      Router.push("/adminhome");
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
                    <h2 className="text-uppercase text-center mb-5">
                      Edit an User
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="firstname"
                          defaultValue={firstname}
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="lastname"
                          defaultValue={lastname}
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="form3Example4cg"
                          defaultValue={email}
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label">Status</label>
                        <select
                          className="form-control form-control-lg border border-dark"
                          onChange={inputHandler}
                          name="status"
                          defaultValue={status}
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <Link href="/adminhome" passHref>
                          <button type="button" className="btn btn-primary">
                            Back
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="btn btn-primary f-right"
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

export default EditUser;
