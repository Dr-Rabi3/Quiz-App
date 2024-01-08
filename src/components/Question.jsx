import { useState } from "react";

import Answer from "./Answer";
import QuestionTimer from "./QuestionTimer";
import Questions from "../question";

export default function Question({ index, onSkipAnswer, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) timer = 1000;

  if (answer.isCorrect !== null) timer = 2000;

  const sendAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: Questions[index].answers[0] === answer,
      });
    }, 1000);

    setTimeout(() => {
      onSelectAnswer(answer);
    }, 2000);
  };

  let answerState = "";
  if (answer.selectedAnswer) {
    if (answer.isCorrect !== null)
      answerState = answer.isCorrect ? "correct" : "wrong";
    else answerState = "selected";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeOut={timer}
        onTimeOut={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{Questions[index].text}</h2>
      <Answer
        answers={Questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelectAnswer={sendAnswer}
      />
    </div>
  );
}
