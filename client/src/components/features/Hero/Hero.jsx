// src/components/features/Hero/Hero.jsx
import { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [formData, setFormData] = useState({
    studyLevel: '',
    fieldOfStudy: '',
    destinationCountry: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically call an API to search for programs
    // based on the user's selection
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Your Global Education Journey Starts Here</h1>
          <p className="hero-description">
            Find the perfect overseas study program tailored to your profile, career goals, and preferences.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Matched Now</button>
            <button className="secondary-btn">Explore Programs</button>
          </div>
        </div>

        <div className="hero-form-container">
          <div className="quick-match-form">
            <h2 className="form-title">Quick Match Finder</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="studyLevel">Study Level</label>
                <select 
                  id="studyLevel"
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Study Level</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="postgraduate">Postgraduate</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="fieldOfStudy">Field of Study</label>
                <select 
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Field</option>
                  <option value="business">Business & Management</option>
                  <option value="engineering">Engineering & Technology</option>
                  <option value="health">Health & Medicine</option>
                  <option value="arts">Arts & Humanities</option>
                  <option value="sciences">Sciences</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="destinationCountry">Destination Country</label>
                <select 
                  id="destinationCountry"
                  name="destinationCountry"
                  value={formData.destinationCountry}
                  onChange={handleInputChange}
                >
                  <option value="">Any Country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="more">More...</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">Find Programs</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;