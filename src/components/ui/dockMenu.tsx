'use client';

import React from 'react';
import Link from 'next/link';
import { HomeIcon, NotebookIcon, FolderGitIcon, GithubIcon, SunIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dock, DockIcon } from './dock';
export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
    home: [{ href: '/', icon: HomeIcon, label: 'Home' },{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
        {
            href: '/project',
            icon: FolderGitIcon,
            label: 'Project',
        },],
    social: {
        GitHub: {
            name: 'GitHub',
            url: '#',
            icon: GithubIcon,
        },
    },
    other: {
        darklight: {
            name: 'dark/light',
            url: '#',
            icon: SunIcon,
        },
    },
};
export default function DockMenu() {
    return (
        <div className="fixed inset-x-0 bottom-4 z-30">
            <TooltipProvider>
                <Dock direction="middle" className='bg-card/90'>
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

                    {/* social */}
                    {Object.entries(DATA.social).map(([name, dark_light]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={dark_light.url}
                                        aria-label={dark_light.name}
                                        className={cn(
                                            buttonVariants({ variant: 'ghost', size: 'icon' }),
                                            'size-12 rounded-full',
                                        )}
                                    >
                                        <dark_light.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                    {/* other */}
                    <Separator orientation="vertical" className="h-full" />
                    {Object.entries(DATA.other).map(([name, dark_light]) => (
                        <DockIcon key={name}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={dark_light.url}
                                        aria-label={dark_light.name}
                                        className={cn(
                                            buttonVariants({ variant: 'ghost', size: 'icon' }),
                                            'size-12 rounded-full',
                                        )}
                                    >
                                        <dark_light.icon className="size-4" />
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{dark_light.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </DockIcon>
                    ))}
                </Dock>
            </TooltipProvider>
        </div>
    );
}
