// src/components/Dashboard/TaskDetails.tsx
import React from 'react';

function TaskDetails({ task }) {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Task Details</h2>
      <p className="mb-2">Title: {task.title}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}

export default TaskDetails;
