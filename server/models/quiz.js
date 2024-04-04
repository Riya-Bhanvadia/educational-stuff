const mongoose = require("mongoose");
const schema = mongoose.Schema;

const quizSchema = new schema({
  title: {
    type: String,
  },
  code: {
    type: String,
  },
  totalQues: {
    type: Number,
  },
  totalTime: {
    type: String,
  },
});

module.exports = mongoose.model("quizDetails", quizSchema);
