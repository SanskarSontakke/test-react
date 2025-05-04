import React from 'react';

function ScoreCard({ score, questions, correctAnswers, wrongAnswers, unattemptedQuestions, resetQuiz }) {
  return (
    <div className="score-section">
      <h2>Quiz Completed!</h2>
      <p>You scored {score} out of {questions.length}</p>
      <p>Correct Answers: {correctAnswers}</p>
      <p>Wrong Answers: {wrongAnswers}</p>
      <p>Unattempted Questions: {unattemptedQuestions}</p>
      <button className="reset-button" onClick={resetQuiz}>Restart Quiz</button>
    </div>
  );
}

export default ScoreCard;