import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleLogOut = () => {
    signOutUser().then().catch();
  };

  return (
    <div className="navbar bg-base-100 mt-10">
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
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bold text-lg border px-3 rounded-lg text-orange-500"
                  : "text-bold text-lg  px-3"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bold text-lg border px-3 rounded-lg text-orange-500"
                  : "text-bold text-lg  px-3"
              }
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-bold text-lg border px-3 rounded-lg text-orange-500"
                  : "text-bold text-lg px-3"
              }
              to="/my-profile"
            >
              My Profile
            </NavLink>
          </ul>
        </div>
        <Link className="flex justify-center items-center">
          <img src={logo} className="h-12" alt="" />
          <p className="pl-3 btn-ghost text-lg md:text-3xl font-bold fontBricolage">
            Warms Paws
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-bold text-lg border px-3 rounded-lg text-orange-500"
                : "text-bold text-lg  px-3"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-bold text-lg border px-3 rounded-lg text-orange-500"
                : "text-bold text-lg  px-3"
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-bold text-lg border px-3 rounded-lg text-orange-500"
                : "text-bold text-lg px-3"
            }
            to="/my-profile"
          >
            My Profile
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <div className="relative group">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full border border-gray-300 object-cover cursor-pointer"
              />
              {/* Hover Tooltip */}
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs px-6 py-1 rounded shadow">
                {user.displayName || "No Name"}
              </span>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogOut}
              className="border text-lg font-semibold text-orange-500 px-3 py-1 rounded-lg hover:bg-orange-100 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/auth/login"
              className="border text-lg font-semibold text-orange-500 px-3 py-1 rounded-lg flex items-center gap-2 hover:bg-orange-100 transition"
            >
              <FaUserCircle size={24} />
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
