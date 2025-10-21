import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink className={({isActive})=> isActive ? "text-bold text-lg border px-3 rounded-lg text-orange-500" : "text-bold text-lg  px-3"} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-bold text-lg border px-3 rounded-lg text-orange-500" : "text-bold text-lg  px-3"} to="/services">Services</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-bold text-lg border px-3 rounded-lg text-orange-500" : "text-bold text-lg px-3"} to="/my-profile">My Profile</NavLink>
          </ul>
        </div>
        <Link className="flex justify-center items-center">
          <img src={logo} className="h-12" alt="" />
          <a className="pl-3 btn-ghost text-3xl font-bold fontBricolage">Warms Paws</a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
            <NavLink className={({isActive})=> isActive ? "text-bold text-lg border px-3 rounded-lg text-orange-500" : "text-bold text-lg  px-3"} to="/">Home</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-bold text-lg border px-3 rounded-lg text-orange-500" : "text-bold text-lg  px-3"} to="/services">Services</NavLink>
            <NavLink className={({isActive})=> isActive ? "text-bold text-lg border px-3 rounded-lg text-orange-500" : "text-bold text-lg px-3"} to="/my-profile">My Profile</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/" className="border text-xl font-semibold text-orange-500 px-3 flex justify-center items-center gap-2 py-1 rounded-lg"> <FaUserCircle size={30} color="black" /> Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
