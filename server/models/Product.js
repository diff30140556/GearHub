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

productSchema.virtual("inStock").get(function () {
  return this.quantity > 0;
});
const Product = model("Product", productSchema);

module.exports = Product;
