const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const cors = require('cors'); // Step 2: Require the 'cors' module

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Step 2: Use the cors middleware to enable CORS
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle events from connected clients
    socket.on('chatMessage', (message) => {
        // Broadcast the message to all clients
        io.emit('chatMessage', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
