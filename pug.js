const express = require('express');
const path = require('path');

const app = express();

// Get the port and template path from the command-line arguments
const port = process.argv[2] || 3000;
const templatePath = process.argv[3] || path.join(__dirname, 'templates');

// Set the views directory and the template engine
app.set('views', templatePath);
app.set('view engine', 'pug');

// Define the route for the home page
app.get('/home', (req, res) => {
    res.render('index.pug', { date: new Date().toDateString() });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
