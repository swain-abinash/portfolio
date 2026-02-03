import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { Code2, Server, Database, Cloud, Settings, Smartphone, Cpu, MousePointer2 } from 'lucide-react';

const Skills: React.FC = () => {
    const categories = [
        { title: 'Frontend', icon: <Code2 size={24} />, key: 'Frontend' },
        { title: 'Backend', icon: <Server size={24} />, key: 'Backend' },
        { title: 'Mobile', icon: <Smartphone size={24} />, key: 'Mobile' },
        { title: 'Database', icon: <Database size={24} />, key: 'Database' },
        { title: 'Cloud', icon: <Cloud size={24} />, key: 'Cloud' },
        { title: 'DevOps', icon: <Cpu size={24} />, key: 'DevOps' },
        { title: 'Testing', icon: <Cpu size={24} />, key: 'Testing & QA' },
        { title: 'Tools', icon: <Settings size={24} />, key: 'Tools' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="skills" className="section-padding bg-neutral-50/30 dark:bg-neutral-900/10">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 mb-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-[0.2em]"
                    >
                        Industry Standards
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Enterprise <span className="text-primary">Tech Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg"
                    >
                        A comprehensive ecosystem featuring modern industry-standard technologies used in large-scale production environments.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((cat) => {
                        const categorySkills = skills.filter(s => s.category === cat.key);
                        const hasMore = categorySkills.length > 5;

                        return (
                            <motion.div
                                key={cat.key}
                                variants={itemVariants}
                                className="group p-7 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col h-[320px]"
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-3 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            {cat.icon}
                                        </div>
                                        <h3 className="font-bold text-xl">{cat.title}</h3>
                                    </div>
                                    {hasMore && (
                                        <div className="flex items-center space-x-1 text-[10px] text-neutral-400 font-mono animate-pulse">
                                            <MousePointer2 size={10} />
                                            <span>Scroll</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-thin space-y-2">
                                    <div className="flex flex-wrap gap-2">
                                        {categorySkills.map((skill, idx) => (
                                            <span
                                                key={skill.name}
                                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 cursor-default
                                                    ${idx < 5
                                                        ? 'bg-primary/5 text-primary border-primary/20 font-bold'
                                                        : 'bg-neutral-100 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 border-transparent hover:border-primary/10'
                                                    }`}
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                    {hasMore && (
                                        <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 mt-2 text-center">
                                            <span className="text-[10px] text-neutral-400 uppercase tracking-widest">+ {categorySkills.length - 5} More Tools</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
