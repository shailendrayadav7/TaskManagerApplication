// src/services/api.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Update with your backend API URL

// Function to handle user login
export async function login(username, password) {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to handle user registration
export async function register(username, password) {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to fetch tasks
export async function fetchTasks(token) {
  try {
    const response = await axios.get(`${BASE_URL}/tasks`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to add a new task
export async function addTask(token, taskData) {
  try {
    const response = await axios.post(`${BASE_URL}/tasks`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to update a task
export async function updateTask(token, taskId, taskData) {
  try {
    const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, taskData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to delete a task
export async function deleteTask(token, taskId) {
  try {
    const response = await axios.delete(`${BASE_URL}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
