function Score({ score }) {
    return (
      <div className="score-entry">
        <p>
          <strong>Date:</strong> {score.date}
        </p>
        <p>
          <strong>Score:</strong> {score.score}
        </p>
      </div>
    );
  }
  
  export default Score;
  