const mongoose = require("mongoose");

const HelpSchema = new mongoose.Schema({
  name: String,
  googleid: String,
});

// compile model from schema
module.exports = mongoose.model("help", UserSchema);
