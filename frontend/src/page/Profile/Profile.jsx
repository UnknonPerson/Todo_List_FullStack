import { User2Icon } from "lucide-react";
import React, { useContext } from "react";
import userContext from "../../Context/userCntext";

const Profile = () => {
  const { user, setUser} = useContext(userContext);

  const username = user?.user?.username || "Guest";
  const email = user?.user?.email || "No email";

const handleLogout = () => {
  localStorage.removeItem("token");
  setUser(null);
};

  return (
    <div className="min-h-screen flex items-center justify-center p-4">

      {/* Glass Card */}
      <div className="w-full max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 text-white">

        {/* Profile Header */}
        <div className="flex items-center gap-6 border-b border-white/20 pb-6">

          {/* Avatar (FIXED) */}
          <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10">
            <User2Icon size={40} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">{username}</h2>
            <p className="text-sm text-gray-300">{email}</p>
          </div>

          <button className="ml-auto px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 transition">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[
            { label: "Total Tasks", value: 42 },
            { label: "Completed", value: 30 },
            { label: "Pending", value: 12 },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-md"
            >
              <p className="text-lg font-bold">{item.value}</p>
              <p className="text-sm text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 space-y-4">
          <button className="w-full text-left px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
            Change Password
          </button>

          <button className="w-full text-left px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
            Toggle Theme
          </button>

          <button onClick={handleLogout} className="w-full text-left px-4 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;