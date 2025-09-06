import React from 'react';
import { resumeData } from '../data/resumeData';
import '../styles/components/Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2 className="section-title">Education</h2>
      
      {resumeData.education.map((edu, index) => (
        <div key={index} className="card">
          <div className="job-header">
            <div>
              <h3 className="job-title">{edu.degree}</h3>
              <p className="company">{edu.institution}</p>
            </div>
            <span className="date">{edu.graduationYear}</span>
          </div>
          
          <h4 className="academic-projects-title">Academic Projects:</h4>
          <ul>
            {edu.academicProjects.map((project, projectIndex) => (
              <li key={projectIndex}>{project}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Education;