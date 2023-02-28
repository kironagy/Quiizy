const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const scores = new Schema({
  who: {
    type: String,
    maxLength: 12,
    required: true,
  },
  whom: {
    type: String,
    require: true,
  },
  score: { type: Number, required: true },
});
module.exports = mongoose.model("Scores", scores);
