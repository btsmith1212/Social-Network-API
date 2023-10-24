const { Schema, model } = require("mongoose");
const assignmentSchema = require("./User");

// Schema to create Student model
const studentSchema = new Schema(
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
      //Set default value to the current timestamp
      //Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },
    reactions: {
      //Array of nested documents created with the reactionSchema (These are like replies)
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model("student", studentSchema);

module.exports = Student;
