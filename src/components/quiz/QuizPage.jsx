import { useNavigate } from "react-router-dom";
import { useState } from "react";

function QuizPage() {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    localStorage.setItem("score", answer === "Java" ? 1 : 0);
    navigate("/result");
  };

  return (
    <div className="box">
      <h2>Quiz</h2>
      <p>Which language is used for Spring Boot?</p>
      <input onChange={e => setAnswer(e.target.value)} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default QuizPage;
