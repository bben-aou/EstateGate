# EstateGate

## Project Description
EstateGate is a comprehensive platform designed to streamline real estate operations, providing robust functionalities for managing properties, users, and transactions. It leverages modern web technologies to deliver a fast, secure, and scalable application.

## Features
*   User authentication (including OAuth with Google and GitHub)
*   Property management
*   Secure API endpoints
*   Responsive and modern user interface

## Technologies Used

### Frontend
*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A superset of JavaScript that adds static typing.
*   **Vite**: A fast build tool that provides an extremely fast development experience.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **PostCSS**: A tool for transforming CSS with JavaScript plugins.
*   **Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.
*   **ESLint**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

### Backend
*   **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express**: A fast, unopinionated, minimalist web framework for Node.js.
*   **TypeScript**: A superset of JavaScript that adds static typing.
*   **JSON Web Tokens (JWT)**: For secure authentication and authorization.
*   **Passport.js**: Authentication middleware for Node.js, used with Google and GitHub strategies.
*   **Nodemon**: A tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
*   **Database**: (Please specify your database, e.g., MongoDB, PostgreSQL, MySQL)

## Environment Variables
The application requires the following environment variables to be set in a `.env` file in the `server` directory:

*   `PORT`: The port on which the server will run (e.g., `3000`).
*   `NODE_ENV`: The environment the application is running in (e.g., `development`, `production`).
*   `JWT_ACCESS_SECRET`: A secret key for signing JWT access tokens.
*   `JWT_REFRESH_SECRET`: A secret key for signing JWT refresh tokens.
*   `CLIENT_URL`: The URL of your client-side application (e.g., `http://localhost:5173`).
*   `GITHUB_CLIENT_ID`: Your GitHub OAuth client ID.
*   `GITHUB_CLIENT_SECRET`: Your GitHub OAuth client secret.
*   `GITHUB_CALLBACK_URL`: The callback URL for GitHub OAuth (e.g., `http://localhost:3000/auth/github/callback`).
*   `GOOGLE_CLIENT_ID`: Your Google OAuth client ID.
*   `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret.
*   `GOOGLE_CALLBACK_URL`: The callback URL for Google OAuth (e.g., `http://localhost:3000/auth/google/callback`).
*   `SESSION_SECRET`: A secret key for session management.

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd EstateGate

# Install frontend dependencies
cd client
npm install # or yarn install
cd ..

# Install backend dependencies
cd server
npm install # or yarn install
cd ..
```

## Usage

### Development

```bash
# Start the frontend development server
cd client
npm run dev # or yarn dev

# Start the backend development server
cd server
npm run dev # or yarn dev
```

### Production

```bash
# Build the frontend
cd client
npm run build # or yarn build

# Start the backend in production mode
cd server
npm start # or yarn start
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. 
