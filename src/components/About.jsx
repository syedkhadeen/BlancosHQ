import { useState } from 'react';
import { Target, Lightbulb, Users, ChevronDown } from 'lucide-react';
import CountUp from './CountUp';
import './About.css';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Obsessive Ownership',
            description: 'We don’t just write code; we take ownership of the outcome. Your product is our product, and we sweat the details so you don’t have to.',
        },
        {
            icon: Lightbulb,
            title: 'Radical Transparency',
            description: 'No black boxes. No jargon. You see what we see. We believe in open communication and building trust through total visibility.',
        },
        {
            icon: Users,
            title: 'Users First',
            description: 'Technology is useless if it doesn’t solve human problems. We build with empathy, ensuring every interaction feels intuitive and seamless.',
        },
    ];

    const [activeAccordion, setActiveAccordion] = useState(0);

    const reasons = [
        {
            title: 'Direct Engineering Collaboration',
            description: 'Work directly with the people building your product. No middle managers, no game of telephone. You get direct access to technical expertise.'
        },
        {
            title: 'Production-Ready Standards',
            description: 'We don’t build prototypes that need rewriting. We build scalable, secure, and maintainable systems from the first line of code.'
        },
        {
            title: 'Scalable Architecture',
            description: 'Our solutions are designed to grow with you. We anticipate future bottlenecks and build resilient systems that handle success.'
        },
        {
            title: 'Clear Communication',
            description: 'We speak your language. Whether discussing API endpoints or business KPIs, we ensure total clarity and alignment at every step.'
        },
    ];

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__header">
                    <span className="section-subtitle">Who We Are</span>
                    <h2 className="section-title text-gradient">Not Just An Agency.<br />Your Technical Co-Founders.</h2>
                </div>

                <div className="about__content">
                    <div className="about__text">
                        <p className="about__description">
                            We are Blancos HQ. We’re a team of product-focused engineers, designers, and strategists who believe that
                            <strong> software should feel like magic</strong>.
                        </p>
                        <p className="about__description">
                            Most agencies build what you ask for. We build what you need. We bridge the gap between
                            vision and execution, turning complex problems into elegant, scalable solutions. Whether
                            you're a startup looking for velocity or an enterprise seeking transformation, we bring
                            the engineering muscle and design soul to make it happen.
                        </p>

                        <div className="about__why-us">
                            <h3 className="about__subsection-title">Why Teams Choose Blancos HQ</h3>
                            <div className="about__accordion">
                                {reasons.map((reason, index) => (
                                    <div
                                        key={index}
                                        className={`about__accordion-item ${activeAccordion === index ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="about__accordion-header">
                                            <span className="about__accordion-title">{reason.title}</span>
                                            <span className="about__accordion-icon">
                                                <ChevronDown size={20} />
                                            </span>
                                        </div>
                                        <div className="about__accordion-content">
                                            <p className="about__accordion-description">{reason.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-value">
                                    <CountUp end={5} suffix="+" />
                                </span>
                                <span className="about__stat-label">Years Experience</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">
                                    <CountUp end={30} suffix="+" />
                                </span>
                                <span className="about__stat-label">Team Members</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">
                                    <CountUp end={100} suffix="+" />
                                </span>
                                <span className="about__stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__values">
                        {values.map((value) => (
                            <div key={value.title} className="about__value glow-card">
                                <div className="about__value-icon">
                                    <value.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="about__value-title">{value.title}</h3>
                                    <p className="about__value-description">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
