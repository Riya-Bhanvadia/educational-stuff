const { findQuiz } = require("../dbServices/quizDBServices");
const {
  createQuizTitleServices,
  setTimeServices,
} = require("../services/quizServices");

exports.createQuizTitle = async (req, res, next) => {
  const { title, question, time } = req.body;
  console.log(title);
  try {
    const result = await createQuizTitleServices(title, question, time);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.setTime = async (req, res, next) => {
  const { code, time } = req.body;
  try {
    const result = await setTimeServices(code, time);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.findTitle = async (req, res, next) => {
  try {
    const result = await findQuiz();
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};
