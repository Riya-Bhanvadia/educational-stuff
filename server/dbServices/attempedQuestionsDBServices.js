const AttemptedQuestion = require("../models/userAttempted");

exports.setQuestionsResponse = async (query, data) => {
  try {
    const result = await AttemptedQuestion.findOneAndUpdate(query, {
      $set: data,
    });
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
