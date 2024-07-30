import React, { useState, useEffect, useRef } from 'react';

export function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const padNumber = (num, size) => {
    return num.toString().padStart(size, '0');
  };

  const timeString = padNumber(seconds, 6);

  const containerStyle = {
    backgroundColor: '#000000',
    padding: '30px',
    borderRadius: '15px',
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  };

  const timerStyle = {
    display: 'flex',
    gap: '15px'
  };

  const cardStyle = {
    backgroundColor: '#1a1a1a',
    borderRadius: '8px',
    padding: '10px',
    width: '70px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const digitStyle = {
    color: 'white',
    fontSize: '60px',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif'
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 5px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <div style={containerStyle}>
      <div style={timerStyle}>
        <div style={cardStyle}>
          <span style={{...digitStyle, fontSize: '50px'}}>🕒</span>
        </div>
        {timeString.split('').map((digit, index) => (
          <div key={index} style={cardStyle}>
            <span style={digitStyle}>{digit}</span>
          </div>
        ))}
      </div>
      <div>
        {isRunning ? (
          <button style={buttonStyle} onClick={stopTimer}>Stop</button>
        ) : (
          <button style={buttonStyle} onClick={resumeTimer}>Resume</button>
        )}
        <button style={buttonStyle} onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}