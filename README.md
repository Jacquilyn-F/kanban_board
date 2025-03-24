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

## Deployment

The application is deployed to Render and can be accessed at the following live URL:

- [Live Application](#)  <!-- Replace # with the actual link to the deployed app -->

## Technologies Used

- **Frontend: React, JSX, CSS**

- **Backend: Node.js, Express, PostgreSQL**

- **Authentication: JWT (JSON Web Tokens)**

- **Deployment: Render**

- **Database: PostgreSQL**

## License

This project is licensed under the MIT license.


## Questions

- If you have any questions, please feel free to contact me at jacquilyn.fletcher89@gmail.com. 
- You can also find more of my work at [Jacquilyn-F](https://github.com/Jacquilyn-F).


