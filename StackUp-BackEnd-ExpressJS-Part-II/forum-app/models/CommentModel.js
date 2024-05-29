const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    post_id: {
        type: String,
        required: true
    },
    upvotes: {
        type: Array,
        default: []
    },
    downvotes: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model('Comment', commentSchema);