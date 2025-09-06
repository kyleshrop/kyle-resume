import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;