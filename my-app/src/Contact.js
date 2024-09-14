import React, { useState } from 'react';
import './Contact.css'; // Assuming this is your CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <section className="contact">
      <div className="contact-header">
        <img src="Alexey_Kovalenko.jpg" alt="Profile" className="contact-profile-pic" />
        <h2>Feel Free to Reach Out</h2>
        <p>Let's start a productive conversation</p>
        <button className="contact-btn">
            <a href="mailto:2000ako@gmail.com"> Send Email</a>
        </button>
        <div className="social-icons">
          {/* Replace # with actual social media links */}
          <a href="https://www.linkedin.com/in/alexey-kovalenko-3455a01b6/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/alexey.kovalenko.9803/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/oreoqke" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
          </a>
        </div>
      </div>


    </section>
  );
};

export default Contact;