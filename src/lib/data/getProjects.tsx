// data/projects.ts
export async function getProjects() {
    return [
        {
            id: '1',
            slug: 'Slugg1',
            image: '',
            content: 'content',
            title: 'Balance Board Blog Pro',
            date: 'June 2025',
            description:
                'A modern markdown blog platform built with Next.js, Prisma, and Tailwind CSS, featuring authentication, internationalization, and rich markdown rendering.',
            technologies: ['Node.js', 'Express', ' NestJS', 'PostgreSQL', 'MongoDB'],
            soucre: [
                { social: 'github', link: 'https://github.com/abc', icon: '' },
                { social: 'demo', link: 'https://demo.com', icon: '' },
            ],
        },
        ,
    ];
}
