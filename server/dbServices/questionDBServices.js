const Question = require("../models/questions");

exports.createQuestion = async (query) => {
  try {
    const result = await Question.create(query);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.updateQuestion = async (data) => {
  try {
    const result = await Question.findOneAndUpdate(data);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.findQuestionsDBServices = async (query) => {
  try {
    const result = await Question.find(query);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.deleteQuestionDBServices = async (data) => {
  try {
    const result = await Question.deleteOne(data);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.getSingleQuestionDBServices = async (query) => {
  try {
    const result = await Question.findOne(query);
    // console.log("52", result);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
