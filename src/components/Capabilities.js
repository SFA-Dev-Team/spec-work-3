import React from 'react';
import './Capabilities.css';

export default function Capabilities() {
  return (
    <section className="capabilities">
      <h2>Our Capabilities</h2>
      <div className="capability-grid">
        <div className="capability-box orange">
          <h3>Custom Tool & Die Solutions</h3>
          <p>
            With over 50 years of precision expertise, we design and build innovative tooling solutions to meet the most demanding specifications.
          </p>
        </div>
        <div className="capability-box gray">
          <h3>Progressive Metal Stamping</h3>
          <p>
            We specialize in long-term, low-to-medium volume stamping with prototyping, storage, and full contract manufacturing capabilities.
          </p>
        </div>
        <div className="capability-box gray">
          <h3>Precision & Specialty Services</h3>
          <p>
            With over 50 years of precision expertise, we design and build innovative tooling solutions to meet the most demanding specifications.
          </p>
        </div>
        <div className="capability-box orange">
          <h3>Precision Contract Machining</h3>
          <p>
            From concept to completion, explore examples of our tailored machining solutions that deliver accuracy and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
