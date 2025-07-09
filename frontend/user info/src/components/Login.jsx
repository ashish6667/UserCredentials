import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
  `${import.meta.env.VITE_API_BASE_URL}/api/users/login`,
  formData
);

      toast.success("Login Successful!");
      console.log(res.data);

      // Store token
      localStorage.setItem("token", res.data.token);

      // Navigate to dashboard or home
      navigate("/");
    } catch (err) {
     toast.error("Login Failed: " + (err.response?.data?.error || err.message));

    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md px-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition space-x-4"
        >
          Login
        </button>

        {/* ✅ Register link with spacing */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
