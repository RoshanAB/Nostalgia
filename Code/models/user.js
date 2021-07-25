const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    title: String,
    date: String,
    body: String,
    author: String,
    likes: Number,
    image: String

}, {timestamps: true});

const blogSchema = new Schema({
    title: String,
    intro: String,
    body1: String,
    body2: String,
    body3: String,
    conclusion: String
}, {timestamps: true});

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmpassword: {
        type: String
    },

    likedmemories: {
        type: [memorySchema]
    },

    savedblogs: {
        type: [blogSchema]
    }
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;