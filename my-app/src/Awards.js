import React from 'react';
import './Awards.css'; // Assuming this is your CSS file

const Awards = () => {
  const awardsData = [
    {
      title: 'Data Science Excellence Award',
      issuedBy: 'Issued by Nexus · Data Science',
      description: 'Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.',
      date: 'Dec 2023',
    },
    {
      title: 'Business Innovation Award',
      issuedBy: 'Issued by CCRSolution · Consulting',
      description: 'Commending exemplary expertise in business consulting, driving innovative strategies and impactful outcomes.',
      date: 'Jul 2022',
    },
    {
        title: 'Data Science Excellence Award',
        issuedBy: 'Issued by Nexus · Data Science',
        description: 'Recognizing outstanding contributions in pioneering data-driven solutions and strategic insights.',
        date: 'Dec 2023',
      },
      {
        title: 'Business Innovation Award',
        issuedBy: 'Issued by CCRSolution · Consulting',
        description: 'Commending exemplary expertise in business consulting, driving innovative strategies and impactful outcomes.',
        date: 'Jul 2022',
      },
  ];

  return (
    <section className="awards">
      <h2>Honors & Awards</h2>
      <p className="intro">
        Acknowledgments for exceptional achievements and contributions in professional endeavors.
      </p>

      <div className="awards-list">
        {awardsData.map((award, index) => (
          <div className="award-item" key={index}>
            <div className="award-details">
              <h3>{award.title}</h3>
              <p className="issued-by">{award.issuedBy}</p>
              <p className="description">{award.description}</p>
            </div>
            <div className="award-dates">
              <span className="date-badge">{award.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;