import React from "react";
import Navbar from "../components/navbar/navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeleteQue, useGetQuestion } from "../hooks/quizHook";
import { useQueryClient } from "react-query";

const ReviewQuestionAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  console.log(location);
  const { isLoading, data } = useGetQuestion(location.state.title);
  const { mutate } = useDeleteQue();
  const addQuestion = () => {
    navigate("/createQuiz",{state: {code: location.state.code, title:location.state.title}})
  }
  console.log("reviewwwwwww",data);
  const deleteHandler = (id) => {
    console.log("-----------------",typeof id);
    mutate({id:id},{onSuccess:() => {
      queryClient.invalidateQueries("questions")
    }});
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col mx-40 my-12">
        <p className="flex font-bold">Title: {location.state.title}</p>
        <p className="flex font-bold">Exam Code: {location.state.code}</p>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-24 ml-40 mr-40">
        <table className="w-full text-sm  text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-blue-200 text-gray-700 text-left uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr No
              </th>
              <th scope="col" className="px-6 py-3">
                Question
              </th>
              <th scope="col" className="px-6 py-3">
                {/* <span className="sr-only">Edit</span> */}
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data?.data.map((i, index) => (
              <tr key={i._id} className="bg-white border-b text-left dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td
                  scope="row"
                  className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index + 1}
                </td>

                <td className="px-6 py-3">{i.question}</td>
                <td className="px-6 py-3 text-left">
                  <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">
                    Edit
                  </p>
                </td>
                <td className="px-6 py-3 text-left">
                  <p
                    className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                    onClick={() => deleteHandler(i._id)}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
            {/* <tr className="bg-white border-b text-left dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td
                scope="row"
                className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </td>

              <td className="px-6 py-3">what is the national game of India</td>
              <td className="px-6 py-3 text-left">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-3 text-left">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  Delete
                </a>
              </td>
            </tr> */}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
               
                <td className="px-6 py-3">
                    $1999
                </td>
                <td className="px-6 py-3 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                
                <td className="px-6 py-4">
                    $99
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mr-40 mt-20">
        <button className="bg-pink-700 border-2 text-white px-3 py-2 rounded-xl hover:bg-white  hover:border-2 w-52 hover:text-pink-700 flex justify-center" onClick={addQuestion}>
          Add More Question
        </button>
      </div>
    </div>
  );
};

export default ReviewQuestionAdmin;
