import { Target, Lightbulb, Users } from 'lucide-react';
import './About.css';

const About = () => {
    const values = [
        {
            icon: Target,
            title: 'Our Mission',
            description: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.',
        },
        {
            icon: Lightbulb,
            title: 'Our Vision',
            description: 'To be the leading technology partner for forward-thinking companies, known for delivering excellence and transformative digital experiences.',
        },
        {
            icon: Users,
            title: 'Our Values',
            description: 'Innovation, integrity, and collaboration are at the core of everything we do. We believe in building lasting partnerships with our clients.',
        },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about__content">
                    <div className="about__text">
                        <span className="section-subtitle">Who We Are</span>
                        <h2 className="section-title">About Blancos HQ</h2>
                        <p className="about__description">
                            We are a team of passionate engineers, designers, and strategists dedicated to
                            building exceptional digital products. Founded with the vision of bridging the
                            gap between ideas and execution, we've grown into a full-service technology
                            partner for startups and enterprises alike.
                        </p>
                        <p className="about__description">
                            With expertise spanning web development, mobile applications, AI/ML, and cloud
                            infrastructure, we bring a holistic approach to every project. Our commitment
                            to quality, innovation, and client success has made us a trusted partner for
                            businesses looking to scale and transform.
                        </p>
                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-value">5+</span>
                                <span className="about__stat-label">Years Experience</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">30+</span>
                                <span className="about__stat-label">Team Members</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-value">100+</span>
                                <span className="about__stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="about__values">
                        {values.map((value) => (
                            <div key={value.title} className="about__value card">
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
