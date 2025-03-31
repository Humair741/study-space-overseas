// src/App.jsx
import Header from './components/layout/Header';
import Hero from './components/features/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        {/* Other components will be added here */}
      </main>
    </div>
  );
}

export default App;