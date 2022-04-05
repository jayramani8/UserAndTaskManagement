import Link from "next/link";
import React from "react";
import Router from "next/router";

const Card = (props: any) => {
  // const id = props.user.id;
  const { id, firstName, lastName, email, password, mobile, address, hobbies } =
    props.user;

  // console.log(updateData);
  const deleteHandler = async () => {
    const res = await fetch(`http://localhost:8000/deleteUser/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      alert("you are deleted");
      localStorage.removeItem("jwtoken");
      Router.push("/login");
    }
  };

  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12 card-position">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        {/*  <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image"> */}{" "}
                      </div>
                      <h3 className="f-w-600">
                        {firstName} {lastName}
                      </h3>
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Email</p>
                          <h6 className="text-muted f-w-400">{email}</h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Phone</p>
                          <h6 className="text-muted f-w-400">{mobile}</h6>
                        </div>
                      </div>
                      <h6 className=" m-t-40  b-b-default f-w-600">Hobbies</h6>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="">
                            {hobbies[0]} <br />
                            {hobbies[1]} <br />
                            {hobbies[2]} <br />
                            {hobbies[3]}
                          </p>
                        </div>
                      </div>
                      {/* <h6 className="  b-b-default f-w-600">Address</h6> */}
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Address</p>
                          <h6 className="text-muted f-w-400">
                            {address.addressLine}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">City</p>
                          <h6 className="text-muted f-w-400">{address.city}</h6>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">State</p>
                          <h6 className="text-muted f-w-400">
                            {address.state}
                          </h6>
                        </div>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600">Pin</p>
                          <h6 className="text-muted f-w-400">{address.zip}</h6>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-sm-6">
                          <Link href={`/Edituser/${id}`} passHref>
                            <button type="button" className="btn btn-primary">
                              Update
                            </button>
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={deleteHandler}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="text-center p-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
