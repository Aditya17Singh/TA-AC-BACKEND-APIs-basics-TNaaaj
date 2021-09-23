var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    author: { type: Schema },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "NewBook",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
