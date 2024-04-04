import { useMutation, useQuery } from "react-query";
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
  return useMutation(createQuestion);
};

const getQuestions = (data) => {
  console.log(data);
  return axios.get(`http://localhost:5050/getQuestions/${data}`);
};

export const useGetQuestion = (data) => {
  return useQuery("questions", () => getQuestions(data));
};

const deleteQue = (data) => {
  console.log(typeof data);
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
  console.log(data);
  return axios.post("http://localhost:5050/studentQuestions", data);
};

export const useStudentQues = () => {
  return useMutation(studentQues);
};