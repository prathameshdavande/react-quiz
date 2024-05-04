function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentagePoints = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentagePoints === 100) emoji = "🥇";
  if (percentagePoints >= 80 && percentagePoints < 100) emoji = "🎉";
  if (percentagePoints >= 50 && percentagePoints < 80) emoji = "🙂";
  if (percentagePoints >= 0 && percentagePoints < 50) emoji = "🤔";
  if (percentagePoints === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span> {emoji}</span> You have scored <strong>{points}</strong>/
        {maxPossiblePoints} points ({Math.ceil(percentagePoints)}%).
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
