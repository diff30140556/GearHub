const { User, Product, Order, Category } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require("mongoose");
const { signToken } = require("../utils/auth");
const stripe = require('stripe')('pk_test_TYooMQauvdEDq54NiTphI7jx');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      try {
        if (context.user) {
          const userId = context.user._id;
          const user = await User.findById({ _id: userId })
            .populate({
              path: "order",
              populate: {
                path: "products.productId",
                model: "Product",
              },
            });

          return user;
        }
      } catch (err) {
        console.error(err);
      }
    },

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
        console.log(err);
      }
    },

    getAllProducts: async () => {
      try {
        return await Product.find();
      } catch (err) {
        console.error(err);
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

    checkout: async (parent, args, context) => {
      console.log('test');
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];
      console.log(args)
      console.log(url)
      console.log(order)
      console.log(line_items)

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image[0]}`]
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`
      });

      return { session: session.id };
    }
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

    addProducts: async (parent, { productId }, context) => {
      try {
        if (context.user){
          const product = mongoose.Types.ObjectId(productId);
  
          const item = await Product.findOne({ _id: product });
          const { _id, name, price } = item;
  
          const userFound = await User.findOneAndUpdate(
            { _id: context.user._id},
            { $addToSet: { cart: { productId: _id, name, quantity: 1, price } } },
            { new: true }
          );
  
          return userFound;
        }
      } catch (err) {
        console.error(err);
      }
    },

    updateProducts: async (parent, { cartId, quantity }, context) => {
      try {
        if(context.user){
          const cart = mongoose.Types.ObjectId(cartId);
  
          const updateCart = await User.findOneAndUpdate(
            { _id: context.user._id, "cart._id": cart },
            { $set: { "cart.$.quantity": quantity } },
            { new: true }
          );
  
          return updateCart;
        }
      } catch (err) {
        console.error(err);
      }
    },

    deleteProducts: async (parent, { cartId }, context) => {
      try {
        if(context.user){
          const cart = mongoose.Types.ObjectId(cartId);
  
          const userFound = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { cart: { _id: cart } } },
            { new: true }
          );
  
          return userFound;
        }
      } catch (err) {
        console.error(err);
      }
    },

    // checkOut: async (parent, { userId }) => {
    //   try {
    //     // if (context.user){
    //       const user = mongoose.Types.ObjectId(userId)
    //       const userFound = await User.findOne({ _id: user });
  
    //       const { cart } = userFound;

    //       const productIds = cart.map((item) => item.productId);

    //       const createOrder = await Order.create({ products: cart });
  
    //       const { _id, total_price, purchasedAt } = createOrder;
  
    //       await User.updateOne({ _id: user }, { $set: { cart: [] } });
  
    //       await User.findOneAndUpdate(
    //         { _id: user },
    //         { $addToSet: { order: { orderId: _id, total_price, products: productIds, purchasedAt } } },
    //         { new: true }
    //       );
  
    //       return createOrder;
    //     // }
    //   } catch (err) {
    //     console.error(err);
    //     throw new Error("No products in your shopping cart!");
    //   }
    // },

    addComment: async (parent, { productId, comment, categoryId }, context) => {
      try {
        if (context.user){
          const productObjectId = mongoose.Types.ObjectId(productId);
          const commentId = mongoose.Types.ObjectId();
          const category = mongoose.Types.ObjectId(categoryId);
          const userId = context.user._id;
  
          const userFound = await User.findOneAndUpdate(
            { _id: userId },
            {
              $addToSet: {
                comments: { _id: commentId, comment, product: productObjectId },
              },
            },
            { new: true }
          );
  
          const username = userFound.username;
  
          const addAComment = await Product.findOneAndUpdate(
            { _id: productObjectId },
            {
              $addToSet: {
                comments: { _id: commentId, comment, user: userId, username },
              },
            },
            { new: true }
          );
  
          await Category.findOneAndUpdate(
            { _id: category, "product._id": productObjectId },
            {
              $addToSet: {
                "product.$.comments": { _id: commentId, comment, user: userId},
              },
            },
            { new: true }
          );
  
          return addAComment;
        }
      } catch (err) {
        console.error(err);
      }
    },

    updateComment: async (
      parent,
      { productId, commentId, comment, categoryId },
      context
    ) => {
      try {
        if (context.user){
          const product = mongoose.Types.ObjectId(productId);
          const comments = mongoose.Types.ObjectId(commentId);
          const category = mongoose.Types.ObjectId(categoryId);
          const userId = context.user._id;
  
          const updateSingleComment = await Product.findOneAndUpdate(
            { _id: product, "comments._id": comments },
            { $set: { "comments.$.comment": comment, "comments.$.user": userId } },
            { new: true }
          );
  
          await User.findOneAndUpdate(
            { _id: userId, "comments._id": comments },
            {
              $set: {
                "comments.$.comment": comment,
                "comments.$.product": product,
              },
            },
            { new: true }
          );
  
          await Category.findOneAndUpdate(
            {
              _id: category,
              "product._id": product,
              "product.comments._id": comments,
            },
            {
              $set: {
                "product.$[prod].comments.$[com].comment": comment,
                "product.$[prod].comments.$[com].user": userId,
              },
            },
            {
              new: true,
              arrayFilters: [{ "prod._id": product }, { "com._id": comments }],
            }
          );
  
          return updateSingleComment;
        }
      } catch (err) {
        console.error(err);
      }
    },

    removeComment: async (
      parent,
      { productId, commentId, categoryId },
      context
    ) => {
      try {
        if (context.user){
          const productObjectId = mongoose.Types.ObjectId(productId);
          const comment = mongoose.Types.ObjectId(commentId);
          const category = mongoose.Types.ObjectId(categoryId);
          const userId = context.user._id;
  
          const removeSingleComment = await Product.findOneAndUpdate(
            { _id: productObjectId },
            { $pull: { comments: { _id: comment } } },
            { new: true }
          );
  
          await User.findOneAndUpdate(
            { _id: userId },
            { $pull: { comments: { _id: comment } } },
            { new: true }
          );
  
          await Category.findOneAndUpdate(
            { _id: category, "product._id": productObjectId },
            { $pull: { "product.$.comments": { _id: comment } } },
            { new: true }
          );
  
          return removeSingleComment;

        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};

module.exports = resolvers;
