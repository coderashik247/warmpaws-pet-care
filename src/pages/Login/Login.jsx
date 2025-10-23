import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You’re in! Let’s take care of some paws!");
        event.target.reset();
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[450px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-black mt-5 font-semibold text-center fontBricolage">
          Login now!
        </h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            {/* ✅ Forgot Password */}
            <div className="text-left mt-2">
              <Link
                to={`/auth/forgot-password?email=${encodeURIComponent(emailInput)}`}
                className="link link-hover text-[#F8721F]"
              >
                Forgot password?
              </Link>
            </div>

            <button className="btn btn-neutral text-white mt-4">Login</button>
          </fieldset>

          <p className="font-semibold text-center pt-5">
            Don’t Have An Account?{" "}
            <Link
              className="text-[#F8721F] text-base fontBricolage"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
