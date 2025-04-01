// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import ProgramsPage from './pages/ProgramsPage';
import ServicesPage from './pages/ServicesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ResourcesPage from './pages/ResourcesPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;