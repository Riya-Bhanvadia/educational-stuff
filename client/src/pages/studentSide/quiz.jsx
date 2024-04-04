import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { useStudentQues } from "../../hooks/quizHook";
import { useLocation } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  let [counter, setCounter] = useState(Number(localStorage.getItem("count")));
  const [checked, setChecked] = useState(false);
  let [selectedOption, setSelectedOption] = useState(null);
  // useEffect(()=>{
  //   setCounter(localStorage.getItem)
  // },[])
  console.log(selectedOption);

  const val = location.state.data;
  console.log(val);
  const nextQueHandler = () => {
    setCounter(counter + 1);
    localStorage.setItem("count", counter + 1);
    console.log("select", selectedOption);
    setSelectedOption(null);
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-end mt-5 mr-5">
        <label htmlFor="" className="flex items-center font-medium">
          Time left: 01:00
        </label>
      </div>
      <div className="shadow-2xl mx-24 border-black mt-12 flex flex-col ml-11 mr-40">
        <br />
        <div className="ml-11 flex flex-col">
          <h4 className="items-start flex font-bold">
            Question No: {Number(counter) + 1}
          </h4>
          <br />

          <h1 className="flex items-start ml-8 font-medium">
            {val[counter].question}
          </h1>
          <br />

          <div className="flex ml-8">
            <input
              type="radio"
              name="answer"
              className="flex"
              onChange={() => setSelectedOption(val[counter].options[0].A)}
            />
            <p className="flex ml-6">{val[counter].options[0].A}</p>
          </div>

          <div className="flex ml-8">
            <input
              type="radio"
              name="answer"
              className="flex"
              onChange={() => {
                setSelectedOption(val[counter].options[0].B);
                
              }}

            />
            <p className="flex ml-6">{val[counter].options[0].B}</p>
          </div>
          <div className="flex ml-8">
            <input
              type="radio"
              name="answer"
              className="flex"
              onChange={() => setSelectedOption(val[counter].options[0].C)}
            />
            <p className="flex ml-6">{val[counter].options[0].C}</p>
          </div>
          <div className="flex ml-8">
            <input
              type="radio"
              name="answer"
              className="flex"
              onChange={() => setSelectedOption(val[counter].options[0].D)}
            />
            <p className="flex ml-6">{val[counter].options[0].D}</p>
          </div>
          <div className="flex justify-between px-5">
            <div className="mt-8 ">
              {counter > 0 && (
                <button
                  className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700"
                  onClick={() => setCounter(counter - 1)}
                >
                  Previous
                </button>
              )}
            </div>
            <div className="mt-8 flex ">
              {console.log(counter, val.length - 1)}
              {counter < val.length - 1 ? (
                <button
                  className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700 mr-2"
                  onClick={nextQueHandler}
                >
                  Next
                </button>
              ) : (
                <></>
              )}

              <button className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 hover:text-pink-700 ">
                Finish
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </div>
  );
};

export default Quiz;
