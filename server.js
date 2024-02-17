const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  // Respond with some content when the root URL is accessed
  res.send('Welcome to Town'); // You can customize this message
});

// Define other route handlers or socket.io logic here

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
