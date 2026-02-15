function Result() {
  const score = localStorage.getItem("score");

  return (
    <div className="box">
      <h2>Result</h2>
      <p>Your Score: {score}</p>
    </div>
  );
}

export default Result;
