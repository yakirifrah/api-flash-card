const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const card = new Schema({
  _id: Schema.Types.ObjectId,
  question: String,
  answer: String,
});

module.exports = mongoose.model("Card", card);
