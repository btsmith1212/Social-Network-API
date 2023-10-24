const { Schema, model } = require("mongoose");

// Schema to create a course model
// (SCHEMA ONLY)
const courseSchema = new Schema(
  {
    reactionID: {
      //Use Mongoose's ObjectId data type
      //Default value is set to a new ObjectId
    },
    reactionBody: {
      type: Boolean,
      default: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //Use a getter method to format the timestamp on query
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Course = model("course", courseSchema);

module.exports = Course;
