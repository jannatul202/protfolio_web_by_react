// src/components/GradientText.jsx
import React from 'react';
import './css/GradientText.css'; // CSS ফাইল Import

const GradientText = ({ children, colors, animationSpeed, showBorder, className }) => {
  const style = {
    background: `linear-gradient(270deg, ${colors.join(', ')})`,
    backgroundSize: '600% 600%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `gradientAnimation ${animationSpeed}s ease infinite`,
    borderBottom: showBorder ? '2px solid' : 'none',
  };

  return (
    <span className={className} style={style}>
      {children}
    </span>
  );
};

export default GradientText;