/*
    /server/models/item.js
    Create database schema for "Poll"
*/
console.log("Loaded: /server/models/poll.js");

var mongoose = require("mongoose");

var PollSchema = mongoose.Schema({
    username: String,
    title: String,
    option_one: [String, Number],
    option_two: [String, Number],
    option_three: [String, Number],
    option_four: [String, Number]},
    {timestamps: true });

module.exports = mongoose.model("Poll", PollSchema);

// var PollSchema = mongoose.Schema({
//     username: String,
//     title: String,
//     option_one: {option: String, votes: Number},
//     option_two: {option: String, votes: Number},
//     option_three: {option: String, votes: Number},
//     option_four: {option: String, votes: Number}
//   },
//     {timestamps: true });

// var PollSchema = mongoose.Schema({
//     username: String,
//     title: String,
//     option_one: String,
//     option_two: String,
//     option_three: String,
//     option_four: String },
//     {timestamps: true });
