/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  // ✅ Handle profile update
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      toast.error("No user is currently logged in!");
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setIsEditing(false);
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        console.error("Update error:", err);
        toast.error("Failed to update profile!");
      });
  };

  // 🚫 If user not logged in
  if (!user) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[80vh] text-center">
        <img
          src="https://i.ibb.co.com/SXtFQnYL/4727424.png"
          alt="Guest"
          className="w-32 h-32 rounded-full border-4 border-[#F8721F] mb-4 object-cover"
        />
        <h2 className="text-3xl font-semibold text-[#F8721F] mb-2 fontBricolage">
          You are not logged in!
        </h2>
        <p className="text-gray-600 mb-6">
          Please log in to view and edit your profile information.
        </p>
        <button
          onClick={() => navigate("/auth/login")}
          className="py-2 px-6 text-lg text-white font-semibold rounded-lg hover:scale-105 transition-all"
          style={{
            background:
              "linear-gradient(125.07deg, rgba(248,114,31,1), rgba(255,160,0,1) 100%)",
          }}
        >
          Go to Login
        </button>
      </div>
    );
  }

  // 🧍 Logged-in user view
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl fontBricolage font-semibold text-[#F8721F] mb-6">
          My Profile
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "https://i.ibb.co.com/xNN05bX/3135715.png"}
            alt="User"
            className="w-32 h-32 rounded-full border-4 border-[#F8721F] object-cover"
          />
        </div>

        {/* Display Info */}
        {!isEditing ? (
          <>
            <h2 className="text-2xl font-semibold">{user?.displayName || "Anonymous"}</h2>
            <p className="text-gray-600">{user?.email}</p>

            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 py-2 px-5 rounded-lg text-white font-semibold transition-all"
              style={{
                background:
                  "linear-gradient(125.07deg, rgba(248,114,31,1), rgba(255,160,0,1) 100%)",
              }}
            >
              Update Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdateProfile} className="space-y-4 mt-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!user}
            />
            <input
              type="text"
              placeholder="Photo URL"
              className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              disabled={!user}
            />

            <div className="flex justify-between">
              <button
                type="submit"
                disabled={!user}
                className={`py-2 px-4 rounded-lg text-white font-semibold ${
                  !user ? "opacity-60 cursor-not-allowed" : ""
                }`}
                style={{
                  background:
                    "linear-gradient(125.07deg, rgba(248,114,31,1), rgba(255,160,0,1) 100%)",
                }}
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="py-2 px-4 rounded-lg font-semibold border border-[#F8721F] text-[#F8721F]"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
