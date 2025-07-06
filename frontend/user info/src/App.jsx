import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // ✅ Import CSS

import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar"; // ✅ Navbar

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* ✅ Toast notification container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-4 text-center">
              <h1 className="text-2xl font-bold">Welcome!</h1>
              <p>
                <a href="/login" className="text-blue-600 underline">Login</a> or{" "}
                <a href="/register" className="text-green-600 underline">Register</a>
              </p>
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
