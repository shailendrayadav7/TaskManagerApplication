// src/components/Dashboard/AddTaskForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddTaskForm({ onAddTask }) {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      // Call API to add task using onAddTask(data) function
      await onAddTask(data);
      reset();
      setError('');
    } catch (error) {
      setError('Failed to add task');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('title')}
          type="text"
          placeholder="Task title"
          className="border p-2 rounded"
        />
        <textarea
          {...register('description')}
          placeholder="Task description"
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskForm;
