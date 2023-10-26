const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dayjs = require("dayjs");

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 50,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (createdAtVal) =>
        dayjs(createdAtVal).format("MM DD, YYYY [at] hh:mm a"),
      //Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
    //Array of nested documents created with the reactionSchema (These are like replies)
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
