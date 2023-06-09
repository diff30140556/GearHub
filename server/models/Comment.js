const { Schema } = require("mongoose");

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  username: {
    type: String,
    required: true,
  }
});

module.exports = commentSchema;
