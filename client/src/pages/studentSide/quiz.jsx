import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { useLocation } from "react-router-dom";
import { useGetQuestionsFromId } from "../../hooks/attemptedQuestionHooks/attemptedHooks";
import SubQuiz from "./subQuiz";

const Quiz = () => {
  const location = useLocation();
  const val = location.state.data;
  let [counter, setCounter] = useState(Number(localStorage.getItem("count")));
  const { data, isLoading, isError } = useGetQuestionsFromId(
    location.state.data._id
  );
  console.log(val);
  const [questionData, setQuestionData] = useState([]);
  // useEffect(()=>{
  //   setCounter(localStorage.getItem)
  // },[])
  // console.log("188", val)
  // console.log("18",data);

  useEffect(() => {
    if (!isLoading) {
      console.log("27", data);
      setQuestionData(data.data.questions);
    }
  }, [isLoading, data]);
  console.log("35 length", questionData.length);
  if (isLoading || questionData.length < 1) {
    return <h1>Loading...</h1>;
  }
  if(isError){
    return <h1>Error</h1>
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-end mt-5 mr-5">
        <label htmlFor="" className="flex items-center font-medium">
          Time left: 01:00
        </label>
      </div>
      <SubQuiz
        counter={counter}
        questionId={data.data.questions[counter]}
        setCounter={setCounter}
        questionLength={questionData.length}
        aqId={location.state.data._id}
      />
    </div>
  );
};

export default Quiz;
