const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attemptedUserQuestions = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: "quizDetails",
  },
  //   userId: {
  //     type: Schema.Types.ObjectId,
  //     ref: "user",
  //   },
  questions: [
    {
      questionId: {
        type: Schema.Types.ObjectId,
        ref: "questionBank",
      },
      selectedAnswer: String,
    },
  ],
});

module.exports = mongoose.model("attemptedQuestions", attemptedUserQuestions);
