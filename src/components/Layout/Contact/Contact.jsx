// ContactForm.js

import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Add your logic for handling form submission, such as sending an email or making an API request
    console.log('Form submitted:', formData);
    toast("Your Message Successfully send..")
    setFormData({
        name: '',
        email: '',
        message: '',
      })
  };

  return (

    <>
    <div className='outer2' style={{color:"white"}}>
    <h2>Contact Us</h2>
    <br/>
    <p>Have questions or suggestions? We'd love to hear from you! Reach out to our dedicated customer support team at trendPlus@gmail.com.

Thank you for choosing TrendPlus. We appreciate your trust in us.</p>
    </div>

<div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <label >
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label >
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
    
  );
};

export default ContactForm;
