// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Task Manager</h1>
      <p className="text-gray-600 mb-8">Please log in or register to get started.</p>
      <div className="flex gap-4">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Login
        </Link>
        <Link to="/register" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
