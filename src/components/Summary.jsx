import SummaryImg from "../assets/quiz-complete.png";

import Questions from "../question.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === Questions[index].answers[0]
  );

  const skippedAnswersShared = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShared = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswersShared = 100 - skippedAnswersShared - correctAnswersShared;

  return (
    <div id="summary">
      <img src={SummaryImg} />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShared}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShared}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShared}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) cssClass += " skipped";
          else if (answer === Questions[index].answers[0])
            cssClass += " correct";
          else cssClass += " wrong";
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{Questions[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
