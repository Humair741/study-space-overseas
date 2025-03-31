import Header from './components/layout/Header';
import Hero from './components/features/Hero';
import FeaturesSection from './components/features/FeaturesSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <FeaturesSection />
        {/* Other components will be added here */}
      </main>
    </div>
  );
}

export default App;