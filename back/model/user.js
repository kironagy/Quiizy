const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create User Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 12,
  },
  subject: {
    type: String,
    required: true,
  },
  takes: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    require: true,
  },
  drinks: {
    type: String,
    require: true,
  },
  person: {
    type: String,
    require: true,
  },
  app: {
    type: String,
    require: true,
  },
  movies: {
    type: String,
    require: true,
  },
  travel: {
    type: String,
    require: true,
  },
  icecream: {
    type: String,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
