import './Hero.css';
import heroImage from '../assets/back.jpg'; // replace with your image

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
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
