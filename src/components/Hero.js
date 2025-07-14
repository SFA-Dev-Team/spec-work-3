import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import heroImage from '../assets/back.jpg';

export default function Hero() {
  const heroRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animation
          setShouldAnimate(true);
        } else {
          // Reset animation when out of view
          setShouldAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      ref={heroRef}
    >
      <div className="overlay"></div>
      <div className={`hero-content ${shouldAnimate ? 'fade-in' : ''}`}>
        <h1>The Foundation of Quality Manufacturing</h1>
        <p>Expert Machining and Manufacturing for Critical Applications</p>
        <div className="hero-buttons">
          <button className="btn learn-more">Learn More</button>
          <button className="btn contact-us">Contact Us</button>
        </div>
      </div>
    </section>
  );
}
