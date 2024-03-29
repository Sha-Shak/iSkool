const mongoose = require("mongoose");
const Class = require("./Class.model");
const Student = require("./Student.model");
const subjectSchema = require("./Subject.Schema")

const marksSchema = new mongoose.Schema({
  examName: {
    type: String,
    enum:["quiz", "mid", "final"],
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  }
});



// const Marks = mongoose.model("Marks", marksSchema);
module.exports = marksSchema;
