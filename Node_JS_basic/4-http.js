// Import the HTTP module
const http = require('http');

//create a server object:
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Sets the response with plain text
    res.write('Hello Holberton School!'); //writes a response to the client
    res.end() // Ends the response
});

//The server object listens on port 1245
app.listen(1245);

module.exports = app; // Exports the app variable
