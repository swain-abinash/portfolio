export interface Experience {
    company: string;
    title: string;
    duration: string;
    location: string;
    description: string[];
    skills: string[];
    logo?: string;
}

export const experiences: Experience[] = [
    {
        company: 'TechFlow Systems',
        title: 'Full Stack Developer',
        duration: 'Jan 2023 - Present',
        location: 'San Francisco, CA (Remote)',
        description: [
            'Architected and led the development of a multi-tenant SaaS platform serving 500k+ users, improving system reliability by 40%.',
            'Reduced initial page load time by 60% through aggressive code splitting, image optimization, and implementing a custom caching layer.',
            'Mentored 5 junior engineers and established best practices for TypeScript usage across the organization.',
            'Designed and implemented a real-time analytics dashboard using WebSocket and Redis, handling 1M+ events per day.'
        ],
        skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Redis']
    },
    {
        company: 'Innovate Labs',
        title: 'Full Stack Developer',
        duration: 'Jun 2021 - Dec 2022',
        location: 'New York, NY',
        description: [
            'Developed and maintained 10+ production applications using React and Node.js.',
            'Implemented a centralized authentication system using OAuth2 and JWT, reducing security vulnerabilities by 25%.',
            'Optimized database queries in PostgreSQL, reducing API response times from 800ms to 300ms.',
            'Collaborated closely with UX designers to implement a custom design system used across 5 different products.'
        ],
        skills: ['React', 'Express', 'PostgreSQL', 'Docker', 'Jest']
    },
    {
        company: 'StartUp Hub',
        title: 'Junior Web Developer',
        duration: 'Jan 2020 - May 2021',
        location: 'Austin, TX',
        description: [
            'Built responsive user interfaces for 3 early-stage startup MVPs.',
            'Assisted in migrating a legacy monolithic application to a microservices architecture.',
            'Developed automated test suites achieving 80% code coverage.',
        ],
        skills: ['JavaScript', 'HTML/CSS', 'Python', 'Git']
    }
];
