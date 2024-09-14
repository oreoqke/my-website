import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className="prof-container">
            <img src="prof-img.jpg" alt="Profile" className="prof-img" />
            <div className="prof-info">
                <h3>Professional Profile</h3>
                <p>
                Accomplished Senior Data Scientist & Business
                 Consultant with a proven track record of 
                 leveraging advanced analytics to drive strategic
                  decision-making and optimize business processes. 
                  Demonstrated expertise in developing innovative 
                  solutions to complex problems, coupled with exceptional 
                  communication skills to effectively convey insights to 
                  stakeholders at all levels.
                </p>
            </div>
        </div>
    );
}

export default Profile;