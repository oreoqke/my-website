import React from 'react';
import './Languages.css'; // Assuming this is your CSS file

const Languages = () => {
  const languages = [
    {
      flag: '🇬🇧',
      language: 'English',
      proficiency: 'Native or bilingual proficiency',
    },
    {
      flag: '🇫🇷',
      language: 'French',
      proficiency: 'Professional working proficiency',
    },
    {
      flag: '🇪🇸',
      language: 'Spanish',
      proficiency: 'Elementary proficiency',
    },
  ];

  return (
    <section className="languages">
      <h2>Languages</h2>
      <p className="intro">
        Proficient in multiple languages, facilitating effective communication and collaboration in diverse settings.
      </p>

      {languages.map((lang, index) => (
        <div className={`language-item ${index === languages.length - 1 ? 'last' : ''}`} key={index}>
          <div className="language-details">
            <span className="flag">{lang.flag}</span>
            <h3>{lang.language}</h3>
            <p className="proficiency">{lang.proficiency}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Languages;