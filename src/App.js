import React from 'react';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutMe />
      <Summary />
      <Experience />
      <Education />
    </div>
  );
}

export default App;