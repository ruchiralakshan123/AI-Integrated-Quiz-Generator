import { useNavigate } from "react-router-dom";

function ModuleList() {
  const navigate = useNavigate();
  const modules = ["OOP", "DBMS", "Data Structures"];

  return (
    <div className="box">
      <h2>Select Module</h2>
      {modules.map((m, i) => (
        <button key={i} onClick={() => navigate("/quiz")}>{m}</button>
      ))}
    </div>
  );
}

export default ModuleList;
