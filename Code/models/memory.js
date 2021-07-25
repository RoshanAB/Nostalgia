
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

const Memory = mongoose.model("Memory", memorySchema);

module.exports = Memory;