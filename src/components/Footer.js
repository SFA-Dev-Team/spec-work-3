import './Footer.css';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-row">
          <div className="left-column">
            <div id="logo">
              <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
            <div id="d3">
              <p>67 Enterprise Dr.</p>
              <p>Monroe, CT 06468</p>
              <p>Phone: 203-880-9485 | Monday – Friday</p>
              <p>Email: info@bmltool.com </p>
            </div>
          </div>
          <div id="links">
            <p><a href=''>About Us</a></p>
            <p><a href=''>Expertise</a></p>
            <p><a href=''>News</a></p>
            <p><a href=''>Contact Us</a></p>
            <p><a href=''>Careers</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 BML Tools. All rights reserved.</p>
      </div>
    </footer>
  );
}
