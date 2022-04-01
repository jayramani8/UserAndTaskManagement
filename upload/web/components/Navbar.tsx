import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
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
              <Link href="/adminhome">Admin home</Link>
            </li>
            <li className="main-menu-item active">
              <Link href="/home">User home</Link>
            </li>
            <li className="main-menu-item">
              <Link href="/registration">Registration</Link>
            </li>
            <li className="main-menu-item">
              <Link href="/login">Login</Link>
            </li>
            <li className="main-menu-item bg-danger">
              <Link href="/logout">login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
