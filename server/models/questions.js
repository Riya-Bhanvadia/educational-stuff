const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
  question: {
    type: String,
  },
  quizTitle: {
    type: schema.Types.ObjectId,
    ref: "quizDetails",
  },
  options: [
    {
      A: {
        type: String,
      },
      B: {
        type: String,
      },
      C: {
        type: String,
      },
      D: {
        type: String,
      },
    },
  ],
  correctAnswer: {
    type: String,
  },
});

module.exports = mongoose.model("questionBank", questionSchema);
