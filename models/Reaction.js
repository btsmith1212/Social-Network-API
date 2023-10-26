const { Schema, model } = require("mongoose");
const dayjs = require('dayjs');
// Schema to create a reaction model
// (SCHEMA ONLY)
const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (createdAtVal) =>
        dayjs(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
      //Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
