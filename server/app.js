const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const quizRoutes = require("./routes/quizRoutes");
const questionRoutes = require("./routes/questionRoutes");
require("dotenv").config();

app.use(
  cors({
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(quizRoutes);
app.use(questionRoutes);
app.use((err, req, res, next) => {
  console.log("universal error middleware");
  const status = err.statusCode || 422;
  const message = err.message;
  const error = new Error(message);
  error.statusCode = status;
  console.log(error);
  res
    .status(status)
    .json({ error: { message: error.message, statusCode: error.statusCode } });
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(5050, () => {
      console.log("Server Running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
