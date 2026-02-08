import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Menu, X, Sun, Moon } from 'lucide-react';

import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
=======
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
<<<<<<< HEAD

=======
>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

<<<<<<< HEAD
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
=======
  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
          <span className="navbar__logo-text">Blancos</span>
          <span className="navbar__logo-accent">HQ</span>
        </a>

<<<<<<< HEAD
        {/* Desktop Links */}
=======
>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

<<<<<<< HEAD
        {/* Theme Toggle */}
        <button
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta btn btn-primary"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Get in Touch
        </a>

        {/* Mobile Toggle */}
=======
        <a href="#contact" className="navbar__cta btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
          Get in Touch
        </a>

>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
<<<<<<< HEAD
      <div
        className={`navbar__mobile-menu ${
          isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''
        }`}
      >
=======
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
<<<<<<< HEAD

        {/* Mobile Theme Toggle */}
        <button
          className="navbar__theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <a
          href="#contact"
          className="btn btn-primary"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
=======
        <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
>>>>>>> 275d8dbc3da36f9e10a517598cb5408dcb6e3816
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
