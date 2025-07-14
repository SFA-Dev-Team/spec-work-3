import React from 'react';
import './Industries.css';

// Replace these with your own image imports
import aerospaceImg from '../assets/Aerospace.png';
import engineeringImg from '../assets/Engineering.png';
import stampingImg from '../assets/metalstamping.png';
import clogo from '../assets/companylogo.png';

export default function Industries() {
  return (
    <section className="industries">
  <h2>Industries We Serve</h2>

  <div className="industry-grid">
    {/* Row 1: Text | Image */}
    <div className="industry-row">
        <img src={aerospaceImg} alt="Aerospace" className="industry-img" />
      <div className="industry-content">
        <h3>Aerospace</h3>
        <p>
          Our expert team has delivered high-precision aerospace components for both
          prototyping and production. From CNC-milled brackets to progressive
          die-stamped parts, we meet the industry’s toughest standards.
        </p>
        <button className="btn orange">Explore Projects</button>
      </div>
      
    </div>

    {/* Row 2: Image | Text */}
    <div className="industry-row orange-bg">
      
      <div className="industry-content">
        <h3>Engineering</h3>
        <p>
          From concept to completion, our engineering team provides robust design,
          prototyping, and production planning services—ensuring your vision becomes
          reality.
        </p>
        <button className="btn white">See Capabilities</button>
      </div>
      <img src={engineeringImg} alt="Engineering" className="industry-img" />
    </div>

    {/* Row 3: Text | Image */}
    <div className="industry-row">
        <img src={stampingImg} alt="Metal Stamping" className="industry-img" />
      <div className="industry-content">
        <h3>Metal Stamping</h3>
        <p>
          With over 40 years of metal stamping expertise, our press department can
          manufacture stamped parts from basic to highly complex with consistent
          accuracy.
        </p>
        <button className="btn orange">View Work</button>
      </div>
      
    </div>
  </div>
  <div className='orangebalck_bg'>
    <h2>Let’s Work Together — Built on Trust, Driven by Values</h2>
    <div className="industry-row ">
      
      <div className="industry-content">
        <p>
          As a third-generation family-owned business, we believe in long-lasting partnerships built on integrity, craftsmanship, and commitment. With over 30 years of experience, we’re ready to help you take your next project from concept to completion.
        </p>
        <button className="btn white">Get In Touch</button>
      </div>
      <img src={clogo} alt="Engineering" className="industry-img" />
    </div>

  </div>
</section>

  );
}