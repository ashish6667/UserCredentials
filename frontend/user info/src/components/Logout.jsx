// Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    toast.success("You have been logged out.");
    navigate("/login");
  }, [navigate]);

  return null; // Nothing to render
};

export default Logout;
