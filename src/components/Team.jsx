import { useState, useEffect } from 'react';
import { Github, Linkedin, User, X, Download, GraduationCap, Briefcase, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './Team.css';

const teamMembers = [
    {
        name: 'Syed Khadeen',
        role: 'Backend Architect',
        expertise: 'AI Integration, Cloud Infrastructure, Database Design, Asp.net, Backend development, AWS, Azure, GCP',
        bio: 'Syed is a seasoned Backend Architect with a deep passion for building scalable AI-integrated systems. He specializes in designing robust cloud infrastructures and complex database architectures that power modern enterprises.',
        education: 'FAST NUCES - Bachelor of Computer Science',
        experience: [
            'Lead Backend Architect at Blancos HQ',
            'Designed scalable AI pipelines for multinational fintech clients',
            'Architected distributed systems handling millions of daily requests'
        ],
        techStack: ['Asp.net', 'C#', 'PostgreSQL', 'AWS', 'Azure', 'GCP', 'OpenAI API', 'Docker', 'Kubernetes'],
        image: 'https://ui-avatars.com/api/?name=Syed+Khadeen&background=random&size=400',
        cvLink: '/cvs/syed-khadeen-cv.pdf',
        socials: {
            github: '#',
            linkedin: '#',
            profile: '#'
        }
    },
    {
        name: 'Abdul Azeem',
        role: 'Full Stack Developer',
        expertise: 'React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Typescript',
        bio: 'Abdul is a versatile Full Stack Developer who excels at creating seamless user experiences. From pixel-perfect frontends to performant backends, he bridges the gap between design and functionality.',
        education: 'FAST NUCES - Bachelor of Computer Science',
        experience: [
            'Senior Full Stack Developer at Blancos HQ',
            'Developed end-to-end e-commerce platforms with Next.js',
            'Optimized data processing engines reducing latency by 40%'
        ],
        techStack: ['React', 'Next.js', 'Node.js', 'Typescript', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'],
        image: 'https://ui-avatars.com/api/?name=Abdul+Azeem&background=random&size=400',
        cvLink: '/cvs/abdul-azeem-cv.pdf',
        socials: {
            github: '#',
            linkedin: '#',
            profile: '#'
        }
    },
    {
        name: 'Iqramah Shah',
        role: 'Full Stack Developer',
        expertise: 'Express js, Node.js, Database Design, MERN Stack, React, Next.js, Tailwind CSS, Typescript',
        bio: 'Iqramah is a results-driven developer specializing in the MERN stack. He has a proven track record of building performant web applications that scale, with a focus on clean code and maintainability.',
        education: 'FAST NUCES - Bachelor of Computer Science',
        experience: [
            'Full Stack Developer at Blancos HQ',
            'Built custom content management systems for growing startups',
            'Implemented real-time collaboration features using WebSockets'
        ],
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Typescript', 'Socket.io', 'Redux'],
        image: 'https://ui-avatars.com/api/?name=Iqramah+Shah&background=random&size=400',
        cvLink: '/cvs/iqramah-shah-cv.pdf',
        socials: {
            github: '#',
            linkedin: '#',
            profile: '#'
        }
    }
];

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedMember(null);
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (selectedMember !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedMember]);

    return (
        <section id="team" className="section team">
            <div className="container">
                <div className="section-header animate-fadeInUp">
                    <span className="section-subtitle">Meet The Team</span>
                    <h2 className="section-title">The Minds Behind Blancos</h2>
                    <p className="section-description">
                        A passionate group of experts dedicated to delivering digital excellence.
                    </p>
                </div>

                <div className="team__grid">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="team__card animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.2}s` }}
                            onClick={() => setSelectedMember(index)}
                        >
                            <div className="team__card-inner">
                                <div className="team__image-wrapper">
                                    <img src={member.image} alt={member.name} className="team__image" />
                                </div>
                                <div className="team__content">
                                    <h3 className="team__name">{member.name}</h3>
                                    <span className="team__role">{member.role}</span>
                                    <div className="team__divider"></div>
                                    <p className="team__expertise">{member.expertise}</p>

                                    <div className="team__socials">
                                        <button className="team__social-btn" aria-label="GitHub">
                                            <Github size={18} />
                                        </button>
                                        <button className="team__social-btn" aria-label="LinkedIn">
                                            <Linkedin size={18} />
                                        </button>
                                        <button className="team__social-btn" aria-label="More Info">
                                            <User size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedMember !== null && (
                    <motion.div
                        className="team__modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                    >
                        <motion.div
                            className="team__modal"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="team__modal-close"
                                onClick={() => setSelectedMember(null)}
                            >
                                <X size={24} />
                            </button>

                            <div className="team__modal-content">
                                <div className="team__modal-image-col">
                                    <div className="team__modal-img-container">
                                        <img
                                            src={teamMembers[selectedMember].image}
                                            alt={teamMembers[selectedMember].name}
                                            className="team__modal-img"
                                        />
                                    </div>
                                    <div className="team__modal-socials">
                                        <a href={teamMembers[selectedMember].socials.github} className="team__social-btn" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                                        <a href={teamMembers[selectedMember].socials.linkedin} className="team__social-btn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                                    </div>
                                </div>

                                <div className="team__modal-details">
                                    <div className="team__modal-header">
                                        <h3 className="team__modal-name">{teamMembers[selectedMember].name}</h3>
                                        <span className="team__modal-role">{teamMembers[selectedMember].role}</span>
                                    </div>

                                    <div className="team__modal-scroll">
                                        <div className="team__modal-section">
                                            <p className="team__modal-bio">{teamMembers[selectedMember].bio}</p>
                                        </div>

                                        <div className="team__modal-section">
                                            <h4 className="team__modal-subtitle">
                                                <GraduationCap size={18} className="text-accent" />
                                                Education
                                            </h4>
                                            <p className="team__modal-edu">{teamMembers[selectedMember].education}</p>
                                        </div>

                                        <div className="team__modal-section">
                                            <h4 className="team__modal-subtitle">
                                                <Code size={18} className="text-accent" />
                                                Tech Stack
                                            </h4>
                                            <div className="team__tech-list">
                                                {teamMembers[selectedMember].techStack.map(tech => (
                                                    <span key={tech} className="team__tech-badge">{tech}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="team__modal-section">
                                            <h4 className="team__modal-subtitle">
                                                <Briefcase size={18} className="text-accent" />
                                                Experience & Impact
                                            </h4>
                                            <ul className="team__exp-list">
                                                {teamMembers[selectedMember].experience.map((exp, i) => (
                                                    <li key={i} className="team__exp-item">{exp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="team__modal-footer">
                                        <a
                                            href={teamMembers[selectedMember].cvLink}
                                            download
                                            className="btn btn-primary team__cv-btn"
                                        >
                                            <Download size={18} />
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Team;
