const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        name: String,
        quantity: Number,
        price: Number
      },
    ],

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

orderSchema.virtual('total_price').get(function() {
  let totalPrice = 0;

  this.products.forEach(product => {
    totalPrice += product.quantity * product.price;
  });

  return totalPrice;
});

const Order = model('Order', orderSchema);

module.exports = Order;
