import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's build something <span className="text-primary">extraordinary</span> together.</h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
                            Whether you have a specific project in mind or just want to chat about architecture and scalability, I'm always open to interesting conversations.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start space-x-6 group/item">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all cursor-pointer"
                                    onClick={() => {
                                        navigator.clipboard.writeText('swainabinash36@gmail.com');
                                        alert('Email copied to clipboard!');
                                    }}>
                                    <Mail size={24} />
                                </div>
                                <div className="cursor-pointer" onClick={() => navigator.clipboard.writeText('swainabinash36@gmail.com')}>
                                    <h4 className="font-bold text-lg mb-1">Email</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400 group-hover/item:text-primary transition-colors">swainabinash36@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Location</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400">Patia, Bhubaneswar, Odisha, India, 751024</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6 group/item">
                                <div className="p-4 bg-emerald-500/10 rounded-2xl text-emerald-500 group-hover/item:bg-emerald-500 group-hover/item:text-white transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                </div>
                                <div className="cursor-pointer" onClick={() => navigator.clipboard.writeText('6370083077')}>
                                    <h4 className="font-bold text-lg mb-1">Mobile</h4>
                                    <p className="text-neutral-600 dark:text-neutral-400 group-hover/item:text-primary transition-colors">+91 6370083077</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            {[
                                { icon: <Github size={20} />, href: '#' },
                                { icon: <Linkedin size={20} />, href: '#' },
                                { icon: <Twitter size={20} />, href: '#' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all border border-transparent hover:border-primary/20"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 lg:p-12 glass-card rounded-[2.5rem] shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Send size={120} className="-rotate-12" />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                    placeholder="John Doe"
                                    className="w-full px-6 py-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-6 py-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-neutral-500">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full px-6 py-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSent}
                                className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 shadow-lg shadow-primary/20 active:scale-95 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : isSent ? (
                                    "Message Sent!"
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>

                            {isSent && (
                                <p className="text-center text-primary font-medium mt-4">
                                    Thank you! I'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
