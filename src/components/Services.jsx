import React from 'react';
import '../styles/Components.css';

const Services = () => {
  const list = [
    { title: "Corporate Events ✨", desc: "From conferences and product launches to team building. We ensure an impactful experience." },
    { title: "Weddings 💍", desc: "Creating personalized ceremonies and receptions reflecting your unique love story." },
    { title: "Social Events 🤍", desc: "Expertise to plan and execute unforgettable experiences for events of all sizes and budgets." }
  ];

  return (
    <section id="services">
      <h2>Our Expertise</h2>
      <div className="services-grid">
        {list.map((item, i) => (
          <div key={i} className="pookie-card service-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
