import { Linkedin, Github, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    ];

    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Careers', href: '#careers' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <a href="#home" className="footer__logo" onClick={(e) => handleClick(e, '#home')}>
                            <span className="footer__logo-text">Blancos</span>
                            <span className="footer__logo-accent">HQ</span>
                        </a>
                        <p className="footer__tagline">
                            Building Future-Ready Digital Solutions
                        </p>
                    </div>

                    <nav className="footer__nav">
                        <h4 className="footer__nav-title">Quick Links</h4>
                        <ul className="footer__nav-list">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="footer__nav-link"
                                        onClick={(e) => handleClick(e, link.href)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer__social-section">
                        <h4 className="footer__nav-title">Follow Us</h4>
                        <div className="footer__social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} Blancos HQ. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <a href="#" className="footer__legal-link">Privacy Policy</a>
                        <a href="#" className="footer__legal-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
