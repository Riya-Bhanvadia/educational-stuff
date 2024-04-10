import { useMutation, useQuery, useQueryClient } from "react-query";
import axios from "axios";

const createQuiz = (data) => {
  return axios.post("http://localhost:5050/createQuizTitle", data);
};
export const useCreateQuiz = (data) => {
  return useMutation(createQuiz);
};

const createQuestion = (data) => {
  return axios.post("http://localhost:5050/createQuestion", data);
};
export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(createQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("questionsCount");
    },
  });
};

const getQuestions = (data) => {
  return axios.get(`http://localhost:5050/getQuestions/${data}`);
};

export const useGetQuestion = (data) => {
  return useQuery("questions", () => getQuestions(data));
};

const deleteQue = (data) => {
  return axios.post("http://localhost:5050/deleteQuestion", data);
};

export const useDeleteQue = () => {
  return useMutation(deleteQue);
};

const getQuestionCount = (data) => {
  return axios.get(`http://localhost:5050/getQuestionCount/${data}`);
};

export const useGetQuestionCount = (data) => {
  return useQuery("questionsCount", () => getQuestionCount(data));
};

const getTitles = () => {
  return axios.get("http://localhost:5050/findTitle");
};

export const useGetTitles = () => {
  return useQuery("quiz", getTitles);
};

const studentQues = (data) => {
  return axios.post("http://localhost:5050/studentQuestions", data);
};

export const useStudentQues = () => {
  return useMutation(studentQues);
};


const getSingleQuestion = (data) => {
  return axios.get(`http://localhost:5050/getSingleQuestion/${data}`);
};

export const useGetSingleQuestion = (data) => {
  return useQuery(["singleQuestion", data], () => getSingleQuestion(data));

const updateQuizQuestion = (data) => {
  return axios.post("http://localhost:5050/updateQuestion", data);
};

export const useUpdateQuizQuestion = () => {
  return useMutation(updateQuizQuestion);

};
