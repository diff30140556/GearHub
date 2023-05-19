const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isNew: {
    type: Boolean,
  },
  InStock: {
    type: Boolean,
  },
  comments: [commentSchema],
});

const Product = model("Product", productSchema);

module.exports = Product;
