import { useEffect, useRef, useState } from 'react';
import './PartnersSection.css';

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Harvard University',
      logo: '/images/partners/harvard.png',
      country: 'USA'
    },
    {
      id: 2,
      name: 'University of Oxford',
      logo: '/images/partners/oxford.png',
      country: 'UK'
    },
    {
      id: 3,
      name: 'University of Toronto',
      logo: '/images/partners/toronto.png',
      country: 'Canada'
    },
    {
      id: 4,
      name: 'University of Melbourne',
      logo: '/images/partners/melbourne.png',
      country: 'Australia'
    },
    {
      id: 5,
      name: 'ETH Zurich',
      logo: '/images/partners/eth.png',
      country: 'Switzerland'
    },
    {
      id: 6,
      name: 'National University of Singapore',
      logo: '/images/partners/nus.png',
      country: 'Singapore'
    },
    {
      id: 7,
      name: 'Technical University of Munich',
      logo: '/images/partners/tum.png',
      country: 'Germany'
    },
    {
      id: 8,
      name: 'University of British Columbia',
      logo: '/images/partners/ubc.png',
      country: 'Canada'
    }
  ];

  // For auto-scrolling carousel effect
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const carousel = carouselRef.current;
    
    if (!carousel) return;
    
    const scroll = () => {
      if (scrollPosition >= carousel.scrollWidth / 2) {
        setScrollPosition(0);
        carousel.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        setScrollPosition(prev => prev + 1);
        carousel.scrollTo({ left: scrollPosition, behavior: 'auto' });
      }
    };
    
    const timer = setInterval(scroll, 30);
    
    return () => clearInterval(timer);
  }, [scrollPosition]);

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="section-title">Our University Partners</h2>
        <p className="section-description">
          We collaborate with prestigious institutions worldwide to provide you with the best global education opportunities.
        </p>
        
        <div className="partners-logo-container">
          <div className="logo-carousel" ref={carouselRef}>
            <div className="logos-track">
              {/* Display logos twice to create seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.id}-${index}`} className="logo-item">
                  <div className="logo-placeholder" aria-label={partner.name}>
                    {partner.name.charAt(0)}
                  </div>
                  <div className="partner-info">
                    <span className="partner-name">{partner.name}</span>
                    <span className="partner-country">{partner.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="partners-cta">
          <a href="/partners" className="view-all-btn">
            View All Partner Universities
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;