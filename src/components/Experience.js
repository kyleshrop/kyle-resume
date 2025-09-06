import React from 'react';
import { resumeData } from '../data/resumeData';
import '../styles/components/Experience.css';

const Experience = () => {
return(        
    <section id="experience">
        <h2 class="section-title">Work Experience</h2>
        
        <div class="card">
            <div class="job-header">
                <div>
                    <h3 class="job-title">Senior Quality Assurance Engineer</h3>
                    <p class="company">Toast Inc., Boston, MA</p>
                </div>
                <span class="date">November 2021 – Present</span>
            </div>
            <p class="description">Maintained integrity of a highly flexible POS system with a primary focus on human machine interface, printers and bluetooth peripherals.</p>
            <ul>
                <li>Developed and executed comprehensive test cases, leveraging deep domain expertise to improve software reliability</li>
                <li>Increased automated test coverage of key workflows using Espresso and Appium, reducing manual testing efforts</li>
                <li>Spearheaded performance testing initiatives, ensuring software stability and optimizing key workflows</li>
                <li>Maintained Confluence guides and led training sessions to empower the QA organization in executing critical performance tests</li>
                <li>Organized and led bug bashes before the rollout of high-value features to production</li>
                <li>Used LaunchDarkly and Sentry to investigate production issues and conduct root cause analysis</li>
                <li>Monitored automated testing for flakiness and triaged failures to prevent workflow disruptions</li>
                <li>Delivered live product demonstrations to high-value clients, directly contributing to securing key contracts</li>
                <li>Partnered with hardware engineering and external vendors to ensure newly added peripherals functioned in all use cases</li>
            </ul>
        </div>

        <div class="card">
            <div class="job-header">
                <div>
                    <h3 class="job-title">Quality Assurance Analyst (Contract)</h3>
                    <p class="company">Berkshire Grey, Bedford, MA</p>
                </div>
                <span class="date">January 2021 – November 2021</span>
            </div>
            <p class="description">Validated an automated robotic package fulfillment system to ensure adherence to customer specification.</p>
            <ul>
                <li>Authored and executed 50+ test cases aligned with functional specifications, ensuring robust software validation</li>
                <li>Performed daily build acceptance testing to detect and prevent regressions in development software</li>
                <li>Collaborated with developers to analyze new features and assess their impact on existing functionality</li>
                <li>Assisted in running robotic systems for high-profile customer demonstrations</li>
                <li>Logged and tracked defects using Jira, attaching relevant logs for faster resolution</li>
            </ul>
        </div>
    </section>
);
};

export default Experience;