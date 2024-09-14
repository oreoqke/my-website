import React from 'react';
import './Work.css';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Data Scientist & Business Consultant',
      company: 'TechNova · Full-Time',
      location: ' Phoenix, Arizona, USA',
      description:
        'Demonstrating a seamless integration of data science acumen and business consulting proficiency...',
      dates: 'Jun 2021 - Present',
    },
    {
      title: 'Data Analyst & Business Strategist',
      company: 'SwiftEdge · Contract',
      location: ' Dallas, Texas, USA',
      description:
        'Skillfully combining data analysis proficiency with strategic business acumen...',
      dates: 'Oct 2017 - May 2021',
    },
    {
        title: 'Data Analyst & Business Strategist',
        company: 'SwiftEdge · Contract',
        location: ' Dallas, Texas, USA',
        description:
          'Skillfully combining data analysis proficiency with strategic business acumen...',
        dates: 'Oct 2017 - May 2021',
      },
      {
        title: 'Data Analyst & Business Strategist',
        company: 'SwiftEdge · Contract',
        location: ' Dallas, Texas, USA',
        description:
          'Skillfully combining data analysis proficiency with strategic business acumen...',
        dates: 'Oct 2017 - May 2021',
      },
    // Add more experiences as necessary
  ];

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <p className="intro">
        Proven track record in data science and business consulting, delivering
        impactful insights and results across industries.
      </p>
      
      {experiences.map((exp, index) => (
        <div className="experience-item" key={index}>
          <div className="experience-details">
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="location">
              <i className="fas fa-map-marker-alt"></i> {exp.location}
            </p>
            <p className="description">{exp.description}</p>
          </div>
          <div className="experience-dates">
            <span className="date-badge">{exp.dates}</span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;