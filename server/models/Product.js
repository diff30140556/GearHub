const { Schema, model } = require("mongoose");
const commentSchema = require("./Comment");

const productSchema = new Schema(
  {
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
    description: {
      type: String,
      required: true,
    },
    features: {
      type: Schema.Types.Mixed,
    },
    isNew: {
      type: Boolean,
    },
    image: [
      {
        type: String,
      },
    ],
    specification: {
      type: Schema.Types.Mixed,
    },

    comments: [commentSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//using a virtual to check quantity then return whether a product is in stock.
productSchema.virtual("inStock").get(function () {
  //this will return a boolean. If quantity > 0 is true or not, in React, the boolean can be used to redendr "In Stock " or "Out of Stock"
  return this.quantity > 0;
});
const Product = model("Product", productSchema);

module.exports = Product;
