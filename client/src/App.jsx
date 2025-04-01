// src/App.jsx
import Header from './components/layout/Header';
import Hero from './components/features/Hero';
import FeaturesSection from './components/features/FeaturesSection';
import DestinationsSection from './components/features/DestinationsSection';
import AIFeaturesSection from './components/features/AIFeaturesSection';
import TestimonialsSection from './components/features/TestimonialsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <FeaturesSection />
        <DestinationsSection />
        <AIFeaturesSection />
        <TestimonialsSection />
        {/* Other components will be added here */}
      </main>
    </div>
  );
}

export default App;