const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    form: {
        type: String,
        required: true
    },
    sent: {
        type: Boolean,
        required: false,
        default: false,

    }
})
const formModel = mongoose.model('forms', formSchema);
module.exports = formModel;