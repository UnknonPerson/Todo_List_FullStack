import { Outlet, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import { useUser } from "../../context/UserContext";

const Layout = () => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <Nav />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
