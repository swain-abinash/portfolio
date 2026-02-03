import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold text-primary mb-4">PORTFOLIO.</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-sm mb-6">
                            Full Stack Developer building high-performance, scalable web applications with a focus on modern architecture and user experience.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-lg hover:text-primary transition-all border border-neutral-200 dark:border-neutral-700">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-lg hover:text-primary transition-all border border-neutral-200 dark:border-neutral-700">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-neutral-800 rounded-lg hover:text-primary transition-all border border-neutral-200 dark:border-neutral-700">
                                <Twitter size={20} />
                            </a>
                            <a href="mailto:swainabinash36@gmail.com" className="p-2 bg-white dark:bg-neutral-800 rounded-lg hover:text-primary transition-all border border-neutral-200 dark:border-neutral-700">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary">About</a></li>
                            <li><a href="#skills" className="text-neutral-600 dark:text-neutral-400 hover:text-primary">Skills</a></li>
                            <li><a href="#projects" className="text-neutral-600 dark:text-neutral-400 hover:text-primary">Projects</a></li>
                            <li><a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-primary">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Availability</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                            Open to new opportunities and high-impact freelance projects.
                        </p>
                        <div className="inline-flex items-center space-x-2 text-primary font-medium">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span>Available for Hire</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 md:mb-0">
                        © {currentYear} Dev Portfolio. All rights reserved.
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center">
                        Built with <span className="mx-1 text-red-500">❤️</span> using React, TypeScript & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
