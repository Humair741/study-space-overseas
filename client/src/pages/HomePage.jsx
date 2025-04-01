// src/pages/HomePage.jsx
import Hero from '../components/features/Hero';
import FeaturesSection from '../components/features/FeaturesSection';
import DestinationsSection from '../components/features/DestinationsSection';
import AIFeaturesSection from '../components/features/AIFeaturesSection';
import TestimonialsSection from '../components/features/TestimonialsSection';
import PartnersSection from '../components/features/PartnersSection';
import FAQSection from '../components/features/FAQSection';
import CTASection from '../components/features/CTASection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <DestinationsSection />
      <AIFeaturesSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default HomePage;