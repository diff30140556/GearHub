const { User, Product, Order, Category } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require('mongoose');
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {

    // },

    getCategory: async (parent, { categoryId }) => {
      try {
        const category = mongoose.Types.ObjectId(categoryId);
        const categories = await Category.find(
          { _id: category }
        )

        if (!categories){
          throw new Error ('No Category found!')
        }

        return categories;

      } catch (err) {
        console.log(err)
      }
    },

    findProducts: async (parent, { productId }) => {
      try {
        const productObjectId = mongoose.Types.ObjectId(productId)
        const product = await Product.find({ _id: productObjectId });

        if(!product){
          throw new Error ('No Product ID Found!');
        }

        return product;
        
      } catch (err) {
        console.error(err)
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

          const order = await Order.create(
            { products: [{ productId: _id, name, quantity: 1, price }] }
          );
          
          await User.findOneAndUpdate(
            { _id: user },
            { $addToSet: { order: order._id } },
            { new: true },
          )

          return order;
          // return addToUser;

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

        const deleteSingleProduct = await Order.findOneAndDelete(
          { _id: order },
        )

        return deleteSingleProduct;

      } catch (err) {
        console.error(err);
      }
    },

    addComment: async (parent, { productId, comment, userId }) => {
      try {
        const productObjectId = mongoose.Types.ObjectId(productId);
        const user = mongoose.Types.ObjectId(userId);
  
        const addAComment = await Product.findOneAndUpdate(
          { _id: productObjectId },
          { $addToSet: { comments: { comment, user } } },
          { new: true }
        );

        // const userComment = await User.findOneAndUpdate(
        //   { _id: user },
        //   { $addToSet: { comments: { comment } } },
        //   { new: true } 
        // );

        return addAComment;
        
      } catch (err) {
        console.error(err);
      }
    },

    updateComment: async (parent, { productId, commentId, userId, comment }) => {
      try {
        const product = mongoose.Types.ObjectId(productId);
        const comments = mongoose.Types.ObjectId(commentId);
        const user = mongoose.Types.ObjectId(userId);
  
        const updateSingleComment = await Product.findOneAndUpdate(
          { _id: product, "comments._id": comments },
          { $set: { "comments.$.comment": comment, "comments.$.user": user } },
          { new: true }
        )

        return updateSingleComment;
        
      } catch (err) {
        console.error(err);
      }
    },

    removeComment: async (parent, { productId, commentId }) => {
      try {
        const productObjectId = mongoose.Types.ObjectId(productId);
        const comment = mongoose.Types.ObjectId(commentId);
  
        const removeSingleComment = await Product.findOneAndUpdate(
          { _id: productObjectId },
          { $pull: { comments: { _id: comment } } },
          { new: true }
        );
  
        return removeSingleComment;
        
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
