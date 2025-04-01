import { useState } from 'react';
import './DestinationsSection.css';

const DestinationsSection = () => {
  const destinations = [
    {
      id: 'usa',
      name: 'USA',
      universities: '200+',
      image: '/images/destinations/usa.jpg'
    },
    {
      id: 'uk',
      name: 'UK',
      universities: '150+',
      image: '/images/destinations/uk.jpg'
    },
    {
      id: 'canada',
      name: 'Canada',
      universities: '100+',
      image: '/images/destinations/canada.jpg'
    },
    {
      id: 'australia',
      name: 'Australia',
      universities: '40+',
      image: '/images/destinations/australia.jpg'
    },
    {
      id: 'germany',
      name: 'Germany',
      universities: '120+',
      image: '/images/destinations/germany.jpg'
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      universities: '30+',
      image: '/images/destinations/netherlands.jpg'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      universities: '15+',
      image: '/images/destinations/singapore.jpg'
    },
    {
      id: 'new-zealand',
      name: 'New Zealand',
      universities: '20+',
      image: '/images/destinations/new-zealand.jpg'
    }
  ];

  // For displaying "View More" functionality
  const [showAll, setShowAll] = useState(false);
  const displayedDestinations = showAll ? destinations : destinations.slice(0, 4);

  return (
    <section className="destinations-section">
      <div className="destinations-container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-description">
          Explore top countries for international education with comprehensive information on universities, costs, and culture.
        </p>
        
        <div className="destinations-grid">
          {displayedDestinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div 
                className="destination-image" 
                style={{ backgroundImage: `url(${destination.image})` }}
                aria-label={`${destination.name} destination image`}
              >
                {/* Placeholder for actual images */}
                <div className="destination-placeholder">
                  {destination.name}
                </div>
              </div>
              <div className="destination-info">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-universities">{destination.universities} Universities</p>
                <a href={`/destinations/${destination.id}`} className="destination-link">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && destinations.length > 4 && (
          <div className="view-more-container">
            <button 
              className="view-more-btn"
              onClick={() => setShowAll(true)}
            >
              View All Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsSection;