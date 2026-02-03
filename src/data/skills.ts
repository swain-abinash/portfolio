export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | 'Mobile' | 'Cloud' | 'Testing & QA';
    icon?: string;
}

export const skills: Skill[] = [
    // Frontend (Modern & Scale)
    { name: 'React 19', category: 'Frontend' },
    { name: 'TypeScript 5', category: 'Frontend' },
    { name: 'Next.js 15 (App Router)', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Shadcn/ui', category: 'Frontend' },
    { name: 'Framer Motion', category: 'Frontend' },
    { name: 'Zustand', category: 'Frontend' },
    { name: 'TanStack Query v5', category: 'Frontend' },
    { name: 'Storybook', category: 'Frontend' },

    // Backend (Enterprise Java & Distributed)
    { name: 'Java 21', category: 'Backend' },
    { name: 'Spring Boot 3.3', category: 'Backend' },
    { name: 'Spring Cloud (Microservices)', category: 'Backend' },
    { name: 'Spring Security (OIDC/JWT)', category: 'Backend' },
    { name: 'Hibernate / JPA', category: 'Backend' },
    { name: 'gRPC / Protocol Buffers', category: 'Backend' },
    { name: 'Apache Kafka', category: 'Backend' },
    { name: 'RabbitMQ', category: 'Backend' },
    { name: 'Node.js (NestJS)', category: 'Backend' },

    // Mobile (Native & Cross-Platform)
    { name: 'React Native', category: 'Mobile' },
    { name: 'Expo Router', category: 'Mobile' },
    { name: 'Native Modules (Swift/Kotlin)', category: 'Mobile' },
    { name: 'Firebase SDK', category: 'Mobile' },

    // Database & Storage
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Redis (Caching & Pub/Sub)', category: 'Database' },
    { name: 'Elasticsearch', category: 'Database' },
    { name: 'Cassandra', category: 'Database' },
    { name: 'Liquibase / Flyway', category: 'Database' },

    // Cloud (Cloud-Native Architecture)
    { name: 'AWS (EKS, RDS, S3)', category: 'Cloud' },
    { name: 'Azure (AKS, CosmosDB)', category: 'Cloud' },
    { name: 'Google Cloud Platform', category: 'Cloud' },
    { name: 'Serverless (Lambda/Edge)', category: 'Cloud' },

    // DevOps & Observability
    { name: 'Docker / Podman', category: 'DevOps' },
    { name: 'Kubernetes (K8s)', category: 'DevOps' },
    { name: 'Terraform / IaC', category: 'DevOps' },
    { name: 'GitHub Actions (CI/CD)', category: 'DevOps' },
    { name: 'Prometheus & Grafana', category: 'DevOps' },
    { name: 'OpenTelemetry', category: 'DevOps' },
    { name: 'ELK Stack', category: 'DevOps' },

    // Testing & QA
    { name: 'Playwright', category: 'Testing & QA' },
    { name: 'JUnit 5 / Mockito', category: 'Testing & QA' },
    { name: 'Cypress', category: 'Testing & QA' },
    { name: 'Jest / Vitest', category: 'Testing & QA' },
    { name: 'Selenium', category: 'Testing & QA' },
    { name: 'Postman (Automation)', category: 'Testing & QA' },

    // Tools
    { name: 'Git / GitFlow', category: 'Tools' },
    { name: 'Vite / Turborepo', category: 'Tools' },
    { name: 'SonarQube', category: 'Tools' },
    { name: 'Postman / Insomnia', category: 'Tools' },
    { name: 'Swagger / OAS 3.0', category: 'Tools' },
    { name: 'Docker Compose', category: 'Tools' },
];
