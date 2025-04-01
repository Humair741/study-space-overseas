import { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const faqs = [
    {
      id: 1,
      question: "How does Study Space Overseas help me find programs?",
      answer: "Our AI-powered platform analyzes your academic background, career goals, and preferences to suggest the most suitable overseas programs. We match you with universities and courses that align with your profile, ensuring better acceptance chances and career outcomes."
    },
    {
      id: 2,
      question: "Is there a fee for using your services?",
      answer: "Basic matching services and resources are completely free. For premium services like application assistance, document review, visa guidance, and personalized counseling, we offer affordable packages tailored to your needs. View our pricing page for detailed information."
    },
    {
      id: 3,
      question: "How accurate is your university matching algorithm?",
      answer: "Our algorithm is built on extensive data from successful placements and university requirements. It considers over 50 factors including academic scores, extracurricular activities, budget constraints, and career goals. Our match accuracy exceeds 90% for students who provide complete profile information."
    },
    {
      id: 4,
      question: "Can you help with scholarships and financial aid?",
      answer: "Yes! We identify scholarship opportunities you're eligible for based on your profile. Our premium services include scholarship application assistance, essay review, and connecting you with financial aid resources at your target institutions."
    },
    {
      id: 5,
      question: "How long does the application process typically take?",
      answer: "The timeline varies by country and program. Generally, we recommend starting 12-18 months before your intended enrollment date. Emergency applications can sometimes be processed in 2-3 months, but options may be limited. Our platform provides customized timelines based on your target programs."
    },
    {
      id: 6,
      question: "What if I'm not satisfied with my program matches?",
      answer: "You can refine your preferences and receive new matches anytime. If you're a premium member, you'll be assigned a personal education counselor who will work with you to understand your requirements better and provide tailored recommendations."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-description">
          Find answers to common questions about overseas education and our services.
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div className="faq-answer-container">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="more-questions">
          <p>Still have questions?</p>
          <a href="/contact" className="contact-link">Contact our team</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;