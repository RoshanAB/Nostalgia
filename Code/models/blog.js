const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    intro: String,
    body1: String,
    body2: String,
    body3: String,
    conclusion: String
}, {timestamps: true});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;