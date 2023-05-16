const { Schema, model, mongoose } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  password: {
    type: String,
    required: true,
    match: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ // enforce at least 8 characters with at least one capital letter and one number
  },
  
  comments:[{
    type: Schema.Types.ObjectId,
    ref:"Comment",
  }],

  order:[
    {
        type: Schema.Types.ObjectId,
        ref:'Order'
    }
  ],

});

const User = model("User", userSchema);

module.exports = User;