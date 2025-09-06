import React from 'react';
import { resumeData } from '../data/resumeData';
import '../styles/components/Skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(resumeData.skills).map(([categoryName, skillArray]) => (
          <div key={categoryName} className="skill-category">
            <h3>{categoryName}</h3>
            <div className="skill-tags">
              {skillArray.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;