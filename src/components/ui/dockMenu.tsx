'use client';

import React from 'react';
import { Dock, DockIcon } from './dock';
import { Github, Home, Notebook, Sun } from 'lucide-react';
import Link from 'next/link';

export default function DockMenu() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
            <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
                <DockIcon>
                    <Link href="/">
                        <Home />
                    </Link>
                </DockIcon>
                <DockIcon>
                    <Link href="/blog"><Notebook /></Link>
                    
                </DockIcon>
                <DockIcon>
                    <Link href="https://github.com/lampng"><Github /></Link>

                    
                </DockIcon>
                <DockIcon>
                    <Link href="/"><Sun /></Link>

                    
                </DockIcon>
            </Dock>
        </div>
    );
}
