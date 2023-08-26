# Task Manager Application

Full Stack Todo Application Development Task

Task Description:
You are tasked with developing a full-stack Todo application using React with Vite (TypeScript) for the frontend and Java for the backend. The application should allow users to manage their tasks with proper authentication, task creation, editing, and deletion functionalities.

Requirements:

Frontend (React with Vite and TypeScript):

    Use Vite to set up the frontend project.
    Implement user interfaces with suitable UI library (e.g., Material-UI, Ant Design, Chakra UI) for a consistent and visually appealing look.
    Utilize TypeScript to enhance type safety and maintainability.

    User Registration and Login:
        Create registration and login forms using appropriate UI components.
        Implement form validation for user inputs.
        Communicate with the backend for user authentication.

    User Dashboard:
        Display a list of tasks retrieved from the backend.
        Implement a logout button.

    Task Management:
        Create a form to add a new task with title, description, and optional due date.
        Implement an edit feature to modify task details.
        Allow users to delete tasks.

Backend (Java):

    Use Java to develop the backend application.
    Use a suitable web framework (e.g., Spring Boot) for building RESTful APIs.

    User Authentication:
        Implement user registration and store user information securely in a database.
        Use password hashing for security.
        Implement a login mechanism using JWT tokens.(optional)

    Task API:
        Design and implement RESTful API endpoints for CRUD operations on tasks.
        Implement authorisation to ensure only authenticated users can access and modify tasks.

    Database:
        Use a relational database (e.g., MySQL, PostgreSQL) to store user data and tasks.
        Design the database schema to effectively store user data and tasks.

    Authentication Middleware:(optional)
        Create middleware to validate JWT tokens for protected API routes.

Additional Considerations:

    User Experience:
        Implement a responsive UI for various devices.
        Provide feedback messages for user actions.
        Ensure a smooth and intuitive user experience.

    Security:(optional)
        Implement input validation and sanitise user inputs to prevent vulnerabilities.
        Use secure authentication methods and store passwords securely.

    Error Handling:
        Handle errors gracefully on both frontend and backend.
        Provide meaningful error messages to users.

    Version Control and Deployment:
        Use Git for version control of your codebase.
        Deploy the frontend and backend to suitable hosting platforms (e.g., Vercel for frontend, Heroku for backend).
