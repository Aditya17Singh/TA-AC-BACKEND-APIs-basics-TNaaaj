var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    tags: [{ type: String }],
    author: { type: String },
    pages: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
