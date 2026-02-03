export interface Project {
    title: string;
    tagline: string;
    description: string;
    role: string;
    skills: string[];
    features: string[];
    impact?: string;
    image?: string;
    github?: string;
    demo?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: 'CloudScale SaaS Platform',
        tagline: 'Enterprise-grade multi-tenant infrastructure',
        description: 'A high-performance SaaS platform built for enterprise clients, featuring real-time data processing and automated scaling.',
        role: 'Full Stack Developer',
        skills: ['React', 'NestJS', 'PostgreSQL', 'AWS Lambda', 'Redis'],
        features: [
            'Multi-tenant database architecture with strict schema isolation',
            'Dynamic resource allocation based on tenant workload',
            'Zero-downtime Blue/Green deployments via AWS CodeDeploy',
            'Custom RBAC engine with granular permission mapping'
        ],
        impact: 'Architected for 10x growth; reduced infrastructure overhead by 40% using serverless components.',
        image: '/images/project-saas.png',
        featured: true,
    },
    {
        title: 'Banking Application',
        tagline: 'Secure & scalable financial dashboard',
        description: 'A modern banking platform focused on secure transactions, real-time balance tracking, and intuitive financial management.',
        role: 'Full Stack Developer',
        skills: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
        features: [
            'Real-time transaction history with advanced filtering',
            'Secure multi-factor authentication (MFA) integration',
            'Interactive financial analytics and spending charts',
            'High-availability database with automated backups'
        ],
        impact: 'Engineered for 99.9% uptime and sub-second transaction processing.',
        image: '/images/project-banking.png',
        github: 'https://github.com/banking-app',
        featured: true,
    },
    {
        title: 'Swastyam Health App',
        tagline: 'Comprehensive mobile health tracking',
        description: 'A mobile-first health domain application designed for holistic wellness and medical data management.',
        role: 'Full Stack Developer (Mobile & Web)',
        skills: ['React Native', 'Node.js', 'MariaDB', 'AWS', 'Firebase'],
        features: [
            'Real-time vital tracking and health data visualization',
            'Seamless data synchronization across devices via Firebase',
            'AWS-hosted backend for scalable medical record storage',
            'MariaDB database with encrypted field-level security'
        ],
        impact: 'Built a cross-platform solution ensuring HIPAA-compliant data handling.',
        image: '', // To be replaced by user
        github: 'https://github.com/swastyam-health',
        featured: true,
    },
    {
        title: 'DataInsight Engine',
        tagline: 'Distributed real-time event processing',
        description: 'A fault-tolerant distributed system designed to ingest, process, and index millions of events daily.',
        role: 'Full Stack Developer',
        skills: ['TypeScript', 'Apache Kafka', 'Elasticsearch', 'Go', 'GCP'],
        features: [
            'Stream-based windowing for real-time aggregation metrics',
            'At-most-once and Exactly-once delivery semantics handling',
            'Elasticsearch index lifecycle management (ILM) for cost optimization',
            'Distributed tracing with OpenTelemetry for observability'
        ],
        impact: 'System sustained 5k req/s at 99th percentile latency of <100ms.',
        image: '/images/project-data.png',
        featured: true,
    },
    {
        title: 'PayGuard Protocol',
        tagline: 'Secure transaction & compliance layer',
        description: 'A PCI-DSS compliant security layer for fintech applications, focusing on data masking and secure auditing.',
        role: 'Backend & Security Developer',
        skills: ['Node.js', 'Redis', 'PostgreSQL', 'Vault', 'Docker'],
        features: [
            'Field-level encryption using AES-256-GCM',
            'Immutable audit logs using blockchain-inspired hashing',
            'Rate-limiting and anomaly detection at the gateway level',
            'Automated compliance reporting & security scanning'
        ],
        impact: 'Eliminated PII exposure risk; successfully passed annual SOC2 Type II audit.',
        image: '/images/project-security.png',
        featured: true,
    },
];
