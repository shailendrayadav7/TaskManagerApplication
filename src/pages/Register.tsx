// src/pages/Register.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../services/api';
import { Link } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      await register(data.username, data.password); // Assuming the register function is implemented
      setSuccess(true);
      setError('');
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Link to="/">Home</Link>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('firstName')}
          type="text"
          placeholder="First Name"
          className="border p-2 rounded"
        />
        <input
          {...register('lastName')}
          type="text"
          placeholder="Last Name"
          className="border p-2 rounded"
        />
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          {...register('phone')}
          type="tel"
          placeholder="Phone"
          className="border p-2 rounded"
        />
        <input
          {...register('username')}
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Registration successful. Please log in.</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
