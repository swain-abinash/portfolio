import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Architecting <span className="text-primary">Simple Solutions</span> to Complex Problems
                        </h2>
                        <div className="space-y-6 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                            <p>
                                As a Full Stack Developer with over 3 years of experience, I specialize in building robust,
                                scalable web applications that provide real business value. My approach is centered around
                                performance, accessibility, and maintainable code.
                            </p>
                            <p>
                                Currently, I focus on the React ecosystem and cloud-native architectures. I believe that
                                building quality software isn't just about knowing a framework, but about understanding the trade-offs
                                involved in every technical decision and mentoring others to grow.
                            </p>
                            <p>
                                My philosophy is simple: build systems that are easy to understand, even when they handle
                                millions of users. I thrive in collaborative environments where engineering excellence
                                meets user-centric design.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Full-stack architecture design",
                                "Cloud infrastructure (AWS)",
                                "API design & implementation",
                                "Performance optimization",
                                "Team mentorship",
                                "CI/CD pipeline setup"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="font-medium text-neutral-900 dark:text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-primary/20 bg-neutral-100 dark:bg-neutral-800 relative z-10 group shadow-2xl">
                            <img
                                src="/images/profile.png"
                                alt="Full Stack Developer"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-1000" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
