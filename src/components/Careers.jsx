import { Briefcase, MapPin, Clock } from 'lucide-react';
import './Careers.css';

const Careers = () => {
    const positions = [
        {
            title: 'Senior Full Stack Developer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Engineering',
        },
        {
            title: 'ML/AI Engineer',
            type: 'Full-time',
            location: 'Hybrid',
            department: 'AI Team',
        },
        {
            title: 'UI/UX Designer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Design',
        },
        {
            title: 'DevOps Engineer',
            type: 'Full-time',
            location: 'Remote',
            department: 'Infrastructure',
        },
    ];

    return (
        <section id="careers" className="careers section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Join Our Team</span>
                    <h2 className="section-title">Careers at Blancos HQ</h2>
                    <p className="section-description">
                        We're always looking for talented individuals who share our passion for
                        building exceptional digital products.
                    </p>
                </div>

                <div className="careers__grid">
                    {positions.map((position) => (
                        <div key={position.title} className="careers__card card">
                            <div className="careers__header">
                                <span className="careers__department">{position.department}</span>
                                <h3 className="careers__title">{position.title}</h3>
                            </div>
                            <div className="careers__meta">
                                <span className="careers__meta-item">
                                    <Clock size={16} />
                                    {position.type}
                                </span>
                                <span className="careers__meta-item">
                                    <MapPin size={16} />
                                    {position.location}
                                </span>
                            </div>
                            <a href="#contact" className="careers__apply btn btn-secondary">
                                <Briefcase size={16} />
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>

                <div className="careers__cta">
                    <p className="careers__cta-text">
                        Don't see a position that fits? We'd still love to hear from you.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Careers;
