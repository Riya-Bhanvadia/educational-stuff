import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { useStudentQues } from "../../hooks/quizHook";

const CodeEntry = () => {
  const navigate = useNavigate();
  const [examCode, setExamCode] = useState("");
  const { mutate } = useStudentQues();
  const handleCodeSubmit = () => {
    mutate({examCode}, {
      onSuccess: (data) => {
        console.log(data);
        navigate("/quiz", { state: { data:data.data } });
      },
    });
  };
  return (
    <div>
      <Navbar />
      <div className="shadow-2xl mx-24 mt-40 flex flex-col ml-40 mr-40">
        <p className="font-bold mb-7">Welcome Quizmaster</p>
        <div className="flex justify-center">
          <label htmlFor="" className="flex">
            Enter Quiz Code:
          </label>
          <input
            type="text"
            value={examCode}
            onChange={(e) => setExamCode(e.target.value)}
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
            onClick={handleCodeSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEntry;
