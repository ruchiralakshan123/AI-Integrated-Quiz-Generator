import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="box">
      <h2>Dashboard</h2>
      <p>Degree: BSc in IT</p>
      <button onClick={() => navigate("/modules")}>View Modules</button>
      <button onClick={() => navigate("/upload")}>Upload PDF</button>
    </div>
  );
}

export default Dashboard;
