import './App.css';
import Navbar from './Navbar';
import Profile from './Profile';
import WorkExperience from './Work';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Awards from './Awards';
import Contact from './Contact';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <section id="home" className="title">
        <h1>Alexey Kovalenko</h1>
        <p> Software Engineer, Premed, Biochemist, Nucleate Communications</p>
        <div id="btns" className='btns'>
          <button className="email-btn">
            <a href="mailto:2000ako@gmail.com" className="email-btn"> Send Email</a>
          </button>
          {/* <a href="mailto:2000ako@gmail.com" className="email-btn"> Send Email</a> */}
          <button className="CV-btn">
            <a href="Alexey_Resume.pdf" className='CV-btn' >Download CV</a>
          </button>
        </div>
      </section>
      <div id="personal-profile">
        <Profile />
      </div>
      <div id="worked-with">
        {/* optional section */}
      </div>
      <div id="experience">
        <WorkExperience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="certifications">
        {/* optional section */}
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="languages">
        <Languages />
      </div>
      <div id="awards">
        <Awards />
      </div>
      <div id="recommendations">
        {/* optional section */}
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
