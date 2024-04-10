const express = require("express");
const {
  getAllAttemptedQuestions,
  updateAttemptedQuestion,
} = require("../controllers/attemptedQuestionController");

const Router = express.Router();

Router.get("/getAllAttemptedQuestions/:attemptedId", getAllAttemptedQuestions);

Router.post("/updateAttemptedQuestion", updateAttemptedQuestion);

module.exports = Router;
