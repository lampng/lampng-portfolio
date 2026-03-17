'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import DockMenu from '@/components/ui/dockMenu';
import { ArrowRight, Circle, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
const BLUR_FADE_DELAY = 0.05;
export default function Home() {
    return (
        <main className="min-h-screen max-w-2xl mx-auto  py-12 px-6  sm:py-24">
            <section className="max-w-2xl mx-auto">
                <div className="gap-2 flex justify-between">
                    <div className="flex-col flex flex-1 space-y-3">
                        <div className="flex">
                            <TextAnimate
                                className="inline-block text-5xl font-bold tracking-tighter sm:text-6xl xl:text-6xl/none"
                                animation="blurIn"
                                delay={BLUR_FADE_DELAY}
                                as="span"
                                by="line"
                                once
                            >
                                Hi, I&apos;m Lâm 👋
                            </TextAnimate>
                        </div>
                        <div className="flex">
                            <TextAnimate
                                className="inline-block max-w-[600px] md:text-xl"
                                animation="blurIn"
                                delay={BLUR_FADE_DELAY}
                                as="span"
                                by="line"
                                once
                            >
                                Fullstack Developer focused on building modern web applications. I enjoy turning ideas
                                into scalable products using technologies like React.js, Next.js, Node.js, Nest.js and
                                modern databases.
                            </TextAnimate>
                        </div>
                    </div>
                    <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2" offset={0} inView>
                        <Avatar className="size-28 md:size-38 border rounded-full shadow-lg ring-4 ring-muted">
                            <AvatarImage alt="lampng" src="/me.jpg" />
                        </Avatar>
                    </BlurFade>
                </div>
            </section>
            {/* About section */}
            <section about="about" className="mt-10 space-y-3">
                <TextAnimate
                    className="font-bold text-2xl"
                    animation="blurIn"
                    delay={BLUR_FADE_DELAY * 2}
                    as="h2"
                    by="line"
                    once
                >
                    About
                </TextAnimate>
                <TextAnimate
                    className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
                    animation="blurIn"
                    delay={BLUR_FADE_DELAY * 2}
                    as="p"
                    by="line"
                    once
                >
                    My main focus is full-stack web development using modern JavaScript technologies. I enjoy working
                    across the entire stack — from designing frontend interfaces to building scalable backend services.
                    My goal is to become a strong software engineer who can design systems, write clean maintainable
                    code, and build products that people love to use.
                </TextAnimate>
            </section>
            {/* Technologies section */}
            <section about="Technologies" className="mt-10">
                <TextAnimate
                    className="font-bold text-2xl"
                    animation="blurIn"
                    delay={BLUR_FADE_DELAY * 3}
                    as="h2"
                    by="line"
                    once
                >
                    Technologies
                </TextAnimate>
                <Accordion type="single" collapsible>
                    <BlurFade delay={BLUR_FADE_DELAY * 4} className="order-1 md:order-2" offset={0} inView>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="flex items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path d="M64.5 320C64.5 461 178.1 575 319.1 575C461.1 575 575.1 461 575.1 320C575.1 180 461.1 66.1 319.1 66.1C178.1 66.1 64.5 180 64.5 320zM256.1 214L256.1 427L213.1 427L213.1 214L256.1 214zM298.1 214L426.1 214L426.1 257L298.1 257L298.1 214zM426.1 299L426.1 342L298.1 342L298.1 299L426.1 299zM298.1 384L426.1 384L426.1 427L298.1 427L298.1 384z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold">Front-End</p>
                                    </div>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pl-12 text-muted-foreground">
                                <span className="font-bold underline">HTML</span> -{' '}
                                <span className="font-bold underline">CSS</span> /{' '}
                                <span className="font-bold underline">TailwindCSS</span> -{' '}
                                <span className="font-bold underline">Shadcn</span> -{' '}
                                <span className="font-bold underline">JavaScript</span> -{' '}
                                <span className="font-bold underline">React.js</span> -{' '}
                                <span className="font-bold underline">Next.js</span>
                            </AccordionContent>
                        </AccordionItem>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 5} className="order-1 md:order-2" offset={0} inView>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="flex items-center gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 relative rounded-full overflow-hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                            <path d="M544 269.8C529.2 279.6 512.2 287.5 494.5 293.8C447.5 310.6 385.8 320 320 320C254.2 320 192.4 310.5 145.5 293.8C127.9 287.5 110.8 279.6 96 269.8L96 352C96 396.2 196.3 432 320 432C443.7 432 544 396.2 544 352L544 269.8zM544 192L544 144C544 99.8 443.7 64 320 64C196.3 64 96 99.8 96 144L96 192C96 236.2 196.3 272 320 272C443.7 272 544 236.2 544 192zM494.5 453.8C447.6 470.5 385.9 480 320 480C254.1 480 192.4 470.5 145.5 453.8C127.9 447.5 110.8 439.6 96 429.8L96 496C96 540.2 196.3 576 320 576C443.7 576 544 540.2 544 496L544 429.8C529.2 439.6 512.2 447.5 494.5 453.8z" />
                                        </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm  font-bold">Backend</p>
                                    </div>
                                </div>
                            </AccordionTrigger>

                            <AccordionContent className="pl-12 text-muted-foreground">
                                <span className="font-bold underline">Node.js</span> -{' '}
                                <span className="font-bold underline">Express</span> /{' '}
                                <span className="font-bold underline">NestJS</span> -{' '}
                                <span className="font-bold underline">PostgreSQL</span> -{' '}
                                <span className="font-bold underline">MongoDB</span> -{' '}
                            </AccordionContent>
                        </AccordionItem>
                    </BlurFade>
                </Accordion>
            </section>
            {/* Project section */}
            <section about="Project" className="mt-10">
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 6} className="order-1 md:order-2" offset={0} inView>
                        <Button className="pointer-events-none">My Project</Button>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                            Check out my latest project
                        </h1>

                        <span className="text-muted-foreground">
                            Here are some of the projects I&apos;ve worked on.
                        </span>
                    </BlurFade>
                </div>
            </section>
            {/* Contact section */}
            <section about="ProContactject" className="mt-10">
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 6} className="order-1 md:order-2" offset={0} inView>
                        <Button className="pointer-events-none">Contact</Button>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                            Get in Touch
                        </h1>
                        <span className="text-muted-foreground">
                            Feel free to reach out if youd like to chat Simply send me an{' '}
                            <a href="mailto:lampngia@gmail.com" className="">
                                email with your question
                            </a>{' '}
                            and I&apos;ll get back to you as soon as possible.
                        </span>
                    </BlurFade>
                </div>
            </section>
            <DockMenu/>
        </main>
    );
}
