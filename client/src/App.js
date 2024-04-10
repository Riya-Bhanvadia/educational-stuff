import { Route, Routes } from "react-router-dom";
import "./App.css";

import CreateQuiz from "./pages/createQuiz";
import Quiz from "./pages/studentSide/quiz";
import QuizTitle from "./pages/quizTitle";
import ReviewQuestionAdmin from "./pages/reviewQuestionAdmin";
import SelectExam from "./pages/selectExam";
import CodeEntry from "./pages/studentSide/codeEntry";
import LandingNavBar from "./components/navbar/landingNavBar";
import LandingPage from "./pages/landingPage";
import QuizEnded from "./pages/studentSide/quizEnded";

function App() {
  if (localStorage.getItem("count") === undefined) {
    localStorage.setItem("count", Number(0));
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/createQuiz" element={<CreateQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizTitle" element={<QuizTitle />} />
        <Route path="/reviewQuestionAdmin" element={<ReviewQuestionAdmin />} />
        <Route path="/selectTitle" element={<SelectExam />} />
        <Route path="/CodeEntry" element={<CodeEntry />} />
        <Route path="/quizended" element={<QuizEnded />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
