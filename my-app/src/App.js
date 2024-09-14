import './App.css';
import Navbar from './Navbar';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div id="title" className="title">
        <h1>Alexey Kovalenko</h1>
        <p> Software Engineer, Premed, Biochemist, Nucleate Communications</p>
        <div id="btns" className='btns'>
          <button className="email-btn">Send Email</button>
          <button className="CV-btn">Download CV</button>
        </div>
      </div>
      <div id="personal-profile">
        <Profile />
      </div>
      <div id="worked-with">
        {/* optional section */}
      </div>
      <div id="experience">
      </div>
      <div id="education">
      </div>
      <div id="certifications">
        {/* optional section */}
      </div>
      <div id="skills">
      </div>
      <div id="languages">
      </div>
      <div id="awards">

      </div>
      <div id="recommendations">
        {/* optional section */}
      </div>
      <div id="contact">
      </div>
    </div>
  );
}

export default App;
