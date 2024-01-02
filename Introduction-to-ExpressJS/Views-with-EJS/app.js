const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configure EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')); // Logging middleware
app.use(bodyParser.json()); // JSON parsing middleware

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
res.render('index',{
	time: new Date().toString()
});
});

app.get('/about', (req, res) => {
    res.render('about');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});