// src/components/Auth/LoginForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../services/api';

function LoginForm({ onLogin }) {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await login(data.username, data.password);
      onLogin(response.data.token); // Assuming you get a JWT token from the backend
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
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
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
