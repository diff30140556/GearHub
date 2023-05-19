const { Schema, model } = require("mongoose");
const commentSchema = require('./Comment')

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  product: [
    {
      productId:{
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      name: String,
      price: Number,
      quantity: Number,
      status: String,
      description: String,
      isNew: Boolean,
      InStock: Boolean,
      comments: [commentSchema]
    },
  ],
});

const Category = model("Category", categorySchema);

module.exports = Category;
