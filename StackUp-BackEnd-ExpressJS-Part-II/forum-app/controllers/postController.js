const CommentModel = require("../models/CommentModel");
const PostModel = require("../models/PostModel");

const create_post = async (req, res) => {
    try {
        let { title, content } = req.body;
        let post = new PostModel({
            title,
            content,
            user_id: req.session.userId
        });

        await post.save();

        return res.redirect('/dashboard');
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

const submit_comment = async (req, res) => {
    try {
        let { comment } = req.body;
        let commentObj = {
            comment,
            user_id: req.session.userId,
            post_id: req.params.post_id
        }

        let commentModel = new CommentModel(commentObj);
        await commentModel.save();
        return res.redirect(`/post/${req.params.post_id}`);
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
}

module.exports = {
    create_post,
    submit_comment,
}