import React from "react";
import { useNavigate } from "react-router-dom";

const QuizEnded = () => {
  const router = useNavigate();
  return (
    <div className="h-lvh flex justify-center items-center bg-[#b3ecec]">
      <div className=" shadow-lg w-2/4 h-2/4 flex justify-center items-center flex-col bg-white">
        <div>
          <h1 className="text-5xl ">Exam Ended</h1>
        </div>
        <div>
          <p className="font-medium">Thank you for giving exam</p>
        </div>
        <div className="my-8">
          Your result will be shortly visible in the result section.
        </div>
        <div>
          <button
            className="py-1 px-2 border-2 border-[#58f5f5] rounded-md hover:text-white hover:bg-[#58f5f5]"
            onClick={() => {
              router("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizEnded;
