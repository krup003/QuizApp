import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const techIcons = {
  HTML: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M5 3l2.7 24.3L16 29l8.3-1.7L27 3H5z" fill="#E44D26"/><path d="M16 27.1l6.7-1.4 2.3-21.1H16v22.5z" fill="#F16529"/><path d="M16 13.2h-3.4l-.2-2.2H16V8.9H9.7l.1 1.2.7 7.7H16v-2.3zm0 5.1h-2.2l-.1-1.2H16v-2.1h-3.6l.2 2.2.3 3.2H16v-2.1z" fill="#EBEBEB"/><path d="M16 13.2v2.3h3.1l-.3 3.2-2.8.6v2.2l4.7-1 .6-6.7H16zm0-4.3v2.1h6.1l.1-1.2.1-1.2H16z" fill="#fff"/></svg>,
  CSS: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M5 3l2.7 24.3L16 29l8.3-1.7L27 3H5z" fill="#264DE4"/><path d="M16 27.1l6.7-1.4 2.3-21.1H16v22.5z" fill="#2965F1"/><path d="M16 13.2h-3.4l-.2-2.2H16V8.9H9.7l.1 1.2.7 7.7H16v-2.3zm0 5.1h-2.2l-.1-1.2H16v-2.1h-3.6l.2 2.2.3 3.2H16v-2.1z" fill="#EBEBEB"/><path d="M16 13.2v2.3h3.1l-.3 3.2-2.8.6v2.2l4.7-1 .6-6.7H16zm0-4.3v2.1h6.1l.1-1.2.1-1.2H16z" fill="#fff"/></svg>,
  JavaScript: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.7 23.7c.5.8 1.1 1.5 2.3 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.2c-1.7-.7-2.8-1.5-2.8-3.2 0-1.6 1.2-2.8 3-2.8 1.3 0 2.2.4 2.8 1.6l-1.5 1c-.3-.6-.7-.8-1.3-.8-.6 0-1 .4-1 .8 0 .6.4.9 1.4 1.3l.6.2c2 .8 3.1 1.6 3.1 3.3 0 1.9-1.5 2.9-3.5 2.9-2 0-3.2-1-3.8-2.1l1.6-1zm-7.2.2c.3.6.6 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.4v-6.2h2v6.3c0 2-1.2 2.9-2.9 2.9-1.6 0-2.5-.8-3-1.8l1.5-1z" fill="#222"/></svg>,
  Python: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#306998"/><path d="M16 7c-2.2 0-4 .2-4 2.4v2.1h8V9.4C20 7.2 18.2 7 16 7zm-4 2.4C12 8.2 13.8 8 16 8s4 .2 4 1.4v2.1h-8V9.4zm-2 3.6v2.1c0 2.2 1.8 2.4 4 2.4s4-.2 4-2.4v-2.1h-8zm8 2.1c0 1.2-1.8 1.4-4 1.4s-4-.2-4-1.4v-2.1h8v2.1zm-4 2.9c-2.2 0-4 .2-4 2.4v2.1h8v-2.1c0-2.2-1.8-2.4-4-2.4zm-4 2.4c0-1.2 1.8-1.4 4-1.4s4 .2 4 1.4v2.1h-8v-2.1zm2 3.6v2.1c0 2.2 1.8 2.4 4 2.4s4-.2 4-2.4v-2.1h-8zm8 2.1c0 1.2-1.8 1.4-4 1.4s-4-.2-4-1.4v-2.1h8v2.1z" fill="#FFD43B"/></svg>,
  Angular: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><polygon points="16,3 29,7 27,25 16,29 5,25 3,7" fill="#E23237"/><polygon points="16,5 27,8.5 25.5,24 16,27 6.5,24 5,8.5" fill="#B52E31"/><path d="M16 8l-5 12h2l1-2.5h4L19 20h2L16 8zm0 3.5l1.5 4h-3l1.5-4z" fill="#fff"/></svg>,
  React: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="3" fill="#61DAFB"/><g stroke="#61DAFB" strokeWidth="2"><ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(60 16 16)"/><ellipse rx="13" ry="5.5" cx="16" cy="16" transform="rotate(120 16 16)"/><ellipse rx="13" ry="5.5" cx="16" cy="16"/></g></svg>,
  jQuery: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="14" fill="#0769AD"/><path d="M10 20c2 2 6 2 8 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M12 14c1 1 3 1 4 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M18 12c.5.5 1.5.5 2 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
  Laravel: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#F05340"/><path d="M8 20l8 4 8-4M8 20V12l8-4 8 4v8" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/><path d="M16 8v16" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>,
  MongoDB: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><ellipse cx="16" cy="16" rx="14" ry="14" fill="#13AA52"/><path d="M16 8v16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><path d="M16 8c-2 4-2 8 0 16 2-8 2-12 0-16z" fill="#fff"/></svg>,
  MySQL: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#00758F"/><path d="M10 22c2-6 10-6 12 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="2" fill="#fff"/></svg>,
  SQLite: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#003B57"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#47A8F5"/><rect x="14" y="14" width="4" height="4" rx="1" fill="#fff"/></svg>,
  Firebase: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#FFCA28"/><path d="M16 8l-6 12h12l-6-12z" fill="#FFA000"/><path d="M16 8v16" stroke="#fff" strokeWidth="2"/></svg>,
};

function TopicsPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current.children, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  }, []);

  const handleQuizSelect = (quiz) => {
    navigate(`/quiz/${quiz}`);
  };

  return (
    <div className="quiz-container" ref={containerRef}>
      <div className="quiz-grid">
        <div className="quiz-card">
          <h2 className="quiz-title">Frontend Development</h2>
          {['HTML', 'CSS', 'JavaScript', 'Python'].map((quiz) => (
            <div
              key={quiz}
              className="quiz-option"
              onClick={() => handleQuizSelect(quiz)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleQuizSelect(quiz)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              {techIcons[quiz]}
              <span>{quiz}</span>
            </div>
          ))}
        </div>

        <div className="quiz-card">
          <h2 className="quiz-title">Databases</h2>
          {['MongoDB', 'MySQL', 'SQLite', 'Firebase'].map((quiz) => (
            <div
              key={quiz}
              className="quiz-option"
              onClick={() => handleQuizSelect(quiz)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleQuizSelect(quiz)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              {techIcons[quiz]}
              <span>{quiz}</span>
            </div>
          ))}
        </div>

        <div className="quiz-card">
          <h2 className="quiz-title">Frameworks & Libraries</h2>
          {['Angular', 'React', 'jQuery', 'Laravel'].map((quiz) => (
            <div
              key={quiz}
              className="quiz-option"
              onClick={() => handleQuizSelect(quiz)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleQuizSelect(quiz)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
            >
              {techIcons[quiz]}
              <span>{quiz}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopicsPage; 