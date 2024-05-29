const CommentModel = require("../models/CommentModel");
const PostModel = require("../models/PostModel");

const indexView = async (req, res) => {
    try {
        res.status(200).render('index',{
            username: req.session.username
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const dashboardView = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.redirect('/auth/login');
        }

        let post = await PostModel.find().then((posts) => posts);
        res.status(200).render('dashboard', {
            username: req.session.username,
            posts: post
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const postView = async (req, res) => {
    try {
        res.status(200).render('post',{
            username: req.session.username
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const postViewById = async (req, res) => {
    try {
        let post = await PostModel.findById(req.params.id).then((post) => post);
        let comments = await CommentModel.find({ post_id: req.params.id }).then((comments) => comments);
        res.render('post_id', {
            username: req.session.username,
            post: post,
            comments: comments
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    indexView,
    dashboardView,
    postView,
    postViewById,
}