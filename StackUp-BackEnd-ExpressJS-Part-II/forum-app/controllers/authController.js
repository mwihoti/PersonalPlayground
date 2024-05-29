const UserModel = require("../models/UserModel")
const bcrypt = require('bcryptjs');

const registerView = async (req, res) => {
    try {
        res.render('register');
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const loginView = async (req, res) => {
    try {
        res.render('login');
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            username,
            password: hashedPassword
        });

        await user.save();

        res.redirect('/auth/login');
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if (user && await bcrypt.compare(password, user.password)) {
            req.session.userId = user._id;
            req.session.username = user.username;

            return res.redirect('/dashboard');
        }

        res.redirect('/auth/login');
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    registerView,
    loginView,
    register,
    login
}