import { useState } from 'react';
import './CTASection.css';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real application, you would send this to your backend API
    console.log('Email submitted:', email);
    
    // Show success message
    setError('');
    setSubmitted(true);
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Start Your Global Education Journey Today</h2>
          <p className="cta-description">
            Sign up for free and get matched with programs tailored to your academic profile, 
            career goals, and preferences.
          </p>
          
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`email-input ${error ? 'error' : ''}`}
                aria-label="Email address"
              />
              <button type="submit" className="submit-btn">Get Started</button>
            </div>
            
            {error && <p className="error-message">{error}</p>}
            {submitted && <p className="success-message">Thank you! We'll be in touch soon.</p>}
            
            <p className="form-note">
              By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
            </p>
          </form>
        </div>
        
        <div className="cta-stats">
          <div className="stat-item">
            <span className="stat-number">10,000+</span>
            <span className="stat-label">Students Placed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">University Partners</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;