import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import DockMenu from '@/components/dockMenu';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});
export const metadata: Metadata = {
    metadataBase: new URL('https://lampng.site'),

    title: {
        default: 'lampng',
        template: '%s | lampng',
    },
    description: 'Full-stack developer portfolio & blog',
    icons: {
        icon: '/lampng.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi" suppressHydrationWarning className="dark">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <ScrollProgress />
                    {children}
                    <DockMenu />
                </ThemeProvider>
            </body>
        </html>
    );
}
