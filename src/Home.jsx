import React from 'react';
import users from "../db.json"
import Admin from './Admin';
const Home = () => {
  // Retrieve user information from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='h-screen'>
      <Admin/>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">loged in as, {user ? user.Fullname : 'Guest'}!</h1>
        {user ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Profile Details</h2>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg"><strong>Name:</strong> {user.Fullname}</p>
              <p className="text-lg"><strong>Email:</strong> {user.email}</p>
              <p className="text-lg"><strong>password:</strong> {user.password}</p>
              {/* Add more profile details as needed */}
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('user'); // Clear user info from localStorage
                window.location.href = '/'; // Redirect to login page
              }}
              className="w-full bg-red-500 text-white py-2 rounded-md mt-4 hover:bg-red-600 transition-colors duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-center text-red-500">No user information found. Please log in.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Home;
    