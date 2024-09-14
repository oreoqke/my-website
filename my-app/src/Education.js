import React from 'react';
import './Education.css'; // Assuming this is where your CSS is located

const Education = () => {
  const educationData = [
    {
      school: 'Princeton University',
      degree: 'Master’s degree · Data Science',
      dates: 'Sep 2015 - Dec 2016',
    },
    {
      school: 'Montclair State University',
      degree: 'Bachelor’s degree · Artificial Intelligence',
      dates: 'Sep 2011 - Jun 2015',
    },
    // Add more education entries as needed
  ];

  return (
    <section className="education">
      <h2>Education</h2>
      <p className="intro">
        Degrees and certifications in the specialized fields of data science and business analytics.
      </p>

      {educationData.map((edu, index) => (
        <div className={`education-item ${index === educationData.length - 1 ? 'last' : ''}`} key={index}>
          <div className="education-details">
            <h3>{edu.school}</h3>
            <p className="degree">{edu.degree}</p>
          </div>
          <div className="education-dates">
            <span className="date-badge">{edu.dates}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;