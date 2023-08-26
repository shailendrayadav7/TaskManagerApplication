// src/components/Auth/LogoutButton.tsx
import React from 'react';

function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    // Implement logout logic here, such as clearing authentication state
    onLogout();
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}

export default LogoutButton;
