// src/components/Dashboard/TaskList.tsx
import React from 'react';

function TaskList({ tasks }) {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul className="list-disc pl-6">
          {tasks.map((task) => (
            <li key={task.id} className="mb-2">
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
