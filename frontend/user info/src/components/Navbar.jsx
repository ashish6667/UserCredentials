import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]); // update whenever route changes (login/logout)

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold text-blue-600">My App</h1>

      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-blue-500 font-medium">
              Dashboard
            </Link>
            <Link
              to="/logout"
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
