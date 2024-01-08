import { useState, useCallback } from "react";

import Questions from "../question";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [activeUserAnswers, setActiveUserAnswers] = useState([]);

  const questionNumber = activeUserAnswers.length;

  const quizCompleted = questionNumber === Questions.length;

  if (quizCompleted) {
    return <Summary userAnswers={activeUserAnswers} />;
  }

  function answerToQuestion(selectedAnswer) {
    setActiveUserAnswers((perv) => {
      return [...perv, selectedAnswer];
    });
  }


  return (
    <div id="quiz">
      <Question
        key={questionNumber}
        index={questionNumber}
        onSkipAnswer={() => answerToQuestion(null)}
        onSelectAnswer={answerToQuestion}
      />
    </div>
  );
}
