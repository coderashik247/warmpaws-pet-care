/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUser, setUser, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    // Password Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            event.target.reset();
            navigate("/");
            toast.success("Welcome to WarmPaws! Your account is all set!");
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            setUser(user);
            toast.error("Profile update failed!");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        toast.error(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success(`Welcome, ${user.displayName || "Friend"} `);
        navigate("/");

      })
      .catch((error) => toast.error(error.message));
  };
  const handleTogglePasswordShow = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center items-center min-h-[450px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl  mt-5 font-semibold text-center fontBricolage">
          Register now!
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />
            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              <button
                onClick={handleTogglePasswordShow}
                className="btn btn-xs top-2 right-5 absolute"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            </div>
            <button className="btn btn-neutral text-white mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link
                className="text-[#F8721F] text-base fontBricolage"
                to="/auth/login"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>

        <button
        type="button"
          onClick={handleGoogleLogin}
          className="mx-6 mb-3 btn border-2 border-[#F8721F] text-[#F8721F] hover:bg-[#F8721F] hover:text-white font-semibold"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;

// #F8721F
