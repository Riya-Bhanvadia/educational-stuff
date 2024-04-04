const express = require("express");
const {
  createQuizTitle,
  setTime,
  findTitle,
} = require("../controllers/quizController");
const Router = express.Router();

Router.post("/createQuizTitle", createQuizTitle);
Router.post("/setTime", setTime);
Router.get("/findTitle", findTitle);

module.exports = Router;
