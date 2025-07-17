import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Landing from '../components/Landing';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.slide-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;