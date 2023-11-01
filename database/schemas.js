const mongoose = require("mongoose");
const { Schema } = mongoose;
const urlid = require("shortid");

const UrlSchema = new Schema({
  rowUrl: {
    type: String,
    required: true,
  },
  generatedUrl: {
    type: String,
    default: urlid.generate,
    required: true,
  },

  createdAT: {
    type: Date,
    required: true,
    default: new Date(),
  },
});
module.exports = mongoose.model("shorturl", UrlSchema);
