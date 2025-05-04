import React, { useState, useEffect } from 'react';
import { QuestionLoader } from './questionsLoader';
import Question from './Question';
import ScoreCard from './ScoreCard';
import { quizQuestions } from './questionsData';

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showSubmit, setShowSubmit] = useState(false);
  const [answerCorrectness, setAnswerCorrectness] = useState(Array(quizQuestions.length).fill(null));
  const [questionFeedback, setQuestionFeedback] = useState(Array(quizQuestions.length).fill(false));
  const [questionLocked, setQuestionLocked] = useState(Array(quizQuestions.length).fill(false));

  useEffect(() => {
    setTimeout(() => {
      setQuestions(quizQuestions);
      setLoading(false);
    }, 2000);
  }, []);

  const handleAnswerOptionClick = (isCorrect, answerText) => {
    if (questionLocked[currentQuestion]) {
      return;
    }

    const updatedQuestionLocked = [...questionLocked];
    updatedQuestionLocked[currentQuestion] = true;
    setQuestionLocked(updatedQuestionLocked);

    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [currentQuestion]: answerText,
    }));

    const updatedAnswerCorrectness = [...answerCorrectness];
    updatedAnswerCorrectness[currentQuestion] = isCorrect;
    setAnswerCorrectness(updatedAnswerCorrectness);

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const updatedQuestionFeedback = [...questionFeedback];
      updatedQuestionFeedback[currentQuestion] = true;
      setQuestionFeedback(updatedQuestionFeedback);
    }, 500);
  };

  const handleNextQuestion = () => {
    if (!questions || questions.length === 0) {
      return;
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      const updatedQuestionLocked = [...questionLocked];
      updatedQuestionLocked[nextQuestion] = false;
      setQuestionLocked(updatedQuestionLocked);

      const updatedQuestionFeedback = [...questionFeedback];
      updatedQuestionFeedback[nextQuestion] = false;
      setQuestionFeedback(updatedQuestionFeedback);
    } else {
      setShowSubmit(true);
    }
  };

  const handleBackQuestion = () => {
    if (!questions || questions.length === 0) {
      return;
    }
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
    setSelectedAnswers({});
    setShowSubmit(false);
    setAnswerCorrectness(Array(quizQuestions.length).fill(null));
    setQuestionLocked(Array(quizQuestions.length).fill(false));
    setQuestionFeedback(Array(quizQuestions.length).fill(false));
  };

  if (loading) {
    return (
      <div className="questions-container">
        <QuestionLoader />
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="questions-container">
        <p>No questions available.</p>
      </div>
    );
  }

  const selectedAnswer = selectedAnswers[currentQuestion];
  const isCurrentQuestionAnswered = questionLocked[currentQuestion];
  const isCurrentAnswerCorrect = answerCorrectness[currentQuestion];
  const showCurrentFeedback = questionFeedback[currentQuestion];

  const correctAnswers = answerCorrectness.filter(result => result === true).length;
  const wrongAnswers = answerCorrectness.filter(result => result === false).length;
  const unattemptedQuestions = answerCorrectness.filter(result => result === null).length;

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
        <ScoreCard
          score={score}
          questions={questions}
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          unattemptedQuestions={unattemptedQuestions}
          resetQuiz={resetQuiz}
        />
      ) : (
        <>
          <Question
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            handleAnswerOptionClick={handleAnswerOptionClick}
            selectedAnswer={selectedAnswer}
            isCurrentQuestionAnswered={isCurrentQuestionAnswered}
            showCurrentFeedback={showCurrentFeedback}
            isCurrentAnswerCorrect={isCurrentAnswerCorrect}
          />
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
                onClick={() => setCurrentQuestion(index)} 
                style={{ cursor: 'pointer' }}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Questions;