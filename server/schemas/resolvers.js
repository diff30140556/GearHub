const { User, Product } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require('mongoose');
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // me: async (parent, args, context) => {

    // },

    findProducts: async (parent, { name }) => {
      try {
        const product = await Product.find({ name });

        if(!product){
          throw new Error ('No Product Name Found!');
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

    // addProducts: async (parent, { userId, productId }) => {
    //   try {
    //     // if (context.user) {
    //       // const product = mongoose.Types.ObjectId(productId.trim());
    //       const item = Product.findOne({ _id: productId });

    //       await User.findOneAndUpdate(
    //         { _id: userId},
    //         { $addToSet: { order: item } },
    //         {
    //           new: true,
    //           runValidators: true,
    //         }
    //       );
    //     // }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // },

    // deleteProducts: async (parent, { userId, productId }) => {

    // }

    addComment: async (parent, { productId, comment, userId }) => {
      const productObjectId = mongoose.Types.ObjectId(productId);
      const user = mongoose.Types.ObjectId(userId);

      return Product.findOneAndUpdate(
        { _id: productObjectId },
        { $addToSet: { comments: { comment, user } } },
        { new: true }
      );
    },

    updateComment: async (parent, { productId, commentId, userId, comment }) => {
      const product = mongoose.Types.ObjectId(productId);
      const comments = mongoose.Types.ObjectId(commentId);
      const user = mongoose.Types.ObjectId(userId);

      return Product.findOneAndUpdate(
        { _id: product, "comments._id": comments },
        { $set: { "comments.$.comment": comment, "comments.$.user": user } },
        { new: true }
      )
    },

    removeComment: async (parent, { productId, commentId }) => {
      const productObjectId = mongoose.Types.ObjectId(productId);
      const comment = mongoose.Types.ObjectId(commentId);

      return Product.findOneAndUpdate(
        { _id: productObjectId },
        { $pull: { comments: { _id: comment } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
