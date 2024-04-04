const { createQuiz, updateQuiz } = require("../dbServices/quizDBServices");

exports.createQuizTitleServices = async (title, question, time) => {
  try {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let stringLen = 6;
    let randomString = "";
    for (let i = 0; i < stringLen; i++) {
      let rnum = Math.floor(Math.random() * char.length);
      randomString = randomString + char.substring(rnum, rnum + 1);
    }
    const result = await createQuiz({
      title: title,
      totalQues: question,
      totalTime: time,
      code: randomString,
    });
    console.log(result);
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};

exports.setTimeServices = async (quizCode, time) => {
  try {
    const result = await updateQuiz({ code: quizCode }, { totalTime: time });
    return result;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    throw error;
  }
};
