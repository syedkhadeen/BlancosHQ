import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@blancoshq.com',
            href: 'mailto:hello@blancoshq.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            href: 'tel:+15551234567',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'San Francisco, CA',
            href: '#',
        },
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Get in Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-description">
                        Have a project in mind? Let's discuss how we can help bring your
                        vision to life.
                    </p>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <h3 className="contact__info-title">Let's Start a Conversation</h3>
                        <p className="contact__info-description">
                            Whether you have a question about our services, pricing, or anything
                            else, our team is ready to answer all your questions.
                        </p>

                        <div className="contact__details">
                            {contactInfo.map((info) => (
                                <a key={info.label} href={info.href} className="contact__detail">
                                    <div className="contact__detail-icon">
                                        <info.icon size={20} />
                                    </div>
                                    <div>
                                        <span className="contact__detail-label">{info.label}</span>
                                        <span className="contact__detail-value">{info.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        {isSubmitted && (
                            <div className="contact__success">
                                <CheckCircle size={20} />
                                Thank you! We'll get back to you soon.
                            </div>
                        )}

                        <div className="contact__form-row">
                            <div className="contact__form-group">
                                <label htmlFor="name" className="contact__label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="contact__input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="contact__form-group">
                                <label htmlFor="email" className="contact__label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="contact__input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="subject" className="contact__label">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="contact__input"
                                placeholder="How can we help?"
                                required
                            />
                        </div>

                        <div className="contact__form-group">
                            <label htmlFor="message" className="contact__label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="contact__textarea"
                                placeholder="Tell us about your project..."
                                rows={5}
                                required
                            />
                        </div>

                        <button type="submit" className="contact__submit btn btn-primary">
                            Send Message
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
