const AttemptedQuestions = require("../models/userAttempted");
const {
  attemptedQuestionUpdateService,
} = require("../services/attempedQuestionsServices");

exports.getAllAttemptedQuestions = async (req, res, next) => {
  const { attemptedId } = req.params;
  console.log("8",attemptedId);
  try {
    const result = await AttemptedQuestions.findById(attemptedId);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.updateAttemptedQuestion = async (req, res, next) => {
  const { _id, questionId, selectedAnswer } = req.body;
  console.log(_id, questionId, selectedAnswer);
  try {
    const result = await attemptedQuestionUpdateService(
      _id,
      questionId,
      selectedAnswer
    );
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};
