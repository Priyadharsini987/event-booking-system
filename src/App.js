import React from 'react';
import './styles/Global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Decorative success partner bar */}
      <div style={{ 
        background: 'var(--soft-blush)', 
        padding: '25px', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        letterSpacing: '4px',
        fontSize: '0.8rem'
      }}>
        ✦ PLANNING ✦ PRODUCTION ✦ MARKETING
      </div>
      <Services />
      <About />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;