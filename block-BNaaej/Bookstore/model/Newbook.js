var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var newBookSchema = new Schema(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    tags: [{ type: String }],
    author: { type: String },
    pages: { type: Number },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Newbook", newBookSchema);
