import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import { useCreateQuiz } from "../hooks/quizHook";
import { useNavigate } from "react-router-dom";

const QuizTitle = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [time, setTime] = useState("");
  const { mutate } = useCreateQuiz();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      title,
      question,
      time,
    };
    mutate(data, {
      onSuccess: (data) => {
        const code = data.data.code;
        const title = data.data.title;
        navigate("/createQuiz", { state: {code,title} });
      },
    });
  };
  return (
    <div>
      <Navbar />
      <div className="shadow-2xl mx-24 mt-40 flex flex-col ml-40 mr-40">
        <p className="font-bold mb-7">Welcome Quiz Creators</p>
        <div className="flex justify-center">
          <label htmlFor="" className="flex">
            Set Quiz Title:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            required
          />
        </div>
        <div className="flex justify-center mt-6">
          <label htmlFor="" className="flex">
            Total Ques:
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center mt-6">
          <label htmlFor="" className="flex ">
            Total Time:
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            required
          />
        </div>
        <div
          className="flex flex-col "
          style={{ margin: "auto", marginTop: "20px", marginBottom: "20px" }}
        >
          <button
            className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 w-24 hover:text-pink-700 flex justify-center"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizTitle;
