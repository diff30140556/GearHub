const { Schema, model } = require("mongoose");
const formattedTimeStamp = require('../utils/dateFormat')

const orderSchema = new Schema(
  {
    products: [
      {
          type: Schema.Types.ObjectId,
          ref: "Product",
      },
    ],

    total_price: {
      type: String,
      required: true,
    },

    // purchasedAt: {
    //   type: Date,
    //   default: Date.now,
    //   get: function (timestamp) {
    //     return new Date(timestamp).toLocaleDateString();
    //   },
    // },

    purchasedAt: {
      type: Date,
      default: Date.now,
      get: function (timestamp) {
        return formattedTimeStamp(timestamp);
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Order = model('Order', orderSchema);

module.exports = Order;
