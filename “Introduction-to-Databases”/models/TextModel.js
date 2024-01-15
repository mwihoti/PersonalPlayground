const mongoose = require('mongoose')
const textSchema = new mongoose.Schema({
    txt: {
        type: String,
        required: true
    },
    is_text:{
        type: Boolean,
        required: false,
        default: false
    }
},
{timestaps: true}
)
const TextModel = mongoose.model('txt_t', textSchema);
module.exports = TextModel;