const Quiz = require("../models/quiz");

exports.createQuiz = async (query) => {
  try {
    const result = await Quiz.create(query);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.findOneQuiz = async (data) => {
  try {
    const result = await Quiz.findOne(data);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.updateQuiz = async (query, data) => {
  try {
    const result = await Quiz.findOneAndUpdate(query, data);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.findQuiz = async () => {
  try {
    const result = await Quiz.find();
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
