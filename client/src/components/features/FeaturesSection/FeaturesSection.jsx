import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Profile Matching',
      description: 'Our AI analyzes your academic profile, budget, and preferences to suggest the best programs.'
    },
    {
      id: 2,
      title: 'Career-Aligned Programs',
      description: 'Discover courses that align with industry demands and your career aspirations.'
    },
    {
      id: 3,
      title: 'Application Support',
      description: 'Get guided through the entire application process with personalized assistance.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="section-title">How Study Space Overseas Works</h2>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-number">{feature.id}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;