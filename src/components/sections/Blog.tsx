import React from 'react';
import { motion } from 'framer-motion';
import { articles } from '../../data/articles';
import { ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';

const Blog: React.FC = () => {
    return (
        <section id="blog" className="section-padding bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Writing & Thoughts</h2>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Sharing my experiences in software engineering, architecture, and building products.
                        </p>
                    </div>
                    <a href="#" className="mt-4 md:mt-0 inline-flex items-center text-primary font-bold hover:underline">
                        Read More on Medium <ArrowRight size={16} className="ml-1" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 glass-card rounded-3xl border border-neutral-200 dark:border-neutral-800 hover:border-primary/50 transition-all flex flex-col"
                        >
                            <div className="flex items-center space-x-2 text-xs font-bold text-primary uppercase tracking-widest mb-4">
                                <BookOpen size={14} />
                                <span>Article</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                {article.title}
                            </h3>

                            <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-grow leading-relaxed">
                                {article.summary}
                            </p>

                            <div className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-800">
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">#{tag}</span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-sm text-neutral-500">
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center space-x-1">
                                            <Calendar size={14} />
                                            <span>{article.date}</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <Clock size={14} />
                                            <span>{article.readTime}</span>
                                        </span>
                                    </div>
                                    <a href={article.link} className="p-2 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                                        <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
