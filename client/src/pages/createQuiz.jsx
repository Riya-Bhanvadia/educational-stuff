import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useCreateQuestion,
  useGetQuestionCount,
  useUpdateQuizQuestion,
} from "../hooks/quizHook";
import { useQueryClient } from "react-query";

const CreateQuiz = () => {
  const location = useLocation();
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({ A: "", B: "", C: "", D: "" });
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionCounter, setQuestionCounter] = useState(1);
  let [create, setCreate] = useState(true);
  const { mutate: createQue } = useCreateQuestion();
  const { mutate: updateQuestion } = useUpdateQuizQuestion();
  const { isLoading, data: datas } = useGetQuestionCount(location.state.code);
  const navigate = useNavigate();
  // const queryClient = useQueryClient();
  console.log(location.state.d);
  useEffect(() => {
    if (location.state.d) {
      setQuestion(location.state.d.question);
      setOptions({
        A: location.state.d.options[0].A,
        B: location.state.d.options[0].B,
        C: location.state.d.options[0].C,
        D: location.state.d.options[0].D,
      });
      setCorrectAnswer(location.state.d.correctAnswer);
      setCreate(false);
    }
  }, [location.state.d]);

  const reviewHandler = () => {
    navigate("/reviewQuestionAdmin", {
      state: { code: location.state.code, title: location.state.title },
    });
  };
  const saveAndNextHandler = () => {

    if (create) {
      const obj = {
        question,
        title: location.state.title,
        options: [options],
        correctAnswer,
      };
      console.log(obj);
      createQue(obj, {
        onSuccess: () => {
          setQuestion("");
          setOptions({ A: "", B: "", C: "", D: "" });
          setCorrectAnswer("");
          setQuestionCounter(questionCounter + 1);
        },
      });
    } else {
      const obj = {
        question,
        title: location.state.title,
        options: [options],
        correctAnswer,
        id: location.state.d._id,
      };
      updateQuestion(obj, {
        onSuccess: () => {
          console.log("successsssssss");
          navigate("/reviewQuestionAdmin", {
            state: { code: location.state.code, title: location.state.title },
          });
        },
      });
    }

  };

  return (
    <div>
      <Navbar />
      <div className="flex  mt-5 mr-5 justify-between">
        <div className="flex flex-col mx-40">
          <p className="flex font-bold">Title: {location.state.title}</p>
          <p className="flex font-bold">Exam Code: {location.state.code}</p>
        </div>
        <div className="flex justify-end h-12">
          <label htmlFor="" className="flex items-center">
            Set Exam Time:
          </label>
          <input
            type="time"
            name=""
            id=""
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
          />
          <button className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700 ">
            Save
          </button>
        </div>
      </div>
      <div className="shadow-2xl mx-24 mt-11 pb-3 mb-5">
        <div>
          Question No: {datas?.data?.count + 1} of {datas?.data?.totalQuestions}
        </div>
        <div className="flex flex-col justify-items-center mx-24  px-24 pt-12">
          {/* <div className="  flex">
            <label htmlFor="name">Title:</label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
            <label htmlFor="name">Total Ques:</label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
          </div> */}
          <br />

          <div className="flex">
            <label htmlFor="" className="flex items-center">
              Question:
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
          </div>
          <br />
          <label htmlFor="">Options:</label>
          <br />
          <div className="flex">
            <label htmlFor="" className="items-center flex">
              A
            </label>
            <input
              type="text"
              value={options["A"]}
              onChange={(e) => setOptions({ ...options, A: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
            <label htmlFor="" className="items-center flex">
              B
            </label>
            <input
              type="text"
              value={options["B"]}
              onChange={(e) => setOptions({ ...options, B: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
          </div>
          <br />
          <div className="flex">
            <label htmlFor="" className="items-center flex">
              C
            </label>
            <input
              type="text"
              value={options["C"]}
              onChange={(e) => setOptions({ ...options, C: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
            <label htmlFor="" className="items-center flex">
              D
            </label>
            <input
              type="text"
              value={options["D"]}
              onChange={(e) => setOptions({ ...options, D: e.target.value })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
          </div>
          <br />
          <div className="flex ">
            <label htmlFor="">
              <pre>Correct Answer</pre>
            </label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5"
            />
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div className="mt-8 ">
            <button
              className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700"
              onClick={reviewHandler}
            >
              Review
            </button>
          </div>
          <div className="mt-8 flex ">
            {datas?.data?.count !== datas?.data?.totalQuestions ? (
              <button
                className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700 mr-2"
                onClick={saveAndNextHandler}
              >
                Save And Next
              </button>
            ) : (
              <button onClick={navigate("/reviewQuestionAdmin")} className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700 ">
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
