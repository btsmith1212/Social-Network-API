const { Schema, Types } = require("mongoose");

const assignmentSchema = new Schema(
  {
    assignmentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      //unique
      //trim
    },
    email: {
      type: String,
      required: true,
      //unique
      // must match a valid email address (look into Mongoose's matching validation)
    },
    thoughts: {
      //Array of _id values referencing the Thought model
    },
    friends: {
      //Array of _id values referencing the User model (self-reference)
    },
  },
  //Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = assignmentSchema;
