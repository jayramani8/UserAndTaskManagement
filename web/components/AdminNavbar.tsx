import React from "react";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <>
      {" "}
      <div className="main-div">
        <div className="container">
          <div className="nav">
            <div className="nav-left">
              <div className="nav-left-manu">
                <div className="nav-text">Admin Management</div>
              </div>
            </div>

            <ul className="nav-right main-menu">
              <li className="main-menu-item active">
                <Link href="/adminhome">User Details</Link>
              </li>
              {/* <li className="main-menu-item active">
              </li> */}
              {/* <li className="main-menu-item">
              </li> */}
              <li className="main-menu-item">
                <Link href="/taskdetails">Task Details</Link>
              </li>
              <li className="main-menu-item bg-danger">
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
