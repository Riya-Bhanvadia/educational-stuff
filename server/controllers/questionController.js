const {
  findQuestionsDBServices,
  deleteQuestionDBServices,
} = require("../dbServices/questionDBServices");
const { findOneQuiz } = require("../dbServices/quizDBServices");
const {
  createQuestionServices,
  getQuestionCount,
  getAllQuestionAccordingCode,
  getQuestionInfoServices,
  updateQuestionServices,

} = require("../services/questionsServices");

exports.createQuestionController = async (req, res, next) => {
  const { question, title, options, correctAnswer } = req.body;

  try {
    const result = await createQuestionServices(
      question,
      title,
      options,
      correctAnswer
    );
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.getQuestionsController = async (req, res, next) => {
  const { title } = req.params;

  try {
    const findTitle = await findOneQuiz({ title: title });
    const result = await findQuestionsDBServices({ quizTitle: findTitle._id });
    console.log("------------------", result);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.getQuestionForStudents = async (req, res, next) => {
  const { examCode } = req.body;

  try {
    const result = await getAllQuestionAccordingCode(examCode);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.deleteQuestion = async (req, res, next) => {
  const { id } = req.body;
  try {
    const result = await deleteQuestionDBServices({ _id: id });
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.getQuestionCountController = async (req, res, next) => {
  const { code } = req.params;
  try {
    const result = await getQuestionCount(code);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};


exports.getQuestionInfo = async (req, res, next) => {
  const { questionId } = req.params;
  // console.log("90", questionId);
  try {
    const result = await getQuestionInfoServices(questionId);
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.updateQuestion = async (req, res, next) => {
  const { question, title, options, correctAnswer, id } = req.body;

  try {
    const result = await updateQuestionServices(
      question,
      title,
      options,
      correctAnswer,
      id
    );
    return res.json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

