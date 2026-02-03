export interface Article {
    title: string;
    summary: string;
    date: string;
    readTime: string;
    link: string;
    tags: string[];
}

export const articles: Article[] = [
    {
        title: 'Optimizing React Performance at Scale',
        summary: 'A deep dive into memoization, virtualization, and concurrent rendering patterns for high-traffic applications.',
        date: 'Mar 15, 2024',
        readTime: '8 min read',
        link: '#',
        tags: ['React', 'Performance', 'Engineering']
    },
    {
        title: 'Why We Chose PostgreSQL Over MongoDB',
        summary: 'Exploring the architectural trade-offs between SQL and NoSQL for a multi-tenant SaaS platform.',
        date: 'Feb 10, 2024',
        readTime: '12 min read',
        link: '#',
        tags: ['Database', 'Architecture', 'SaaS']
    },
    {
        title: 'TypeScript Patterns for Production Apps',
        summary: 'Leveraging advanced TypeScript features to build type-safe, maintainable, and scalable codebases.',
        date: 'Jan 22, 2024',
        readTime: '6 min read',
        link: '#',
        tags: ['TypeScript', 'Best Practices', 'Backend']
    }
];
