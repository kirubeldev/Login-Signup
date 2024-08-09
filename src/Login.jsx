import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email);

        if (user && user.password === password) {
          // Store user info in localStorage
          localStorage.setItem("user", JSON.stringify(user));
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Invalid email or password.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
          <Link to={"/signup"} className="text-[12px]">
            Don't have an account? Go to Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
