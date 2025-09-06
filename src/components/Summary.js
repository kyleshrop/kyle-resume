import React from 'react';
import { resumeData } from '../data/resumeData';
import '../styles/components/Summary.css';

const Summary = () => {
return(        
    <section id="summary">
        <h2 className="section-title">Professional Summary</h2>
        <div className="card">
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1' }}>
                {resumeData.summary}
            </p>
        </div>
    </section>
);
};

export default Summary;