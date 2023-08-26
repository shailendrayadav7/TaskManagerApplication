// src/components/Dashboard/EditTaskForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function EditTaskForm({ task, onUpdateTask }) {
  const { register, handleSubmit, setValue } = useForm();
  const [error, setError] = useState('');

  // Set initial form values based on the task
  setValue('title', task.title);
  setValue('description', task.description);

  const onSubmit = async (data) => {
    try {
      // Call API to update task using onUpdateTask(data) function
      await onUpdateTask(data);
      setError('');
    } catch (error) {
      setError('Failed to update task');
    }
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
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
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTaskForm;
