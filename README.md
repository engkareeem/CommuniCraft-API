# CommuniCraft Backend API

🔧 Built with Node.js, Express, MongoDB, Mongoose, Atlas, Swagger, JWT, and bcrypt.

## Introduction

Welcome to the backend API for CommuniCraft - Building Bridges Through Collaborative Craftsmanship. This API serves as the foundation for a platform connecting individuals passionate about hands-on creation and fostering meaningful connections through collaborative craft projects.

## Technology Stack

- **Node.js**: A runtime environment for executing JavaScript code outside a browser.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing application data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Atlas**: A cloud-hosted MongoDB service for database management.
- **Swagger**: A tool for documenting and visualizing RESTful APIs.
- **JWT**: JSON Web Tokens for authentication and authorization.
- **bcrypt**: A password hashing function for securing user passwords.

## Project Structure

### MVC Architecture

The project follows the Model-View-Controller (MVC) architectural pattern:

- **Model**: Contains Mongoose schemas defining the structure of data entities (e.g., Projects, Tasks, Users, Tools, Materials).
- **View**: Not applicable as this project focuses solely on backend development.
- **Controller**: Handlers for API routes reside in the `routes` folder, facilitating CRUD operations and business logic.

### Authentication

JWT (JSON Web Tokens) are utilized for authentication, ensuring secure access to API endpoints. Cross-Site Request Forgery (CSRF) protection is implemented, with invalid tokens being blacklisted until expiration.

### Documentation

API documentation is generated using Swagger UI, providing comprehensive insights into available endpoints, request parameters, response formats, and authentication requirements.

## How to Use

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environment variables (e.g., MongoDB URI, JWT secret).
4. Start the server using `npm start`.
5. Access Swagger UI documentation at `/api-docs` route.

## Additional Features

- **User Privacy and Data Security**: Stringent measures are implemented to protect user data by using JWT Tokens.
- **External API Integretion**: Integrate with a weather API to provide users with real-time weather updates based on their project location. It is useful for planning outdoor craft activities or finding suitible conditions for projects.
- **Error Handling**: Robust error handling mechanisms aid in debugging and troubleshooting.

## Future Work for this Project

- Implement role-based access control for enhanced security.
- Enhance testing coverage for improved reliability.
- Explore containerization with Docker for easier deployment and scalability.

## Questions? 

If you have any questions or need assistance, feel free to reach out to the project developers.

---
🚀 Happy crafting and collaboration! 🔨⛏️

note: For simplicity, look at the image down below for API and Database structure and Schema ⬇️
![image](https://github.com/engkareeem/CommuniCraft-API/assets/54283555/359c2464-03b2-4b15-b264-fc8d07b9fe46)
