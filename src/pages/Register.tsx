// src/pages/Register.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../services/api';

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
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
