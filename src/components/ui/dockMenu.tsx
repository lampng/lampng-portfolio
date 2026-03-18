'use client';

import React from 'react';
import Link from 'next/link';
import { HomeIcon, NotebookIcon, FolderGitIcon, GithubIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dock, DockIcon } from './dock';

const DATA = {
    home: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        { href: '/blog', icon: NotebookIcon, label: 'Blog' },
        { href: '/project', icon: FolderGitIcon, label: 'Project' },
    ],
    social: {
        GitHub: {
            name: 'GitHub',
            url: '#',
            icon: GithubIcon,
        },
    },
};

export default function DockMenu() {
    return (
        <div className="fixed inset-x-0 bottom-4 z-30">
            <TooltipProvider>
                <Dock direction="middle" className="bg-card/90">
                    {/* Home */}
                    {DATA.home.map((item) => (
                        <DockIcon key={item.label}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.href}
                                        aria-label={item.label}
                                        className={cn(
                                            buttonVariants({ variant: 'ghost', size: 'icon' }),
                                            'size-12 rounded-full',
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{item.label}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    <Separator orientation="vertical" className="h-full" />

                    {/* Social */}
                    {Object.entries(DATA.social).map(([name, item]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.url}
                                        aria-label={item.name}
                                        className={cn(
                                            buttonVariants({ variant: 'ghost', size: 'icon' }),
                                            'size-12 rounded-full',
                                        )}
                                    >
                                        <item.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}

                    <Separator orientation="vertical" className="h-full" />

                    {/* Theme Toggle */}
                    <DockIcon>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button
                                    aria-label="Toggle theme"
                                    className={cn(
                                        buttonVariants({ variant: 'ghost', size: 'icon' }),
                                        'size-12 rounded-full',
                                    )}
                                >
                                    <SunIcon className="size-4" />
                                </button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Toggle theme</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                </Dock>
            </TooltipProvider>
        </div>
    );
}
