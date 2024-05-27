const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

const server = app.listen(port, () => {
    console.log('Server listening');
})

app.use(morgan('dev'));

app.use('/auth', require('./routes/authHandling'));
app.use('/user', require('./routes/userHandling'));
app.use('/blogs', require('./routes/blogHandling'));

app.use((req, res) => {
    res.status(404).send("Page not found");
}) 
