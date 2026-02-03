import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Layers, Zap, ShieldCheck, Database, Server } from 'lucide-react';

const SystemDesign: React.FC = () => {
    const architectures = [
        {
            title: 'Multi-Tenant SaaS Architecture',
            challenge: 'Scalability & Data Isolation',
            solution: 'Hybrid isolation model with shared application tier and separate schema per tenant.',
            tradeoffs: 'Higher infrastructure complexity vs guaranteed performance and security.',
            features: ['Shared-Application-Separate-Schema', 'Redis for distributed session/locking', 'API Gateway with dynamic tenant routing'],
            icon: <Layers className="text-primary" size={32} />
        },
        {
            title: 'High-Throughput Analytics Pipeline',
            challenge: 'Real-time Event Processing',
            solution: 'Producer-Consumer architecture using Kafka for log-structured persistence and Elasticsearch for sub-second retrieval.',
            tradeoffs: 'Eventual consistency in search indices for extreme write throughput.',
            features: ['Kafka partition-based scaling', 'Elasticsearch index lifecycle management', 'WebSocket streaming for live dashboard'],
            icon: <Zap className="text-accent" size={32} />
        }
    ];

    return (
        <section id="system-design" className="section-padding bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Architectural Thinking</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
                        Engineering is about more than code; it's about designing systems that are resilient, scalable, and maintainable.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    {architectures.map((arch, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="p-8 lg:p-12 glass-card rounded-[2.5rem] relative group border border-neutral-200 dark:border-neutral-800"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center space-x-4 mb-8">
                                        <div className="p-4 bg-primary/10 rounded-2xl">
                                            {arch.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-bold">{arch.title}</h3>
                                            <span className="text-sm font-bold uppercase tracking-widest text-primary">{arch.challenge}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">The Solution</h4>
                                            <p className="text-xl text-neutral-800 dark:text-white leading-relaxed font-medium">{arch.solution}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">Technical Trade-offs</h4>
                                            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed italic border-l-2 border-primary/30 pl-4">{arch.tradeoffs}</p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {arch.features.map((feature, i) => (
                                                <div key={i} className="flex items-center space-x-3 text-neutral-700 dark:text-neutral-300">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                    <span className="font-semibold text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="relative">
                                    {/* Abstract Architecture Diagram using CSS and Icons */}
                                    <div className="aspect-square bg-neutral-100 dark:bg-neutral-800/50 rounded-[2rem] p-8 border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="p-3 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 animate-pulse">
                                                <ShieldCheck className="text-primary" size={24} />
                                            </div>
                                            <div className="flex space-x-4">
                                                <div className="h-2 w-16 bg-primary/20 rounded-full mt-4" />
                                                <div className="p-3 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800">
                                                    <Server className="text-accent" size={24} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-grow flex items-center justify-center relative">
                                            <div className="w-full h-px bg-neutral-300 dark:bg-neutral-700 absolute" />
                                            <div className="w-px h-full bg-neutral-300 dark:bg-neutral-700 absolute" />
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="z-10 p-6 bg-primary text-white rounded-[2rem] shadow-2xl shadow-primary/40"
                                            >
                                                <Hexagon size={40} className="fill-white/20" />
                                            </motion.div>
                                        </div>

                                        <div className="flex justify-between items-end">
                                            <div className="p-3 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800">
                                                <Database className="text-emerald-500" size={24} />
                                            </div>
                                            <div className="text-right">
                                                <div className="text-[10px] font-bold uppercase tracking-tighter opacity-50 mb-1">Scale Target</div>
                                                <div className="text-xl font-bold tabular-nums">1M+ Req/s</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Stats */}
                                    <div className="absolute -top-4 -right-4 p-4 glass-card rounded-2xl shadow-xl border border-primary/20 bg-primary/5">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Availability</div>
                                        <div className="font-bold">99.99%</div>
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

export default SystemDesign;
