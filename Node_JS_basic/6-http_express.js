// Import the Express module
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define the route for the root endpoint "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Make the app listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Export the app variable
module.exports = app;
