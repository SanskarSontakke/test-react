import React from 'react';
import './questions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const QuestionLoader = () => {
  return (
    <div className="card loader-container">
      <div className="card-body loader-content">
        <div className="loader-spinner"></div>
        <h2 className="card-title">Loading Quiz Questions...</h2>
        <p className="card-text">Please wait while we prepare your quiz</p>
      </div>
    </div>
  );
};