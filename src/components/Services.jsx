import { Code2, Smartphone, Brain, Cloud, Palette } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: Code2,
            title: 'Full Stack Web Development',
            description: 'End-to-end web solutions using modern frameworks like React, Next.js, Node.js, and cloud-native architectures.',
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
        },
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            description: 'Intelligent solutions powered by machine learning, natural language processing, and computer vision.',
        },
        {
            icon: Cloud,
            title: 'DevOps & Cloud Engineering',
            description: 'Scalable infrastructure on AWS, Azure, and GCP with CI/CD pipelines and container orchestration.',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'User-centered design with wireframing, prototyping, and design systems that drive engagement.',
        },
    ];

    return (
        <section id="services" className="services section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">What We Do</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-description">
                        We deliver comprehensive digital solutions tailored to your business needs,
                        from concept to deployment and beyond.
                    </p>
                </div>

                <div className="services__grid">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="services__card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="services__icon">
                                <service.icon size={28} />
                            </div>
                            <h3 className="services__title">{service.title}</h3>
                            <p className="services__description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
