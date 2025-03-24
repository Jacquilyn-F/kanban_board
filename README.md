# Kanban Board with Authentication

## Project Overview

This project implements a Kanban board application with secure user authentication using JSON Web Tokens (JWT). The application allows users to log in, manage tasks, and ensures that only authenticated users can access the Kanban board. The app is deployed on Render with a PostgreSQL database, following a full-stack React architecture.

## Features

- **Secure Login Page**: Users are presented with a login page to authenticate their credentials.
- **JWT Authentication**: On successful login, users are issued a JSON Web Token (JWT), stored in local storage for authenticated requests.
- **Kanban Board**: After logging in, users can access the main Kanban board where tasks are displayed in columns based on their status.
- **Session Expiry**: Sessions expire after a defined period of inactivity. Upon expiration, users are redirected to the login page.
- **Logout**: Users can log out, which removes the JWT from local storage and redirects them to the login page.
- **Error Handling**: Invalid login attempts show an error message indicating incorrect credentials.
# Kanban Board with Authentication
## Getting Started

### Prerequisites

To run this project locally, ensure you have the following installed:

- **Node.js**: The runtime for the application.
- **PostgreSQL**: The database used by the backend.
- **Render account**: For deploying the application.

### Steps to Run Locally

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/kanban-board.git
    cd kanban-board
    ```

2. **Set Up Environment Variables**:

    Create a `.env` file in the root of the `server` directory and add the following:

    ```bash
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password
    JWT_SECRET='your_secret_key'
    ```

3. **Install Dependencies**:

    Install both frontend and backend dependencies.

    ```bash
    npm install
    ```
    
4. **Run the Application Locally**:

    ```bash
      npm run start:dev
    ```

5. **Access the Application**:

    Visit `http://localhost:3000` in your browser to view the application.

## Deployment

The application is deployed to Render and can be accessed at the following live URL:

- [Live Application](https://kanban-board-ynbc.onrender.com)  
- [GitHub Repository](https://github.com/Jacquilyn-F/kanban_board)

## Technologies Used

- **Frontend**: React, JSX, CSS
- **Backend**: Node.js, Express, PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Render
- **Database**: PostgreSQL

## License

This project is licensed under the MIT license.

## Questions

- If you have any questions, please feel free to contact me at [jacquilyn.fletcher89@gmail.com](mailto:jacquilyn.fletcher89@gmail.com).
- You can also find more of my work at [Jacquilyn-F](https://github.com/Jacquilyn-F).
