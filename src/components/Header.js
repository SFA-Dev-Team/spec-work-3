import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null); // 'who', 'approach', 'about'
  const [openSubmenu, setOpenSubmenu] = useState(null);   // 'company', 'acquisition'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const whoRef = useRef(null);
  const approachRef = useRef(null);
  const aboutRef = useRef(null);

  const toggleDropdown = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(prev => (prev === key ? null : key));
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (key) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenSubmenu(prev => (prev === key ? null : key));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        whoRef.current && !whoRef.current.contains(event.target) &&
        approachRef.current && !approachRef.current.contains(event.target) &&
        aboutRef.current && !aboutRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1016 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleScroll = () => {
      setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Adjust nav padding based on header height
  useEffect(() => {
    const nav = document.querySelector('.nav');
    if (mobileMenuOpen && headerRef.current && nav) {
      const headerHeight = headerRef.current.offsetHeight;
      nav.style.marginTop = `${headerHeight - 2}px`;
    } else if (nav) {
      nav.style.marginTop = '';
    }
  }, [mobileMenuOpen]);

  const closeDropdown = () => {
    setOpenDropdown(null);
    setOpenSubmenu(null);
  };

  const closeSubmenu = () => {
    setOpenSubmenu(null);
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="logo">
        <a href="/"><img src={logo} alt="Logo" /></a>
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href='/'>About Us</a>
        {/* Who We Are */}
        <div
          className="dropdown"
          ref={whoRef}
          onMouseLeave={closeDropdown}
        >
          <a href="/" onClick={toggleDropdown('who')} className={`dropbtn ${openDropdown === 'who' ? 'active' : ''}`}>
            Expertise
          </a>
          <div className={`dropdown-content ${openDropdown === 'who' ? 'show' : ''}`}>
            <div
              className="dropdown-submenu"
              onMouseLeave={closeSubmenu}
            >
            <a href="/" className="extra">Capabilities</a>
            <a href="/" className="extra">Projects</a>
            <a href="/" className="extra">Industries</a>
            </div>
          </div>
        </div>
        
        {/*

        <div
          className="dropdown"
          ref={approachRef}
          onMouseLeave={closeDropdown}
        >
          <a href="/" onClick={toggleDropdown('approach')} className={`dropbtn ${openDropdown === 'approach' ? 'active' : ''}`}>
            Our Approach
          </a>
          <div className={`dropdown-content ${openDropdown === 'approach' ? 'show' : ''}`}>
            <div
              className="dropdown-submenu"
              onMouseLeave={closeSubmenu}
            >
              <a href="/" onClick={toggleSubmenu('acquisition')} className={`dropbtn-submenu ${openSubmenu === 'acquisition' ? 'active' : ''}`}>
                The Acquisition Process <span className="arrow">{openSubmenu === 'acquisition' ? '▲' : '▼'}</span>
              </a>
              <div className={`dropdown-submenu-content ${openSubmenu === 'acquisition' ? 'show-submenu' : ''}`}>
                <a href="/">Investment Criteria</a>
              </div>
            </div>
            <a href="/" className="extra">Partnering with Management</a>
            <a href="/" className="extra">Long-Term Planning</a>
          </div>
        </div>


        <div
          className="dropdown"
          ref={aboutRef}
          onMouseLeave={closeDropdown}
        >
          <a href="/" onClick={toggleDropdown('about')} className={`dropbtn ${openDropdown === 'about' ? 'active' : ''}`}>
            About Us
          </a>
          <div className={`dropdown-content ${openDropdown === 'about' ? 'show' : ''}`}>
            <a href="/" className="extra">Our Portfolio</a>
            <a href="/" className="extra">Press-Release</a>
            <a href="/" className="extra">Contact Us</a>
          </div>
        </div> 
        */}

        <a href='/'>News</a>
        <a href="/">Contact Us</a>
      </nav>
    </header>
  );
}
