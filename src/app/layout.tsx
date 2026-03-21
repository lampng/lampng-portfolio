import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import DockMenu from '@/components/dockMenu';
import { ThemeProvider } from '@/components/theme-provider';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
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
        <html lang="en" suppressHydrationWarning>
            <body className={` ${jetbrainsMono.variable} antialiased  font-mono`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <ScrollProgress />
                    {children}
                    <DockMenu />
                </ThemeProvider>
            </body>
        </html>
    );
}
