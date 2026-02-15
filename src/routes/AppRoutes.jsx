import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/auth/Login";
import Dashboard from "../components/dashboard/Dashboard";
import ModuleList from "../components/modules/ModuleList";
import QuizPage from "../components/quiz/QuizPage";
import Result from "../components/quiz/Results";
import PdfUpload from "../components/pdf/PdfUpload";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modules" element={<ModuleList />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<Result />} />
        <Route path="/upload" element={<PdfUpload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
