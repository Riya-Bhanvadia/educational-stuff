const {
  createQuestion,
  findQuestionsDBServices,
  updateQuestionDBServices,
} = require("../dbServices/questionDBServices");
const { findOneQuiz, updateQuiz } = require("../dbServices/quizDBServices");

exports.createQuestionServices = async (
  question,
  title,
  options,
  correctAnswer
) => {
  try {
    const quizTit = await findOneQuiz({ title: title });
    const result = await createQuestion({
      question: question,
      quizTitle: quizTit._id,
      options: options,
      correctAnswer: correctAnswer,
    });
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.getQuestionCount = async (code) => {
  try {
    const getCodeId = await findOneQuiz({ code: code });
    const result = await findQuestionsDBServices({ quizTitle: getCodeId._id });
    const obj = { count: result.length, totalQuestions: getCodeId.totalQues };
    return obj;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.getAllQuestionAccordingCode = async (code) => {
  try {
    const findCode = await findOneQuiz({ code: code });

    const result = await findQuestionsDBServices({ quizTitle: findCode._id });
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.updateQuestionServices = async (
  question,
  title,
  options,
  correctAnswer,
  id
) => {
  try {
    // console.log(question, title, options, correctAnswer, id);
    const quizTit = await findOneQuiz({ title: title });
    // console.log(quizTit);
    const result = await updateQuestionDBServices(
      { _id: id },
      {
        question: question,
        quizTitle: quizTit._id,
        options: options,
        correctAnswer: correctAnswer,
      }
    );

    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
