import React from "react";
import Router from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    sports: "",
    reading: "",
    coding: "",
    cooking: "",
  });

  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setUser({
      ...user,
      [event.target.name]: value,
    });
  };

  const onsubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const hobbies = document.querySelector<Element>(".hobbies");
    const input = hobbies?.querySelectorAll<HTMLInputElement>(
      "input[type='checkbox']:checked"
    );

    let hobbiesData = [];

    for (let i = 0; i < input!.length; i++) {
      hobbiesData.push(input![i].value);
    }

    //register user
    const formData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      mobile: user.mobile,
      address: {
        addressLine: user.address,
        city: user.city,
        state: user.state,
        zip: user.zip,
      },
      hobbies: hobbiesData,
    };
    console.log(formData);

    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // const data = await res.json();
    if (res.status === 200) {
      alert("register success");
      Router.push("/login");
    }

    // fetch("http://localhost:8000/insert", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     alert("ragister success");
    //     Router.push("/login");
    //   });

    // console.log(hobbiesData);
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
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
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
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          name="password"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="form-outline mt-4">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="number"
                          name="mobile"
                          id="form3Example3cg"
                          onChange={inputHandler}
                          className="form-control form-control-lg border border-dark"
                        />
                      </div>
                      <div className="row mt-3">
                        <label className="form-label">Address</label>
                        <div className="col mt-2">
                          <input
                            type="text"
                            name="address"
                            className="form-control border border-dark"
                            onChange={inputHandler}
                            placeholder="Address 1"
                          />
                        </div>
                        <div className="col mt-2">
                          <input
                            type="text"
                            name="city"
                            className="form-control border border-dark"
                            onChange={inputHandler}
                            placeholder="City Name"
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col mt-2">
                          <input
                            type="text"
                            name="state"
                            className="form-control border border-dark"
                            onChange={inputHandler}
                            placeholder="State"
                          />
                        </div>
                        <div className="col mt-2">
                          <input
                            type="number"
                            name="zip"
                            className="form-control border border-dark"
                            onChange={inputHandler}
                            placeholder="Zip Code"
                          />
                        </div>
                      </div>
                      <div className="form-outline mt-4 d-flex flex-column hobbies">
                        <label className="form-label">Hobbies</label>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input border border-dark"
                            type="checkbox"
                            value="sports"
                            name="sports"
                            onChange={inputHandler}
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
                          />
                          <span className="form-check-label">Reading</span>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input border border-dark"
                            type="checkbox"
                            value="coding"
                            name="coding"
                            onChange={inputHandler}
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
                          />
                          <span className="form-check-label">Cooking</span>
                        </div>
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

export default Register;
