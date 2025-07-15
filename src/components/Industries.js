import React, { useEffect, useRef, useState } from 'react';
import './Industries.css';

import aerospaceImg from '../assets/Aerospace.png';
import engineeringImg from '../assets/Engineering.png';
import stampingImg from '../assets/metalstamping.png';
import clogo from '../assets/companylogo.png';

function useInViewAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function Industries() {
  const [headingRef, headingVisible] = useInViewAnimation();
  const [row1Ref, visible1] = useInViewAnimation();
  const [row2Ref, visible2] = useInViewAnimation();
  const [row3Ref, visible3] = useInViewAnimation();
  const [footerRef, visible4] = useInViewAnimation();

  return (
    <section className="industries">
      <h2 ref={headingRef} className={`section-heading animate ${headingVisible ? 'visible' : ''}`}>
        Industries We Serve
      </h2>

      <div className="industry-grid">
        <div ref={row1Ref} className={`industry-row animate ${visible1 ? 'visible' : ''}`}>
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

        <div ref={row2Ref} className={`industry-row orange-bg animate ${visible2 ? 'visible' : ''}`}>
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

        <div ref={row3Ref} className={`industry-row animate ${visible3 ? 'visible' : ''}`}>
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

      <div ref={footerRef} className={`orangebalck_bg animate ${visible4 ? 'visible' : ''}`}>
        <h2>Let’s Work Together — Built on Trust, Driven by Values</h2>
        <div className="industry-row">
          <div className="industry-content">
            <p>
              As a third-generation family-owned business, we believe in long-lasting
              partnerships built on integrity, craftsmanship, and commitment. With over
              30 years of experience, we’re ready to help you take your next project from
              concept to completion.
            </p>
            <button className="btn white">Get In Touch</button>
          </div>
          <img src={clogo} alt="Company Logo" className="industry-img" />
        </div>
      </div>
    </section>
  );
}
