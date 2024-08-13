import { UserIcon } from "@heroicons/react/16/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Define Zod schema
const schema = z.object({
  Fullname: z.string().min(2).max(20, "First name must be between 2 and 20 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(4).max(20, "Password must be between 8 and 20 characters"),
  ConfirmPassword: z.string().min(4).max(20, "Confirm Password must be between 8 and 20 characters"),
}).refine(data => data.password === data.ConfirmPassword, {
  message: "Passwords do not match",
  path: ["ConfirmPassword"], // Path to the error
});

const Signup = () => {
  const navigate = useNavigate();

  // Initialize react-hook-form with Zod resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate("/"); // Redirect after successful registration
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex mx-auto items-center justify-center mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Signup</h2>
          <UserIcon className="h-6 w-6 text-gray-500 ml-2" />
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-gray-600 mb-1" htmlFor="first-name">Full Name:</label>
            <input
              type="text"
              id="first-name"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your first name"
              {...register("Fullname")}
            />
            {errors.Fullname && <p className="text-red-500 text-sm">{errors.Fullname.message}</p>}
          </div>

          

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-gray-600 mb-1" htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
              {...register("ConfirmPassword")}
            />
            {errors.ConfirmPassword && <p className="text-red-500 text-sm">{errors.ConfirmPassword.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300"
          >
            Sign Up
          </button>

          <Link to={"/"} className="text-[12px] text-blue-500 hover:underline mt-2">
            Already have an account? Go to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
