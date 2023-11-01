const mongoose = require("mongoose");
const { Schema } = mongoose;
const UrlSchema = new Schema({
  rowUrl: {
    type: String,
    require: true,
  },
  generatedUrl: {
    type: String,
  },

  createdAT: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
module.exports = mongoose.model("shorturl", UrlSchema);
