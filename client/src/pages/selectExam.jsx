import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import { useGetTitles } from "../hooks/quizHook";
import { useNavigate } from "react-router-dom";

const SelectExam = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleSelectItem = (i) => {
    console.log(i.code);
    console.log(i.title);
    navigate("/reviewQuestionAdmin", {
      state: { title: i.title, code: i.code },
    });
  };
  const { isLoading, data } = useGetTitles();
//   console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="shadow-2xl mx-24 mt-40 flex flex-col ml-40 mr-40 h-60">
        <p className="font-bold mb-7">Welcome Quiz Creators</p>

        <div className="relative flex flex-col  ml-[33%] w-[200px] h-[340px] rounded-lg ">
          <button
            className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl  hover:border-2  w-44  flex justify-center"
            onClick={() => setOpen(!open)}
          >
            select exam title
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {open ? (
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {data.data.map((i) => (
                <>
                  <li key={i._id} onClick={() => handleSelectItem(i)}>
                    <p
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer "
                    >
                      {i.title}
                    </p>
                  </li>
                </>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectExam;
