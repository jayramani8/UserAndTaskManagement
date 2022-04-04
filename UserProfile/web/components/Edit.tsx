import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Router from "next/router";

const Edit = (props: any) => {
  const {
    _id,
    firstName,
    lastName,
    email,
    password,
    mobile,
    address,
    hobbies,
  } = props.fetchData;
  const [userUpdateData, setUserUpdateData] = useState(props.fetchData);

  // console.log(userData);
  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setUserUpdateData({
      ...userUpdateData,
      [event.target.name]: value,
    });
  };
  const onUpdateHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const hobbies = document.querySelector<Element>(".hobbies");
    const input = hobbies?.querySelectorAll<HTMLInputElement>(
      "input[type='checkbox']:checked"
    );

    let hobbiesData = [];

    for (let i = 0; i < input!.length; i++) {
      hobbiesData.push(input![i].value);
    }
    const UpdatedUserData = {
      firstName: userUpdateData.firstName,
      lastName: userUpdateData.lastName,
      email: userUpdateData.email,
      password: userUpdateData.password,
      mobile: userUpdateData.mobile,
      address: {
        addressLine: userUpdateData.address.addressLine,
        city: userUpdateData.address.city,
        state: userUpdateData.address.state,
        zip: userUpdateData.address.zip,
      },
      hobbies: hobbiesData,
    };
    console.log(UpdatedUserData);

    const res = await fetch(`http://localhost:8000/updateUser/${_id}`, {
      method: "put",
      body: JSON.stringify(UpdatedUserData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      alert("your data will updated");
      // localStorage.removeItem("jwtoken");
      Router.push("/home");
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
                      Update Profile
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg border border-dark"
                          name="firstName"
                          onChange={inputHandler}
                          defaultValue={firstName}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control form-control-lg border border-dark"
                          name="lastName"
                          onChange={inputHandler}
                          defaultValue={lastName}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          id="form3Example4cg"
                          className="form-control form-control-lg border border-dark"
                          name="email"
                          onChange={inputHandler}
                          defaultValue={email}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg border border-dark"
                          name="password"
                          onChange={inputHandler}
                          defaultValue={password}
                        />
                      </div>
                      <div className="form-outline mt-4">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          id="form3Example3cg"
                          className="form-control form-control-lg border border-dark"
                          name="mobile"
                          onChange={inputHandler}
                          defaultValue={mobile}
                        />
                      </div>
                      <div className="row mt-3">
                        <label className="form-label">Address</label>
                        <div className="col mt-2">
                          <input
                            type="text"
                            className="form-control border border-dark"
                            placeholder="Address 1"
                            name="address"
                            onChange={inputHandler}
                            defaultValue={address.addressLine}
                          />
                        </div>
                        <div className="col mt-2">
                          <input
                            type="text"
                            className="form-control border border-dark"
                            name="city"
                            placeholder="City Name"
                            onChange={inputHandler}
                            defaultValue={address.city}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col mt-2">
                          <input
                            type="text"
                            className="form-control border border-dark"
                            name="state"
                            placeholder="State"
                            onChange={inputHandler}
                            defaultValue={address.state}
                          />
                        </div>
                        <div className="col mt-2">
                          <input
                            type="number"
                            className="form-control border border-dark"
                            name="zip"
                            placeholder="Zip Code"
                            onChange={inputHandler}
                            defaultValue={address.zip}
                          />
                        </div>
                      </div>
                      <div className="form-outline mt-4 hobbies">
                        <label className="form-label">Hobbies</label>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input border border-dark"
                            type="checkbox"
                            onChange={inputHandler}
                            defaultChecked={hobbies.includes("sports")}
                            name="sports"
                            value="sports"
                            // checked={hobbies[0] === "sports" ? true : false}
                          />
                          <span className="form-check-label">Sports</span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input border border-dark"
                            type="checkbox"
                            value="reading"
                            name="reading"
                            onChange={inputHandler}
                            defaultChecked={hobbies.includes("reading")}
                            // checked={hobbies[1] === "reading" ? true : false}
                          />
                          <span className="form-check-label">Reading Book</span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input border border-dark"
                            type="checkbox"
                            value="coding"
                            name="coding"
                            onChange={inputHandler}
                            defaultChecked={hobbies.includes("coding")}
                            // checked={hobbies[2] === "coding" ? true : false}
                          />
                          <span className="form-check-label">Coding</span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input border border-dark"
                            type="checkbox"
                            value="cooking"
                            name="cooking"
                            onChange={inputHandler}
                            defaultChecked={hobbies.includes("cooking")}
                            // checked={hobbies[3] === "cooking" ? true : false}
                          />
                          <span className="form-check-label">Cooking</span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={onUpdateHandler}
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

export default Edit;
