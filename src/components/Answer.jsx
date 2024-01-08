import { useRef } from "react";

export default function Answer({
  answers,
  selectedAnswer,
  answerState,
  onSelectAnswer,
}) {
  const questionAnswers = useRef();
  if (!questionAnswers.current) {
    questionAnswers.current = [...answers];
    questionAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {questionAnswers.current.map((answer) => {
        const isSelected = answer === selectedAnswer;
        let cssClass = "";
        if (isSelected) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelectAnswer(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
