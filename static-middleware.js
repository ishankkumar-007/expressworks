const express = require('express');
const path = require('path');

const app = express();

// Get the port from the command-line arguments
const port = process.argv[2] || 3000;

// Get the directory containing the static files from the command-line arguments
const staticDir = process.argv[3];

// Use express.static middleware to serve files from the specified directory
app.use(express.static(staticDir || path.join(__dirname, 'public')));

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running and serving static files from ${staticDir} on port ${port}`);
});