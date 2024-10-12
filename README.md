# Backend Development Task

This is a Node.js-based backend API that includes essential CRUD functionalities, user authentication with JWT, project management features (bulk export/import in CSV format), and a simple payment simulation endpoint. The project follows the MVC architecture using **MongoDB** as the database and **Express.js** for the routing.

## Key Features

1. **User Authentication**
   - JWT-based authentication is implemented for secure access.
   - An endpoint to login and generate JWT tokens.

2. **Project Management APIs**
   - **CRUD** operations for managing projects.
   - **Bulk Export**: Projects can be exported in **CSV** format.
   - **Bulk Import**: Projects can be uploaded in bulk via CSV import.
   
3. **Payment Integration**
   - A simple payment simulation where users can mark a payment as paid, simulating the functionality of a payment gateway like Stripe.

## Folder Structure

```bash
/controllers
  - authController.js      # Handles authentication logic
  - projectController.js   # Handles project CRUD and import/export logic
  - paymentController.js   # Handles payment marking logic
/models
  - projectModel.js        # Defines the Project schema
  - paymentModel.js        # Defines the Payment schema
/routes
  - authRoutes.js          # Authentication routes
  - projectRoutes.js       # Project management routes
  - paymentRoutes.js       # Payment-related routes
/config
  - db.js                  # MongoDB connection setup
/middleware
  - authMiddleware.js      # Middleware to protect routes with JWT authentication
app.js                     # Main application entry point
package.json               # Dependencies and scripts
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/backend-task.git
   ```

2. Navigate into the project directory:

   ```bash
   cd backend-task
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project with the following environment variables:

   ```bash
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

5. Run the app in development mode using Nodemon:

   ```bash
   npm run start
   ```

## Endpoints

### Authentication

#### POST `/api/auth/login`
- **Description**: Login and receive a JWT token.
- **Request Body**:
  ```json
  {
    "username": "admin",
    "password": "password"
  }
  ```
- **Response**:
  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```

### Projects

#### POST `/api/projects`
- **Description**: Create a new project.
- **Protected**: Yes (JWT)
- **Request Body**:
  ```json
  {
    "name": "New Project",
    "description": "Project Description",
    "budget": 10000
  }
  ```
- **Response**:
  ```json
  {
    "_id": "601d3b10f4b68e0015ffb1ad",
    "name": "New Project",
    "description": "Project Description",
    "budget": 10000,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
  ```

#### GET `/api/projects`
- **Description**: Fetch all projects.
- **Protected**: Yes (JWT)

#### GET `/api/projects/export`
- **Description**: Export all projects to CSV.
- **Protected**: Yes (JWT)

#### POST `/api/projects/import`
- **Description**: Import projects from a CSV file.
- **Protected**: Yes (JWT)
- **Request Body**: Array of project objects.

### Payments

#### PATCH `/api/payments/:paymentId/paid`
- **Description**: Mark a payment as paid.
- **Protected**: Yes (JWT)

- **Response**:
  ```json
  {
    "message": "Payment marked as paid",
    "payment": {
      "_id": "601d3b10f4b68e0015ffb1af",
      "projectId": "601d3b10f4b68e0015ffb1ad",
      "amount": 1000,
      "status": "paid",
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  }
  ```

## Middleware

- **JWT Middleware**: The application uses a middleware (`authMiddleware.js`) to protect certain routes by verifying JWT tokens.

## Running Tests

Tests are not currently included in this project. However, you can add them using frameworks such as **Jest** or **Mocha**.

## Technology Stack

- **Node.js** - Runtime for building backend services.
- **Express.js** - Web framework for building the API.
- **MongoDB** - NoSQL database for storing project and payment information.
- **JWT (JSON Web Tokens)** - Used for user authentication.
- **Nodemon** - For auto-reloading during development.

## To-Do

- Implement proper validation for user login and project inputs.
- Add tests to cover all endpoints and edge cases.
- Implement actual payment gateway integration (e.g., Stripe).
