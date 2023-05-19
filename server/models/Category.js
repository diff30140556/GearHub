const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Category = model("Category", categorySchema);

module.exports = Category;
