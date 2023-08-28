// src/components/Home.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Task Manager</h1>
      <p>Please log in or register to get started.</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default Home;
