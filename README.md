# MERN App
## Description 
The Todos App is a simple React application for managing todos. It allows users to add new todos, mark them as done or todo, and delete them.
### Installation
1.clon the repositry 
git clone <repository-url>

2.Navigate to the project directory:
cd todos-app

3.Install dependencies:
npm install
4.Start the development server:
npm start

5.Open your browser and visit http://localhost:3000 to view the app.

### Usage:
Enter a title and description for your todo in the input fields.
Click on the "Add Todo" button to add the todo to the list.
To mark a todo as done or todo, click on the respective "Mark as Done" or "Mark as Todo" button.
To delete a todo, click on the "X" icon next to the todo.
Todos are color-coded based on their status: green for "Done" and red for "Todo".

### Credits:
#### React -
A JavaScript library for building user interfaces.
#### Axios -
A promise-based HTTP client for the browser and Node.js.
####Express App Setup:
You're creating an instance of the Express application.
#### Dependencies:
importing necessary packages such as express, mongoose, body-parser, cors, and your custom routes defined in ####Routes.js.

#### Middleware:
#### body-parser middleware: 
used to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
#### cors middleware:
 used to enable CORS (Cross-Origin Resource Sharing) for your server.
#### Routes: 
the routes defined in Routes.js for handling API requests. These routes are prefixed with /api.
#### Database Connection: 
connecting to MongoDB using Mongoose.
#### configured your connection using settings from config.js.
#### Server Setup:
After connecting to MongoDB successfully, you're starting the server to listen on port 3001.

### Additional Information:
This project uses a simple Node.js backend to store and manage todos. Ensure the backend server is running before using the application.
For deployment, consider hosting the backend and frontend separately. Update the API endpoint URLs in the code accordingly.


