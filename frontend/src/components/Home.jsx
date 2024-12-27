import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Home = () => {
  const [formData, setFormData] = useState({
    senderName: '',
    senderJobTitle: '',
    recipientName: '',
    recipientCompany: '',
    emailPurpose: '',
    customMessage: '',
    ResumeLink: '',
  });
  const { theme } = useContext(ThemeContext); // Use theme from context

  const [generatedEmail, setGeneratedEmail] = useState('');
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('emailCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });
  const nav = useNavigate();

  // Check if the user is logged in by looking at localStorage
  const isLoggedIn = localStorage.getItem('loginvalue') === 'true';

  // Sync count to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('emailCount', count);
  }, [count]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If not logged in, prevent further email generation and navigate to login
    try {
      const response = await axios.post('http://localhost:3000/main', {
        input: formData,
      });

      const emailText = response.data.reply?.choices?.[0]?.message?.content || 'No email generated';
      setGeneratedEmail(emailText); // Set the email text to display
    } catch (error) {
      console.error('Error generating email:', error);
    }

    // Increment count and check if it's greater than 1 before navigating
    const newCount = count + 1;
    setCount(newCount);

    if (!isLoggedIn && newCount > 2) {
      nav('/login');
      return;
    }
  };
  useEffect(() => {
    document.body.className = theme; // Apply 'light' or 'dark' class to body
  }, [theme])

  const sendEmail = () => {
    const subject = encodeURIComponent('Subject of the Email');
    const body = encodeURIComponent(generatedEmail);
    const recipient = encodeURIComponent(formData.recipientName + '@' + formData.recipientCompany);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };
  

  return (
    <div className={`container ${theme === 'light' ? 'light' : 'dark'}`}> {/* Correct dynamic class */}
      <form className={`form-${theme}`} onSubmit={handleSubmit}> {/* Correct dynamic class */}
        <input
          type="text"
          name="senderName"
          placeholder="Your Name"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="senderJobTitle"
          placeholder="Your Job Title"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="recipientName"
          placeholder="Recipient's Name"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="text"
          name="recipientCompany"
          placeholder="Recipient's Company"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          type="url"
          name="ResumeLink"
          placeholder="Resume URL"
          onChange={handleChange}
          required
          className="input"
        />
        <select name="emailPurpose" onChange={handleChange} required className="select">
          <option value="">Select Purpose</option>
          <option value="job_inquiry">Job Inquiry</option>
          <option value="follow_up">Follow-Up</option>
          <option value="offer">Job Offer</option>
        </select>
        <textarea
          name="customMessage"
          placeholder="Custom Message (optional)"
          onChange={handleChange}
          className="textarea"
        />
        <textarea
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
          className="textarea"
        />
        <button type="submit" className="button">
          Generate Email
        </button>
      </form>

      {generatedEmail && (
        <div className="result-container">
          <h3 className="result-title">Generated Email:</h3>
          <pre className="result-content">{generatedEmail}</pre>
          <button onClick={sendEmail} className="button">
            Send Email
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
