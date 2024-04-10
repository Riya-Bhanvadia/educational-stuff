const {
  setQuestionsResponse,
} = require("../dbServices/attempedQuestionsDBServices");

exports.attemptedQuestionUpdateService = async (
  _id,
  questionId,
  selectedAnswer
) => {
  try {
    const result = await setQuestionsResponse(
      { _id: _id, "questions.questionId": questionId },
      { "questions.$.selectedAnswer": selectedAnswer }
    );
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
