const express = require("express");
const {
  createQuestionController,
  getQuestionsController,
  deleteQuestion,
  getQuestionCountController,
  getQuestionForStudents,
} = require("../controllers/questionController");
const Router = express.Router();

Router.post("/createQuestion", createQuestionController);
Router.get("/getQuestions/:title", getQuestionsController);
Router.post("/deleteQuestion", deleteQuestion);
Router.get("/getQuestionCount/:code", getQuestionCountController);
Router.post("/studentQuestions", getQuestionForStudents);

module.exports = Router;
