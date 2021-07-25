const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({

    email: {
        type: String
    },

    likes: {
        type: [String]
    }

})

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;