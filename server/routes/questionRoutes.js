const express = require("express");
const {
  createQuestionController,
  getQuestionsController,
  deleteQuestion,
  getQuestionCountController,
  getQuestionForStudents,
  updateQuestion,
} = require("../controllers/questionController");
const Router = express.Router();

Router.post("/createQuestion", createQuestionController);
Router.get("/getQuestions/:title", getQuestionsController);
Router.post("/deleteQuestion", deleteQuestion);
Router.get("/getQuestionCount/:code", getQuestionCountController);
Router.post("/studentQuestions", getQuestionForStudents);
Router.post("/updateQuestion", updateQuestion);


module.exports = Router;
