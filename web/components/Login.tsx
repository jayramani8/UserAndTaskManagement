import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const inputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const loginValue = event.target.value;
    setLogin({
      ...login,
      [event.target.name]: loginValue,
    });
  };
  const loginHandler = async (e: any) => {
    if (login.email.trim() === "") {
      toast("email is require");
    } else if (login.password.trim() === "") {
      toast("password is required");
    } else {
      e.preventDefault();
      const res = await fetch("http://localhost:8080/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login.email,
          password: login.password,
        }),
      });
      const data = await res.json();
      // console.log(data.id);
      if (res.status === 400 || !data) {
        alert("login faild");
      } else {
        localStorage.setItem("jwtoken", data.token);
        // console.log(data);

        alert("login success");
        // console.log("login success");
        Router.push("/adminhome");
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
                    <h2 className="text-uppercase text-center mb-5">Login</h2>

                    <form method="post">
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
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={loginHandler}
                        >
                          Login
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

export default Login;
