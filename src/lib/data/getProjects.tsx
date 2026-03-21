import { Github, ArrowBigUpDashIcon } from 'lucide-react';

// data/projects.ts
export function getProjects() {
    return [
        {
            id: '1',
            slug: 'api-gp-remake',
            image: '',
            content: `
            # API GP Remake

RESTful API built with Express and MongoDB.
Includes authentication, CRUD operations, and production deployment.`,
            title: 'API GP Remake',
            date: '2023',
            description:
                'RESTful API built with Node.js and Express, featuring MongoDB integration, authentication, and production deployment on Render.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JWT/Auth'],
            soucre: [
                { social: 'github', link: 'https://github.com/lampng/api-gp-remake', icon: Github },
                { social: 'Api', link: 'https://api-gp-remake.onrender.com/', icon: ArrowBigUpDashIcon },
            ],
        },
        ,
    ];
}
