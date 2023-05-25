const db = require("../config/connection");
const { User, Product, Category, Order } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeeds.json");
const categorySeeds = require("./categorySeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});
    await Order.deleteMany({});

    await User.create(userSeeds);

    const createdProducts = await Product.create(productSeeds);

    categorySeeds.forEach((category, index) => {
      const startIndex = index * 4;
      const endIndex = startIndex + 4;
      category.product = createdProducts.slice(startIndex, endIndex);
    })

    await Category.create(categorySeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});
