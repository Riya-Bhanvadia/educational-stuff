import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const getQuestionsfromID = (data) => {
  return axios.get(`http://localhost:5050/getAllAttemptedQuestions/${data}`);
};

export const useGetQuestionsFromId = (data) => {
  return useQuery("attemptedQuestions", () => getQuestionsfromID(data), {
    refetchOnWindowFocus: false
  });
};

const updateAttemptedQuestion = (data) => {
  return axios.post(`http://localhost:5050/updateAttemptedQuestion`, data);
};

export const useUpdateAttemptedQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(updateAttemptedQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries("attemptedQuestions");
    },
  });
};
