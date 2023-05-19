const db = require("../config/connection");
const { User, Product, Category } = require("../models");
const userSeeds = require("./userSeeds.json");
const productSeeds = require("./productSeeds.json");
const categorySeeds = require("./categorySeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Product.deleteMany({});
    await Category.deleteMany({});

    await User.create(userSeeds);

    // Create products and store the created documents
    const createdProducts = await Product.create(productSeeds);

    // Create categories and assign products randomly
    const createdCategories = await Category.create(categorySeeds);

    const discountedProductIndices = getRandomUniqueIndices(4, createdProducts.length);
    const normalProductIndices = getRemainingIndices(discountedProductIndices, createdProducts.length);

    for (const category of createdCategories) {
      if (category.name === "Discounted") {
        category.product = discountedProductIndices.map((index) => createdProducts[index]._id);
      } else if (category.name === "Normal") {
        category.product = normalProductIndices.map((index) => createdProducts[index]._id);
      }
      await category.save();
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("All done!");
  process.exit(0);
});

// Helper function to generate random unique indices
function getRandomUniqueIndices(count, maxIndex) {
  const indices = new Set();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    indices.add(randomIndex);
  }
  return Array.from(indices);
}

// Helper function to get the remaining indices not included in the given indices
function getRemainingIndices(indices, maxIndex) {
  const remainingIndices = [];
  for (let i = 0; i < maxIndex; i++) {
    if (!indices.includes(i)) {
      remainingIndices.push(i);
    }
  }
  return remainingIndices;
}
