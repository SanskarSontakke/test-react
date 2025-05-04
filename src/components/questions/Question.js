import React from 'react';

function Question({ question, currentQuestion, totalQuestions, handleAnswerOptionClick, selectedAnswer, isCurrentQuestionAnswered, showCurrentFeedback, isCurrentAnswerCorrect }) {
  return (
    <div className="question-section">
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{totalQuestions}
      </div>
      <div className="question-text">{question.questionText}</div>
      <div className="answer-section">
        {question.answerOptions.map((answerOption, index) => {
          const isCorrectAnswer = answerOption.isCorrect;
          const shouldShowCorrectAnswer = showCurrentFeedback && !isCurrentAnswerCorrect && isCorrectAnswer;

          return (
            <button
              key={index}
              className={`answer-button 
                ${selectedAnswer === answerOption.answerText ? 'selected' : ''} 
                ${showCurrentFeedback && selectedAnswer === answerOption.answerText 
                  ? (answerOption.isCorrect ? 'correct-answer' : 'incorrect-answer') 
                  : ''}
                ${shouldShowCorrectAnswer ? 'correct-answer' : ''}
              `}
              onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
              disabled={isCurrentQuestionAnswered}
            >
              {answerOption.answerText}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;