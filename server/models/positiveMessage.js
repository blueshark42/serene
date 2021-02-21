const mongoose = require("mongoose");

const PositiveMessageSchema = new mongoose.Schema({
  userId: String,
  message: String,
});

// compile model from schema
module.exports = mongoose.model("positiveMessage", PositiveMessageSchema);
