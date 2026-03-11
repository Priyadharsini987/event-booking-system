import React from 'react';
import ceoPhoto from '../assets/arjun.jpeg';
import '../styles/Components.css';

const About = () => (
  <section id="about">
    <div className="pookie-card about-card">
      {/* Text content */}
      <div className="about-text">
        <h4>LEADERSHIP</h4>
        <h2>MR. ARJUN</h2>
        <p>CEO of Eagle Entertainment 🦅</p>

        <div className="about-feature">
          <h3>Creative Solutions</h3>
          <p>We're constantly pushing boundaries to create innovative and engaging experiences.</p>
        </div>

        <div className="about-feature">
          <h3>Reliable Execution</h3>
          <p>Meticulous attention to detail ensures events run smoothly and flawlessly.</p>
        </div>
      </div>

      {/* Image content */}
      <div className="about-image-container">
        <div className="image-border"></div>
        <img src={ceoPhoto} alt="Mr. Arjun" className="ceo-img" />
      </div>
    </div>
  </section>
);

export default About;
