import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import DockMenu from '@/components/ui/dockMenu';
import { ScrollProgress } from '@/components/ui/scroll-progress';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    metadataBase: new URL('https://lampng.site'),

    title: {
        default: 'lampng',
        template: '%s | lampng',
    },

    description: 'Full-stack developer portfolio & blog',

    openGraph: {
        title: 'lampng',
        description: 'Full-stack developer portfolio & blog',
        url: '/',
        siteName: 'lampng',
        images: [
            {
                url: '/lampng.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'vi_VN',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'lampng',
        description: 'Full-stack developer portfolio & blog',
        images: ['/lampng.png'],
    },

    icons: {
        icon: '/lampng.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" suppressHydrationWarning className={cn('font-sans', geist.variable)}>
            <body>
                <ScrollProgress />
                {children}
                <DockMenu />
            </body>
        </html>
    );
}
