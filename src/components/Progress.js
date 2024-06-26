import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        <strong>Question {index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong> Points {points}</strong> /{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
