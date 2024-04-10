import React, { useEffect, useState } from "react";
import { useGetSingleQuestion } from "../../hooks/quizHook";
import { useUpdateAttemptedQuestion } from "../../hooks/attemptedQuestionHooks/attemptedHooks";
import { useNavigate } from "react-router-dom";

const SubQuiz = (props) => {
  const { counter, questionId, setCounter, questionLength, aqId } = props;
  // console.log("8",counter);
  const router = useNavigate()
  console.log("9", questionId);
  const { data, isLoading, isError } = useGetSingleQuestion(
    questionId.questionId
  );
  console.log(questionId);
  const { mutateAsync } = useUpdateAttemptedQuestion();
  const [checked, setChecked] = useState(null);

  useEffect(() => {
    if (!isLoading) {
      setChecked(questionId.selectedAnswer);
    }
  }, [isLoading, questionId]);

  const previousHandler = async () => {
    if (checked !== questionId.selectedAnswer) {
      await mutateAsync({
        _id: aqId,
        questionId: questionId.questionId,
        selectedAnswer: checked,
      });
    }
    setCounter(counter - 1);
  };

  const nextHandler = async () => {
    if (checked !== questionId.selectedAnswer) {
      await mutateAsync({
        _id: aqId,
        questionId: questionId.questionId,
        selectedAnswer: checked,
      });
    }
    setCounter(counter + 1);
  };
  // const questionData = data.data;
  console.log("10", data);
  if (isLoading || checked === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="shadow-2xl mx-24 border-black mt-12 flex flex-col ml-11 mr-40">
      <br />
      <div className="ml-11 flex flex-col">
        <h4 className="items-start flex font-bold">
          Question No: {Number(counter) + 1}
        </h4>
        <br />

        <h1 className="flex items-start ml-8 font-medium">
          {data.data.question}
        </h1>
        <br />

        <div className="flex ml-8">
          <input
            type="radio"
            name="answer"
            className="flex"
            checked={checked === "A"}
            onChange={() => setChecked("A")}
          />
          <p className="flex ml-6">{data.data.options[0].A}</p>
        </div>

        <div className="flex ml-8">
          <input
            type="radio"
            name="answer"
            className="flex"
            checked={checked === "B"}
            onChange={() => {
              setChecked("B");
            }}
          />
          <p className="flex ml-6">{data.data.options[0].B}</p>
        </div>
        <div className="flex ml-8">
          <input
            type="radio"
            name="answer"
            className="flex"
            checked={checked === "C"}
            onChange={() => setChecked("C")}
          />
          <p className="flex ml-6">{data.data.options[0].C}</p>
        </div>
        <div className="flex ml-8">
          <input
            type="radio"
            name="answer"
            className="flex"
            checked={checked === "D"}
            onChange={() => setChecked("D")}
          />
          <p className="flex ml-6">{data.data.options[0].D}</p>
        </div>
        <div className="flex justify-between px-5">
          <div className="mt-8 ">
            {counter > 0 && (
              <button
                className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700"
                onClick={previousHandler}
              >
                Previous
              </button>
            )}
          </div>
          <div className="mt-8 flex ">
            {console.log(counter, questionLength - 1)}
            {counter < questionLength - 1 ? (
              <button
                className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700 mr-2"
                onClick={nextHandler}
              >
                Next
              </button>
            ) : (
              <></>
            )}

            <button
              className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700"
              onClick={() => {
                router("/quizended")
              }}
            >
              Finish
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default SubQuiz;
