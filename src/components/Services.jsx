import { useState } from 'react';
import { Code2, Smartphone, Brain, Cloud, Palette, Rocket, ChevronDown } from 'lucide-react';

import './Services.css';

const Services = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCard = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const services = [
        {
            icon: Code2,
            title: 'Full Stack Web Development',
            description: 'End-to-end web solutions using modern frameworks like React, Next.js, Node.js, and cloud-native architectures.',
            techStacks: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'TypeScript'],
            details: 'We architect scalable, performant web applications from frontend to backend. Our stack includes server-side rendering, static site generation, RESTful & GraphQL APIs, microservices architecture, and real-time data with WebSockets. Every project ships with CI/CD pipelines and automated testing.',
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
            techStacks: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo', 'Redux', 'Dart'],
            details: 'From concept to App Store, we build high-performance mobile experiences. We handle push notifications, offline-first architecture, native module integration, in-app purchases, and deep linking. Our apps are optimized for battery life, memory usage, and smooth 60fps animations.',
        },
        {
            icon: Brain,
            title: 'AI & Machine Learning',
            description: 'Intelligent solutions powered by machine learning, natural language processing, and computer vision.',
            techStacks: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Hugging Face', 'scikit-learn', 'CUDA'],
            details: 'We build production-grade AI systems including LLM-powered chatbots, recommendation engines, image recognition pipelines, predictive analytics, and RAG-based knowledge systems. Every model is fine-tuned, evaluated, and deployed with monitoring and A/B testing.',
        },
        {
            icon: Cloud,
            title: 'DevOps & Cloud Engineering',
            description: 'Scalable infrastructure on AWS, Azure, and GCP with CI/CD pipelines and container orchestration.',
            techStacks: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Jenkins', 'Nginx', 'Linux'],
            details: 'We design infrastructure that scales automatically and costs less. Our expertise covers container orchestration, infrastructure-as-code, blue-green deployments, monitoring with Prometheus & Grafana, secrets management, and zero-downtime releases across multi-cloud environments.',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'User-centered design with wireframing, prototyping, and design systems that drive engagement.',
            techStacks: ['Figma', 'Adobe XD', 'Framer', 'Storybook', 'Tailwind CSS', 'GSAP', 'Lottie', 'Sass'],
            details: 'We create intuitive interfaces grounded in user research and accessibility standards. Our process includes competitive analysis, user personas, wireframing, interactive prototyping, usability testing, and comprehensive design systems with reusable component libraries.',
        },
        {
            icon: Rocket,
            title: 'Workflow Automation',
            description: 'Streamlining business processes with intelligent automation and seamless integrations.',
            techStacks: ['Zapier', 'n8n', 'Python', 'Node.js', 'REST APIs', 'Webhooks', 'Cron', 'Redis'],
            details: 'We eliminate manual bottlenecks by building custom automation pipelines. From CRM integrations and email workflows to data ETL processes and scheduled reporting, we connect your tools and automate repetitive tasks so your team can focus on what matters.',
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
                            className={`services__card card glow-service-card ${expandedCard === index ? 'services__card--expanded' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => toggleCard(index)}
                        >
                            <div className="services__card-header">
                                <div className="services__icon">
                                    <service.icon size={28} />
                                </div>
                                <ChevronDown
                                    size={20}
                                    className={`services__expand-icon ${expandedCard === index ? 'services__expand-icon--rotated' : ''}`}
                                />
                            </div>
                            <h3 className="services__title">{service.title}</h3>
                            <p className="services__description">{service.description}</p>

                            <div className={`services__expanded-content ${expandedCard === index ? 'services__expanded-content--visible' : ''}`}>
                                <div className="services__divider" />
                                <p className="services__details">{service.details}</p>
                                <div className="services__tech-stacks">
                                    {service.techStacks.map((tech) => (
                                        <span key={tech} className="services__tech-tag">{tech}</span>
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

export default Services;
