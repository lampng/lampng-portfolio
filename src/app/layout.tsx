import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import DockMenu from '@/components/ui/dockMenu';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: 'lampng - Portfolio',
    description: 'Full-stack developer portfolio & blog',
    icons: '/lampng.png',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cn('font-sans', geist.variable)}>
            <body>
                {children}
                <DockMenu />
            </body>
        </html>
    );
}
