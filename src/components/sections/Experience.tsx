import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../../data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        My career progression and key achievements in building production systems.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-ml-px h-full w-0.5 bg-neutral-200 dark:bg-neutral-800" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-neutral-950 z-10" />

                                {/* Content */}
                                <div className="md:w-1/2 w-full pl-8 md:pl-0">
                                    <div className={`p-8 glass-card rounded-2xl shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                                        }`}>
                                        <div className="flex flex-col mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{exp.title}</h3>
                                                <span className="hidden sm:inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                                                    {exp.duration.split(' - ')[0]}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                                                <div className="flex items-center space-x-1">
                                                    <Calendar size={14} />
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <MapPin size={14} />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start">
                                                    <span className="text-primary mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill) => (
                                                <span key={skill} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-md text-[10px] font-bold uppercase tracking-wider">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
