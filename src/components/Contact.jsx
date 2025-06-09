import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Contactimg from '../assets/img/icon.png';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Get form data
    const formData = new FormData(form.current);
    const user_email = formData.get('user_email');
    const user_name = formData.get('user_name');

    // First email - to you (admin)
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your admin template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
    .then(() => {
      // Second email - auto-reply to sender
      return emailjs.send(
        'YOUR_SERVICE_ID', // Same service ID
        'YOUR_AUTO_REPLY_TEMPLATE_ID', // Replace with your auto-reply template ID
        {
          to_name: user_name,
          to_email: user_email,
          from_name: 'Your Name', // Your name or company name
          reply_to: 'your-email@example.com' // Your reply-to email
        },
        'YOUR_PUBLIC_KEY' // Same public key
      );
    })
    .then(() => {
      setSubmitStatus('success');
      form.current.reset();
    })
    .catch((error) => {
      console.error('Error:', error);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container">
      <div className="background-animation">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
      
      <div className="contact-form-wrapper">
      <img 
            src={Contactimg} 
            alt="Logo" 
            className="logo" 
          />
        <h2>Get in Touch</h2>
        <p>Have a project in mind or want to collaborate? Send me a message!</p>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="user_name" required />
            <label>Name</label>
          </div>
          
          <div className="form-group">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>
          
          <div className="form-group">
            <input type="text" name="subject" required />
            <label>Subject</label>
          </div>
          
          <div className="form-group">
            <textarea name="message" required rows="5"></textarea>
            <label>Message</label>
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitStatus === 'success' && (
            <div className="success-message">
              Message sent successfully! You'll receive a confirmation email shortly.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="error-message">
              Oops! Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;