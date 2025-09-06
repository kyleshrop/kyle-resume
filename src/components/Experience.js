import React from 'react';
import { resumeData } from '../data/resumeData';
import '../styles/components/Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Professional Experience</h2>

      {resumeData.experience.map((job, index) => (
        <div key={index} className="card">
          <div className="job-header">
            <div>
              <h3 className="job-title">{job.title}</h3>
              <p className="company">{job.company}, {job.location}</p>
            </div>
            <span className="date">{job.duration}</span>
          </div>
          
          <p className="description">{job.description}</p>
          
          <ul>
            {job.responsibilities.map((responsibility, respIndex) => (
              <li key={respIndex}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;