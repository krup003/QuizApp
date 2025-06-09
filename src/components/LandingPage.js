import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

function LandingPage() {
  const navigate = useNavigate();
  const landingRef = useRef(null);

  useEffect(() => {
    if (landingRef.current) {
      gsap.from(landingRef.current.children, {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  }, []);

  const handleStart = () => {
    navigate('/topics');
  };

  return (
    <div className="landing-page">
      {/* <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div> */}
      <div className="landing-content">
        {/* Animated Quiz Icon */}
        <div className="quiz-icon-animated">
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="35" cy="35" r="34" stroke="#6366f1" strokeWidth="2" fill="#232946" />
            <path d="M35 20C29 20 25 24 25 28C25 32 29 34 35 34C41 34 45 32 45 28C45 24 41 20 35 20Z" fill="#fff"/>
            <circle cx="35" cy="44" r="4" fill="#6366f1"/>
          </svg>
        </div>
        <div className="landing-tagline">🚀 Ready to test your skills?</div>
        <h1 className="landing-title">Tech Quiz Challenge</h1>
        <p className="landing-subtitle">
          Test your knowledge in various programming languages and technologies.<br/>
          Choose from a wide range of topics and challenge yourself with our interactive quizzes.<br/>
          Are you ready to prove your expertise?
        </p>
        <button className="start-button" onClick={handleStart}>
          <span className="shine-effect">Start Your Journey →</span>
        </button>
      </div>
    </div>
  );
}

export default LandingPage; 