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
        <button className="contact-btn">Send Email</button>
        <div className="social-icons">
          {/* Replace # with actual social media links */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </div>


    </section>
  );
};

export default Contact;