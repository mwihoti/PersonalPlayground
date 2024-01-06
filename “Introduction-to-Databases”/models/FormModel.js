const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    mess_t: {
        type: String,
        required: true
    },
    sent: {
        type: Boolean,
        required: false,
        default: false,

    }
})
const FormModel = mongoose.model('mes', formSchema);
module.exports = FormModel;