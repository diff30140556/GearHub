const { Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    // products: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Product",
    //   },
    // ],

    total_price: {
      type: Number,
      required: true,
    },

    // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },

    purchasedAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return new Date(timestamp).toLocaleDateString();
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = orderSchema;
