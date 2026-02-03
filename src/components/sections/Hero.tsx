import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark to-background-dark" />
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 blur-3xl pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full" />
            </div>

            <div className="container-custom relative z-10 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                                <Terminal size={14} />
                                <span>Available for new opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]">
                                Full Stack <span className="text-primary">Developer</span>
                            </h1>

                            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl leading-relaxed">
                                I architect and ship production systems that serve millions.
                                Specialized in <span className="text-neutral-900 dark:text-white font-semibold">React, Node.js, AWS</span>,
                                and building high-performance applications from 0 to 1.
                            </p>

                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a
                                    href="#projects"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95"
                                >
                                    View My Work
                                    <ArrowRight className="ml-2" size={20} />
                                </a>
                                <a
                                    href="/resume.pdf"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl font-bold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all active:scale-95"
                                >
                                    Download Resume
                                    <Download className="ml-2" size={20} />
                                </a>
                            </div>

                            <div className="mt-12 pt-12 border-t border-neutral-200 dark:border-neutral-800 flex items-center space-x-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">3+</div>
                                    <div className="text-xs uppercase tracking-widest">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">50+</div>
                                    <div className="text-xs uppercase tracking-widest">Projects Shipped</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">99.9%</div>
                                    <div className="text-xs uppercase tracking-widest">System Uptime</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700">
                                {/* Visual placeholder for developer image or abstract art */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-4 gap-4 p-8 opacity-20 text-primary">
                                        {Array.from({ length: 16 }).map((_, i) => (
                                            <div key={i} className="w-8 h-8 rounded bg-current" />
                                        ))}
                                    </div>
                                </div>
                                {/* Ideally we would have a generate_image here, but for now I'll use a placeholder structure */}
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl shadow-xl"
                            >
                                <div className="text-sm font-bold text-primary">React Expert</div>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-6 -left-6 p-4 glass-card rounded-2xl shadow-xl"
                            >
                                <div className="text-sm font-bold text-accent">AWS Certified</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
