import { useEffect, useState } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Projects from './components/Projects';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LoadingScreen from './components/LoadingScreen';
import SplashCursor from './components/SplashCursor';
import LightRays from './components/LightRays';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Load saved theme or default to dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme to <html> and persist it
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <SplashCursor />
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
          }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#ffffff"
              raysSpeed={1}
              lightSpread={0.5}
              rayLength={3}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0}
              distortion={0}
              pulsating={false}
              fadeDistance={1}
              saturation={1}
            />
          </div>
          <Navbar theme={theme} setTheme={setTheme} />
          <main>
            <Hero />
            <About />
            <Team />
            <Services />
            <Projects />
            <Careers />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
