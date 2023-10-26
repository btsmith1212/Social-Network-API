const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Invalid Email address",
      ],
    },
    thoughts: {
      type: Schema.Types.ObjectId,
      ref: "thought",
      //Array of _id values referencing the Thought model
    },
    friends: {
      type: Schema.Types.ObjectId,
      ref: "user",
      //Array of _id values referencing the User model (self-reference)
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });
//Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

const User = model("user", userSchema);

module.exports = User;
