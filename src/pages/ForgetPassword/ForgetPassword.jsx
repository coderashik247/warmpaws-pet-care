import React, { useState, useEffect } from "react";

import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  // 📨 Extract email from query parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const preEmail = params.get("email");
    if (preEmail) setEmail(preEmail);
  }, [location.search]);

  const handleReset = (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Normally you'd call Firebase sendPasswordResetEmail(email)
    toast.success("Password reset email sent! Redirecting to Gmail...");
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
      navigate("/auth/login");
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-[450px]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl mt-5 font-semibold text-center fontBricolage text-[#F8721F]">
          Reset Password
        </h1>

        <form onSubmit={handleReset} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="btn btn-neutral text-white mt-4"
            >
              Reset Password
            </button>
          </fieldset>
          <p className="text-center pt-5">
            Remembered your password?{" "}
            <button
              onClick={() => navigate("/auth/login")}
              className="text-[#F8721F] underline"
            >
              Go back to Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
