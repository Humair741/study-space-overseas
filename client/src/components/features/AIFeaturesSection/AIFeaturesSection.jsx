import './AIFeaturesSection.css';

const AIFeaturesSection = () => {
  return (
    <section className="ai-features-section">
      <div className="ai-features-container">
        <div className="ai-features-content">
          <h2 className="section-title">AI-Powered Study Recommendations</h2>
          <p className="section-description">
            Our advanced AI system analyzes thousands of programs to find your perfect match based on:
          </p>
          <ul className="ai-features-list">
            <li className="ai-feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Academic Profile Analysis</h3>
                <p>Get programs that match your grades, test scores, and educational background</p>
              </div>
            </li>
            <li className="ai-feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Career Path Alignment</h3>
                <p>Find courses that lead to your desired career with high employment rates</p>
              </div>
            </li>
            <li className="ai-feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Budget Optimization</h3>
                <p>Discover programs that fit your financial situation with scholarship opportunities</p>
              </div>
            </li>
            <li className="ai-feature-item">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Cultural Compatibility</h3>
                <p>Match with destinations where you'll thrive based on your preferences and lifestyle</p>
              </div>
            </li>
          </ul>
          <div className="ai-features-cta">
            <button className="primary-btn">Try AI Matching</button>
            <span className="ai-note">Free for basic matches, premium features available for subscribers</span>
          </div>
        </div>
        <div className="ai-features-image">
          <div className="image-placeholder">
            <div className="placeholder-text">AI Recommendation Engine</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;