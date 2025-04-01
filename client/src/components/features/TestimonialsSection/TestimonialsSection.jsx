import { useState } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      university: 'University of Toronto, Canada',
      program: 'Masters in Computer Science',
      image: '/images/testimonials/student1.jpg',
      quote: 'Study Space Overseas matched me with my dream program at the University of Toronto. Their AI recommendations were spot-on and saved me countless hours of research.',
      rating: 5
    },
    {
      id: 2,
      name: 'Rajiv Patel',
      university: 'University of Melbourne, Australia',
      program: 'Bachelor of Business',
      image: '/images/testimonials/student2.jpg',
      quote: 'The application process seemed overwhelming until I found Study Space Overseas. Their step-by-step guidance made everything manageable and I got accepted to my top choice!',
      rating: 5
    },
    {
      id: 3,
      name: 'Maria Gonzalez',
      university: 'Imperial College London, UK',
      program: 'PhD in Biomedical Engineering',
      image: '/images/testimonials/student3.jpg',
      quote: 'The personalized attention I received was incredible. They helped me secure a scholarship that made my international education dream possible.',
      rating: 5
    },
    {
      id: 4,
      name: 'Thomas Lee',
      university: 'Technical University of Munich, Germany',
      program: 'Masters in Mechanical Engineering',
      image: '/images/testimonials/student4.jpg',
      quote: 'Studying in Germany seemed complicated due to the language barrier, but Study Space Overseas provided all the resources I needed, from visa guidance to language preparation.',
      rating: 4
    }
  ];

  // For simple slider functionality
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const showPrevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Create star rating display
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>★</span>
      );
    }
    return <div className="star-rating">{stars}</div>;
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-description">
          Hear from students who found their perfect educational path with Study Space Overseas.
        </p>

        <div className="testimonial-slider">
          <button 
            className="slider-arrow prev" 
            onClick={showPrevTestimonial}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-mark">"</div>
              <p className="testimonial-quote">{activeTestimonial.quote}</p>
              {renderStars(activeTestimonial.rating)}
            </div>
            <div className="testimonial-author">
              <div className="author-image-container">
                <div 
                  className="author-image-placeholder"
                  aria-label={`Photo of ${activeTestimonial.name}`}
                >
                  {activeTestimonial.name.charAt(0)}
                </div>
              </div>
              <div className="author-info">
                <h3 className="author-name">{activeTestimonial.name}</h3>
                <p className="author-program">{activeTestimonial.program}</p>
                <p className="author-university">{activeTestimonial.university}</p>
              </div>
            </div>
          </div>

          <button 
            className="slider-arrow next" 
            onClick={showNextTestimonial}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;