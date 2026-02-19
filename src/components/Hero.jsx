import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';
import CountUp from './CountUp';

import Typewriter from './Typewriter';

const Hero = () => {
    const handleScroll = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero__bg"></div>
            <div className="hero__content container">
                <div className="hero__badge animate-fadeInUp">
                    <span className="hero__badge-dot"></span>
                    Crafting Digital Excellence
                </div>

                <h1 className="hero__title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    Building Future-Ready<br />
                    <span className="hero__title-accent">
                        <Typewriter
                            phrases={[
                                "Web Solutions",
                                "App Solutions",
                                "Data Science",
                                "Artificial Intelligence",
                                "DevOps",
                                "Digital Solutions"
                            ]}
                        />
                    </span>
                </h1>

                <p className="hero__subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    Web Development • App Development • AI/ML • DevOps • Cloud Solutions
                </p>

                <p className="hero__description animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                    We transform ambitious ideas into scalable digital products with precision engineering
                    and modern technology stack.
                </p>

                <div className="hero__cta animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    <button className="btn btn-primary" onClick={() => handleScroll('#projects')}>
                        Our Work
                        <ArrowRight size={18} />
                    </button>
                    <button className="btn btn-secondary" onClick={() => handleScroll('#contact')}>
                        Get in Touch
                    </button>
                </div>

                <div className="hero__stats animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <div className="hero__stat">
                        <span className="hero__stat-value">
                            <CountUp end={6} suffix="+" />
                        </span>
                        <span className="hero__stat-label">Projects Delivered</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-value">
                            <CountUp end={77} suffix="%" />
                        </span>
                        <span className="hero__stat-label">Client Satisfaction</span>
                    </div>
                    <div className="hero__stat-divider"></div>
                    <div className="hero__stat">
                        <span className="hero__stat-value">24/7</span>
                        <span className="hero__stat-label">Dedicated Support</span>
                    </div>
                </div>
            </div>

            <button className="hero__scroll" onClick={() => handleScroll('#about')} aria-label="Scroll down">
                <ChevronDown size={24} />
            </button>
        </section>
    );
};

export default Hero;
