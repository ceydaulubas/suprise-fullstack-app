# Happy Celebrations Hub Backend!

## Getting Structe

The server listens on port 5001, and you can access it at http://localhost:5001.

## Structure

The main server file is app.js, where you'll find the middleware setup, database connection, and routes.

This application uses two models: User and Surprise. Each user can create surprises.

## Controllers

The application logic is handled in various controllers:

sendEmailController.js: This controller sends a request to the ChatGPT API and generates the message for the surprise email.

authController.js: This controller handles user authentication, including login and signup functionalities.

allSurpriseController.js: This controller retrieves all surprises sent by a specific user.

## Email Templates

The email template used for sending surprise emails can be found in emailTemplates.js.

Note: The email interface is optimized for mobile devices and provides a better user experience on smaller screens. Therefore, viewing on a mobile device is recommended.

 <img src="https://res.cloudinary.com/dxqyvjf5r/image/upload/v1683912490/register%20form/birthday_wdz5il.jpg" width="300" title="Welcoming Page">
 
## Installation

To install and run this application on your local machine, follow these steps:

-Clone this repository to your local machine.

-Navigate to the root directory of the cloned repository in your terminal.

-Run `npm install` to install the necessary dependencies.

-Run `npm start` to start the application.

-Start the MongoDB server.

-Create a `.env` file in the root of the project directory and add the following variables (replace the values with your own configurations):

## API Endpoints

Provide a list of the available API endpoints, their purposes, and example requests/responses.

Example:
<br>

- http://localhost:5001/api/auth/login
  <br>
- http://localhost:5001/api/auth/signup
  <br>
- http://localhost:5001/api/surprise/ ->Body: email, name, relative, theme, sender
  <br>
- http://localhost:5001/api/allsurprises?email=${email}

## Technologies Used

This application was built using the following technologies:

-Node jS

-Express js

-MongoDB, mongoose
