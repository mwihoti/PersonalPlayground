require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const User = require('./models/UserModel');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.db_connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Routes
app.get('/', (req, res) => {
    res.render('welcome');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        username,
        password: hashedPassword
    });

    await user.save();

    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
        req.session.userId = user._id;
        req.session.username = user.username;

        return res.redirect('/dashboard');
    }

    res.redirect('/login');
});

app.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('dashboard', {
        username: req.session.username
    })
});

const server = app.listen(port, () => {
    console.log("Server listening");
    mongoose.connect(process.env.db_connection).then(() => {
        console.log("Database Connected");
    });
});