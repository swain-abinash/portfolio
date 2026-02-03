import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            A selection of my most impactful work, demonstrating architectural thinking and technical depth.
                        </p>
                    </div>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0 inline-flex items-center text-primary font-bold hover:underline">
                        View All Projects on GitHub <ExternalLink size={16} className="ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                        >
                            {/* Image / Mockup */}
                            <div className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 group shadow-lg">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-neutral-400 font-mono text-sm">[ Project Mockup: {project.title} ]</span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Details */}
                            <div className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.skills.map((skill) => (
                                                <span key={skill} className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/10">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium">
                                            {project.tagline}
                                        </p>
                                    </div>

                                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.features.slice(0, 4).map((feature, i) => (
                                            <div key={i} className="flex items-start space-x-2">
                                                <CheckCircle2 size={16} className="text-primary mt-1 flex-shrink-0" />
                                                <span className="text-sm text-neutral-700 dark:text-neutral-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {project.impact && (
                                        <div className="p-4 bg-primary/5 border border-primary/10 rounded-xl">
                                            <p className="text-sm font-semibold text-primary">
                                                <span className="uppercase tracking-widest text-[10px] block mb-1">Impact</span>
                                                {project.impact}
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex space-x-4 pt-2">
                                        <a
                                            href={project.demo || '#'}
                                            className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95"
                                        >
                                            <span>Live Demo</span> <ExternalLink size={18} />
                                        </a>
                                        <a
                                            href={project.github || '#'}
                                            className="inline-flex items-center space-x-2 px-6 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl font-bold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all active:scale-95"
                                        >
                                            <Github size={18} /> <span>Codebase</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
