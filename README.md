# Real Estate App

Welcome to the Real Estate App! This application allows users to register, log in, log out, create new posts for properties, save posts, send messages to property owners using real-time chat, and much more. Below you will find an overview of the features, setup instructions, and dependencies used in the project.

# Features

User Authentication: Register, login, and logout functionality.
Create and Manage Posts: Users can create new posts for properties with multiple images and additional information.
Save Posts: Users can save posts to their profile for easy access.
Real-Time Chat: Send messages to property owners using socket.io for real-time communication.
Map Integration: View the locations of properties on a map using Leaflet and React-Leaflet.
Advanced Filtering: Filter properties by buy/rent, city, minimum price, maximum price, and number of bedrooms.
User Profile: Manage your posts, saved posts, and messages. Update profile information, including changing password, username, email, and avatar.
Upload Images: Upload multiple images for posts and profile avatar.

# Frontend Dependencies

The frontend of the app is built using React and Vite. Below are the main dependencies used:

axios: ^1.6.8
Used for making HTTP requests to the backend API.
dompurify: ^3.1.5
Used to sanitize HTML content to prevent XSS attacks.
leaflet: ^1.9.4
A JavaScript library for interactive maps.
react: ^18.2.0
A JavaScript library for building user interfaces.
react-dom: ^18.2.0
Provides DOM-specific methods for React.
react-leaflet: ^4.2.1
React components for Leaflet maps.
react-quill: ^2.0.0
A rich text editor component for React.
react-router-dom: ^6.23.0
Declarative routing for React applications.
sass: ^1.76.0
CSS preprocessor for adding variables, nested rules, and more.
socket.io-client: ^4.7.5
Real-time bidirectional event-based communication for connecting to the socket server.
timeago.js: ^4.0.2
Library for converting timestamps to "time ago" format.
zustand: ^4.5.2
A small, fast, and scalable bearbones state management solution using simplified flux principles.
Frontend Scripts
dev: vite
Starts the development server.
build: vite build
Builds the application for production.
lint: eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0
Runs ESLint to lint the codebase.
preview: vite preview
Previews the production build locally.

# Backend Dependencies
The backend of the app is built using Express and Prisma. Below are the main dependencies used:

@prisma/client: ^5.13.0
ORM for Node.js and TypeScript.
bcrypt: ^5.1.1
Library to hash passwords.
cookie-parser: ^1.4.6
Middleware for parsing cookies.
cors: ^2.8.5
Middleware for enabling CORS (Cross-Origin Resource Sharing).
dotenv: ^16.4.5
Loads environment variables from a .env file into process.env.
express: ^4.19.2
Web framework for Node.js.
jsonwebtoken: ^9.0.2
Library for generating and verifying JSON Web Tokens.
nodemon: ^3.1.0
Utility that automatically restarts the node application when file changes are detected.
prisma: ^5.13.0
Prisma CLI for database migrations and introspection.
Backend Scripts
test: echo "Error: no test specified" && exit 1
Placeholder for test script.
start: nodemon app.js
Starts the backend server with automatic restarts on file changes.

# Socket Server Dependencies

The socket server is built using Socket.io. Below are the main dependencies used:

nodemon: ^3.1.3
Utility that automatically restarts the node application when file changes are detected.
socket.io: ^4.7.5
Library for real-time, bidirectional event-based communication.
Socket Server Scripts
test: echo "Error: no test specified" && exit 1
Placeholder for test script.
start: nodemon app.js
Starts the socket server with automatic restarts on file changes.


# Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

# License
This project is licensed under the MIT License.
