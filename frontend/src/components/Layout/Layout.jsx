import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import Nav from "./Nav";
import Sidebar from "./Sidebar";

import { useUser } from "../../context/UserContext";

const Layout = () => {
  const { user } = useUser();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Side */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Navbar */}
        <Nav onMenuClick={() => setIsSidebarOpen(true)} />

        {/* Main Content */}
        <main className="min-w-0 flex-1 overflow-x-hidden overflow-y-auto p-2 sm:p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
