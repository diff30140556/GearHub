const { User, Product, Order, Category } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require("mongoose");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {
    // User.findOne({ _id: userId }).populate('comments')?
    // this will show up the comment
    // },

    getCategory: async (parent, { categoryId }) => {
      try {
        const category = mongoose.Types.ObjectId(categoryId);

        const categories = await Category.findOne({ _id: category }).populate(
          "product"
        );

        if (!categories) {
          throw new Error("No Category found!");
        }

        return categories;
      } catch (err) {
        console.log(err);
      }
    },

    getAllCategories: async () => {
      try {
        return await Category.find();
        
      } catch (err) {
        console.log(err)
      }
    },

    getAllProducts: async() => {
      try {
        return await Product.find();
        
      } catch (err) {
        console.log(err)
      }
    },

    findProducts: async (parent, { productId }) => {
      try {
        const productObjectId = mongoose.Types.ObjectId(productId);
        const product = await Product.findOne({ _id: productObjectId });

        console.log(product);

        if (!product) {
          throw new Error("No Product ID Found!");
        }

        return product;
      } catch (err) {
        console.error(err);
      }
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
      }
    },

    login: async (parent, { email, password }) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError(
            "No user found with this email address"
          );
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }

        const token = signToken(user);

        return { token, user };
      } catch (err) {
        console.error(err);
      }
    },

    addProducts: async (parent, { userId, productId }) => {
      try {
        // if (context.user) {
        const user = mongoose.Types.ObjectId(userId);
        const product = mongoose.Types.ObjectId(productId);

        const item = await Product.findOne({ _id: product });
        const { _id, name, price } = item;

        const order = await Order.create({
          products: [{ productId: _id, name, quantity: 1, price }],
        });

        // localStorage or indexDB to build a cart object => user in the front can update the cart

        await User.findOneAndUpdate(
          { _id: user },
          { $addToSet: { order: order._id } },
          { new: true }
        );

        return order;

        // }
      } catch (err) {
        console.error(err);
      }
    },

    // updateProducts: async (parent, { orderId, productId, quantity }) => {
    //   try {
    //     const order = mongoose.Types.ObjectId(orderId);
    //     const product = mongoose.Types.ObjectId(productId);

    //     const updateOrder = await Order.findOneAndUpdate(
    //       { _id: order, "products.productId": product },
    //       { $set: { "products.$.quantity": quantity } },
    //       { new: true }
    //     )

    //     return updateOrder;

    //   } catch (err) {
    //     console.error(err)
    //   }
    // },

    deleteProducts: async (parent, { orderId }) => {
      try {
        const order = mongoose.Types.ObjectId(orderId);

        const deleteSingleProduct = await Order.findOneAndDelete({
          _id: order,
        });

        return deleteSingleProduct;
      } catch (err) {
        console.error(err);
      }
    },

    addComment: async (parent, { productId, comment, userId, categoryId }) => {
      try {
        const productObjectId = mongoose.Types.ObjectId(productId);
        const user = mongoose.Types.ObjectId(userId);
        const commentId = mongoose.Types.ObjectId();
        const category = mongoose.Types.ObjectId(categoryId);

        const addAComment = await Product.findOneAndUpdate(
          { _id: productObjectId },
          { $addToSet: { comments: { _id: commentId, comment, user } } },
          { new: true }
        );

        await User.findOneAndUpdate(
          { _id: user },
          { $addToSet: { comments: { _id: commentId, comment, product: productObjectId } } },
          { new: true }
        );

        await Category.findOneAndUpdate(
          { _id: category, "product._id": productObjectId },
          { $addToSet: { "product.$.comments": { _id: commentId, comment, user } } },
          { new: true }
        );

        return addAComment;
      } catch (err) {
        console.error(err);
      }
    },

    updateComment: async (parent, { productId, commentId, userId, comment, categoryId }) => {
      try {
        const product = mongoose.Types.ObjectId(productId);
        const comments = mongoose.Types.ObjectId(commentId);
        const user = mongoose.Types.ObjectId(userId);
        const category = mongoose.Types.ObjectId(categoryId)

        const updateSingleComment = await Product.findOneAndUpdate(
          { _id: product, "comments._id": comments },
          { $set: { "comments.$.comment": comment, "comments.$.user": user } },
          { new: true }
        );

        await User.findOneAndUpdate(
          { _id: user, "comments._id": comments },
          { $set: { "comments.$.comment": comment, "comments.$.product": product } },
          { new: true }
        );

        await Category.findOneAndUpdate(
          { 
            _id: category,
            "product._id": product,
            "product.comments._id": comments
          },
          {
            $set: {
              "product.$[prod].comments.$[com].comment": comment,
              "product.$[prod].comments.$[com].user": user
            }
          },
          {
            new: true,
            arrayFilters: [
              { "prod._id": product },
              { "com._id": comments }
            ]
          }
        );

        return updateSingleComment;
      } catch (err) {
        console.error(err);
      }
    },

    removeComment: async (parent, { productId, commentId, userId, categoryId }) => {
      try {
        const productObjectId = mongoose.Types.ObjectId(productId);
        const comment = mongoose.Types.ObjectId(commentId);
        const user = mongoose.Types.ObjectId(userId);
        const category = mongoose.Types.ObjectId(categoryId);

        const removeSingleComment = await Product.findOneAndUpdate(
          { _id: productObjectId },
          { $pull: { comments: { _id: comment } } },
          { new: true }
        );

        await User.findOneAndUpdate(
          { _id: user },
          { $pull: { comments: { _id: comment } } },
          { new: true }
        );

        await Category.findOneAndUpdate(
          { _id: category, "product._id": productObjectId },
          { $pull: { "product.$.comments": { _id: comment } } },
          { new: true },
        );

        return removeSingleComment;
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
