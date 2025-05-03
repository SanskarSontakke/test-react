import React, { useState, useEffect } from 'react';
import { QuestionLoader } from './questionsLoader';
import './questions.css';
import { quizQuestions } from './questionsData'; // Import the questions

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Track selected answers for each question
  const [showSubmit, setShowSubmit] = useState(false); // State to show submit screen
  const [answerCorrectness, setAnswerCorrectness] = useState(Array(quizQuestions.length).fill(null)); // null: unanswered, true: correct, false: incorrect

  useEffect(() => {
    // Simulate loading questions from an API
    setTimeout(() => {
      setQuestions(quizQuestions); // Use imported questions
      setLoading(false);
    }, 2000);
  }, []);

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestion]: answerText, // Store the selected answer for the current question
    }));

    const updatedAnswerCorrectness = [...answerCorrectness];
    updatedAnswerCorrectness[currentQuestion] = isCorrect;
    setAnswerCorrectness(updatedAnswerCorrectness);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowSubmit(true); // Show submit screen when all questions are answered
    }
  };

  const handleBackQuestion = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  const handleSubmitQuiz = () => {
    setShowSubmit(false);
    setShowScore(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswers({}); // Clear all selected answers
    setShowSubmit(false); // Hide submit screen on reset
    setAnswerCorrectness(Array(quizQuestions.length).fill(null)); // Reset answer correctness
  };

  if (loading) {
    return (
      <div className="questions-container">
        <QuestionLoader />
      </div>
    );
  }

  const selectedAnswer = selectedAnswers[currentQuestion]; // Get the selected answer for the current question

  return (
    <div className="questions-container">
      {showSubmit ? (
        <div className="submit-section">
          <h2>Submit Quiz?</h2>
          <p>Are you sure you want to submit the quiz?</p>
          <button className="submit-button" onClick={handleSubmitQuiz}>Submit</button>
          <button className="back-button" onClick={() => setShowSubmit(false)}>Back to Quiz</button>
        </div>
      ) : showScore ? (
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>You scored {score} out of {questions.length}</p>
          <button className="reset-button" onClick={resetQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button 
                key={index} 
                className={`answer-button ${selectedAnswer === answerOption.answerText ? 'selected' : ''}`}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect, answerOption.answerText)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
          <div className="navigation">
            <button className="back-button" onClick={handleBackQuestion} disabled={currentQuestion === 0}>
              Back
            </button>
            <button className="next-button" onClick={handleNextQuestion}>
              {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
          <div className="question-progress">
            {questions.map((question, index) => (
              <span
                key={index}
                className={`question-progress-circle ${
                  answerCorrectness[index] === null
                    ? 'unanswered'
                    : answerCorrectness[index]
                    ? 'correct'
                    : 'incorrect'
                }`}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;