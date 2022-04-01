import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const TaskDetails = () => {
  return (
    <>
      <div className="container ">
        <div className="row mt-4">
          <div className="col-md-12 col-xl-12">
            <div className="card bg-c-blue order-card">
              <div className="card-block">
                <p className="m-b-0">
                  jay Ramani
                  <Link href="/editTask" passHref>
                    <button type="button" className="f-right btn btn-dark">
                      Edit
                    </button>
                  </Link>
                  {/* <button className="f-right btn btn-dark">Edit</button> */}
                </p>
                <h2 className="text-right">
                  <i className="fa fa-cart-plus f-left"></i>
                  <span>Assignment 1</span>
                </h2>
                <p className="m-b-0">
                  complete<span className="f-right">Date:10/12/2022</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-xl-12">
            <div className="card bg-c-green order-card">
              <div className="card-block">
                <h6 className="m-b-20">Orders Received</h6>
                <h2 className="text-right">
                  <i className="fa fa-rocket f-left"></i>
                  <span>486</span>
                </h2>
                <p className="m-b-0">
                  Completed Orders<span className="f-right">351</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-xl-12">
            <div className="card bg-c-yellow order-card">
              <div className="card-block">
                <h6 className="m-b-20">Orders Received</h6>
                <h2 className="text-right">
                  <i className="fa fa-refresh f-left"></i>
                  <span>486</span>
                </h2>
                <p className="m-b-0">
                  Completed Orders<span className="f-right">351</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-xl-12">
            <div className="card bg-c-pink order-card">
              <div className="card-block">
                <h6 className="m-b-20">Orders Received</h6>
                <h2 className="text-right">
                  <i className="fa fa-credit-card f-left"></i>
                  <span>486</span>
                </h2>
                <p className="m-b-0">
                  Completed Orders<span className="f-right">351</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
