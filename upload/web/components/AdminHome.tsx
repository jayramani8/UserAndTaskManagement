import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const AdminHome = () => {
  const [userData, setUserData] = useState<any>([]);
  useEffect(() => {
    fetch("http://localhost:8080/show")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        // console.log(data[0].email);
        setUserData(data);
        // console.log(userData);
      })
      .catch((err) => console.log(err));
    // const data = await res.json();

    // const data = await res.json();
    // console.log(data[0].email);
  }, []);
  console.log;
  console.log(userData[1]);

  return (
    <>
      {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"> */}
      <div className="container ">
        <div className="row mt-4">
          {userData.map((item: any) => {
            return (
              <div className="col-md-12 col-xl-12" key={item.id}>
                <div className="card bg-c-blue order-card">
                  <div className="card-block">
                    <h3 className="m-b-0">
                      {item.firstname} {item.lastname}
                      <Link href="/edituser" passHref>
                        <button type="button" className="f-right btn btn-dark">
                          Edit
                        </button>
                      </Link>
                      {/* <button className="f-right btn btn-dark">Edit</button> */}
                    </h3>
                    <h2 className="text-right">
                      <i className="fa fa-cart-plus f-left"></i>
                      <span>{item.task}</span>
                    </h2>
                    <p className="m-b-0">
                      {item.email}
                      <span className="f-right">{item.status}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminHome;
