import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'FinanceFlow',
            description: 'A comprehensive financial management platform with real-time analytics, automated reporting, and AI-powered insights.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
            tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'HealthSync',
            description: 'Telemedicine platform connecting patients with healthcare providers through video consultations and health monitoring.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
            tags: ['React Native', 'Firebase', 'WebRTC', 'ML'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'EcoTrack',
            description: 'Sustainability tracking application for enterprises to monitor and reduce their carbon footprint with actionable insights.',
            image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600&h=400&fit=crop',
            tags: ['Next.js', 'Python', 'TensorFlow', 'GCP'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'LogiChain',
            description: 'Blockchain-based supply chain management system providing end-to-end visibility and smart contract automation.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
            tags: ['Solidity', 'React', 'Node.js', 'Ethereum'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'LearnHub',
            description: 'Interactive e-learning platform with personalized learning paths, progress tracking, and gamification elements.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
            tags: ['Vue.js', 'Django', 'MongoDB', 'Redis'],
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            title: 'SmartRetail',
            description: 'AI-powered retail analytics platform with inventory optimization, demand forecasting, and customer behavior analysis.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            tags: ['Python', 'TensorFlow', 'React', 'Azure'],
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">
                        Explore our portfolio of successful projects that have helped businesses
                        transform and scale.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="projects__card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="projects__image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="projects__image"
                                />
                                <div className="projects__overlay">
                                    <a href={project.liveUrl} className="projects__link" aria-label="View live">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl} className="projects__link" aria-label="View code">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                            <div className="projects__content">
                                <h3 className="projects__title">{project.title}</h3>
                                <p className="projects__description">{project.description}</p>
                                <div className="projects__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="projects__tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
