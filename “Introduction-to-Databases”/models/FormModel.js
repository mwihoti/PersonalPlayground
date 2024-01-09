const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    mess_t: {
        type: String,
        required: true
    },
    is_sent: {
        type: Boolean,
        required: false,
        default: false,

    }},{  
        timestamps: true,
})
const FormModel = mongoose.model('mes', formSchema);
module.exports = FormModel;