import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { htmlQuizData } from '../htmlQuizData';
import { cssQuizData } from '../cssQuizData';
import { javascriptQuizData } from '../javascriptQuizData';
import { pythonQuizData } from '../pythonQuizData';
import { angularQuizData } from '../angularQuizData';
import { reactQuizData } from '../reactQuizData';
import { jqueryQuizData } from '../jqueryQuizData';
import { laravelQuizData } from '../laravelQuizData';
import { mongodbQuizData } from '../mongodbQuizData';
import { mysqlQuizData } from '../mysqlQuizData';
import { sqliteQuizData } from '../sqliteQuizData';
import { firebaseQuizData } from '../firebaseQuizData';

function QuizPage() {
  const { quizType } = useParams();
  const navigate = useNavigate();
  const [showQuestions, setShowQuestions] = useState(false);
  const [timer, setTimer] = useState(300);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  const containerRef = useRef(null);
  const quizCardRef = useRef(null);
  const questionRef = useRef(null);
  const celebrationRef = useRef(null);

  const getQuizData = () => {
    switch (quizType) {
      case 'HTML':
        return htmlQuizData;
      case 'CSS':
        return cssQuizData;
      case 'JavaScript':
        return javascriptQuizData;
      case 'Python':
        return pythonQuizData;
      case 'Angular':
        return angularQuizData;
      case 'React':
        return reactQuizData;
      case 'jQuery':
        return jqueryQuizData;
      case 'Laravel':
        return laravelQuizData;
      case 'MongoDB':
        return mongodbQuizData;
      case 'MySQL':
        return mysqlQuizData;
      case 'SQLite':
        return sqliteQuizData;
      case 'Firebase':
        return firebaseQuizData;
      default:
        return null;
    }
  };

  const quizData = getQuizData();

  useEffect(() => {
    if (!quizData) {
      navigate('/topics');
    }
  }, [quizData, navigate]);

  useEffect(() => {
    if (quizCardRef.current) {
      gsap.from(quizCardRef.current, {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: "back.out(1.7)"
      });
    }
  }, [showQuestions]);

  useEffect(() => {
    if (questionRef.current) {
      gsap.from(questionRef.current, {
        duration: 0.5,
        x: -50,
        opacity: 0,
        ease: "power2.out"
      });
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    let interval;
    if (showQuestions && timer > 0 && !submitted) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showQuestions, timer, submitted]);

  useEffect(() => {
    if (submitted) {
      gsap.from(".quiz-result", {
        duration: 1,
        scale: 0.5,
        opacity: 0,
        ease: "elastic.out(1, 0.5)"
      });

      gsap.from(".quiz-answer", {
        duration: 0.5,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  }, [submitted]);

  const handleOptionChange = (qIndex, optIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[qIndex] = optIndex;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const createConfetti = () => {
    const container = celebrationRef.current;
    if (!container) return;

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
      container.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }
  };

  const calculateProgress = (score, total) => {
    return (score / total) * 100;
  };

  const getRatingLabel = (percentage) => {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 70) return "Great!";
    if (percentage >= 50) return "Good!";
    if (percentage >= 30) return "Fair";
    return "Needs Improvement";
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowCelebration(true);
    createConfetti();

    setTimeout(() => {
      setShowCelebration(false);
    }, 5000);
  };

  const calculateScore = () => {
    return answers.filter((ans, index) => ans === quizData.questions[index].answer).length;
  };

  const handleStartQuiz = () => {
    setShowQuestions(true);
    setTimer(300);
    setCurrentQuestionIndex(0);
    setSubmitted(false);
    setAnswers(Array(quizData.questions.length).fill(null));
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!quizData) return null;

  return (
    <div className="quiz-container" ref={containerRef}>
      {showCelebration && (
        <div className="celebration-container" ref={celebrationRef} />
      )}

      {!showQuestions && (
        <div className="quiz-card" ref={quizCardRef}>
          <h2 className="quiz-title">{quizData.info.title}</h2>
          <p className="text-gray-300 mb-6">{quizData.info.description}</p>
          <button onClick={handleStartQuiz} className="quiz-button">
            Start Quiz ➡️
          </button>
        </div>
      )}

      {showQuestions && !submitted && (
        <div className="quiz-card" ref={questionRef}>
          <div className="quiz-timer">
            ⏱ {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
          </div>
          
          <div className="quiz-progress">
            <div 
              className="quiz-progress-bar" 
              style={{ 
                width: `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%` 
              }}
            />
          </div>

          <h3 className="quiz-title">
            Question {currentQuestionIndex + 1} of {quizData.questions.length}
          </h3>
          
          <p className="quiz-question">
            {quizData.questions[currentQuestionIndex].question}
          </p>

          <div className="quiz-options">
            {quizData.questions[currentQuestionIndex].options.map((opt, i) => (
              <div
                key={i}
                className={`quiz-option ${answers[currentQuestionIndex] === i ? 'selected' : ''}`}
                onClick={() => handleOptionChange(currentQuestionIndex, i)}
              >
                {opt}
              </div>
            ))}
          </div>

          <div className="quiz-nav-buttons">
            {currentQuestionIndex > 0 && (
              <button onClick={handleBack} className="quiz-button">
                ← Back
              </button>
            )}
            {currentQuestionIndex < quizData.questions.length - 1 ? (
              <button 
                onClick={handleNext} 
                className="quiz-button"
                disabled={answers[currentQuestionIndex] === undefined}
              >
                Next ➡️
              </button>
            ) : (
              <button 
                onClick={handleSubmit} 
                className="quiz-button"
                disabled={answers[currentQuestionIndex] === undefined}
              >
                Finish Quiz
              </button>
            )}
          </div>
        </div>
      )}

      {submitted && (
        <div className="quiz-card">
          <div className="quiz-result">
            <h2 className="quiz-title">Quiz Results</h2>
            <div className="quiz-score">
              <div className="score-number">
                {calculateScore()}
              </div>
              <div className="score-total">
                out of {quizData.questions.length}
              </div>
              <div className="score-label">
                {getRatingLabel(calculateProgress(calculateScore(), quizData.questions.length))}
              </div>
            </div>
          </div>

          <div className="quiz-results-container">
            <div className="quiz-answers-section">
              {quizData.questions.map((question, index) => (
                <div 
                  key={index} 
                  className={`quiz-answer ${
                    answers[index] === question.answer ? 'correct' : 'incorrect'
                  }`}
                >
                  <p className="font-semibold mb-2">Question {index + 1}: {question.question}</p>
                  <p>
                    <span className="answer-label">Your Answer:</span>
                    <span className={`${answers[index] === question.answer ? 'correct-answer' : 'your-answer'}`}>
                      {question.options[answers[index]] || "No Answer"}
                    </span>
                  </p>
                  {answers[index] !== question.answer && (
                    <p>
                      <span className="answer-label">Correct Answer:</span>
                      <span className="correct-answer">{question.options[question.answer]}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="quiz-notes-section">
              <h3>📒 Notes</h3>
              <p>{quizData.info.note}</p>
            </div>
          </div>

          <button onClick={handleBackToHome} className="quiz-button mt-8">
            Back to Topics
          </button>
        </div>
      )}
    </div>
  );
}

export default QuizPage; 