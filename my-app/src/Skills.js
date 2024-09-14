import React from 'react';
import './Skills.css'; // Assuming this is your CSS file

const Skills = () => {
  const skillCategories = [
    {
      category: 'Data Science',
      skills: [
        'Data Analysis',
        'Machine Learning',
        'Statistical Modeling',
        'Data Visualization',
        'Big Data Analytics',
        'Predictive Modeling',
        'Deep Learning',
        'Data Mining',
        'Statistical Inference',
        'Hypothesis Testing',
        'Data Cleaning',
      ],
    },
    {
      category: 'Business Consultation',
      skills: [
        'Strategic Planning',
        'Business Analysis',
        'Market Research',
        'Financial Analysis',
        'Problem-Solving',
        'Project Management',
        'Risk Assessment',
        'Negotiation Skills',
      ],
    },
  ];

  return (
    <section className="skills">
      <h2>Professional Skills</h2>
      <p className="intro">
        Key competencies essential for navigating and excelling in various professional contexts.
      </p>

      {skillCategories.map((category, index) => (
        <div className="skill-category" key={index}>
          <h3>{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, i) => (
              <span className="skill-badge" key={i}>
                ✓ {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;