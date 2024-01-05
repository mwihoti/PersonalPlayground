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
const FormModel = mongoose.model('messages', formSchema);
module.exports = FormModel;