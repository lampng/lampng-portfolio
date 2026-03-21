/* eslint-disable @next/next/no-img-element */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import DockMenu from '@/components/ui/dockMenu';
import { ArrowRight, Circle, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextAnimate } from '@/components/ui/text-animate';
import Link from 'next/link';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getProjects } from '@/lib/data/getProjects';
import { getTechnologies } from '@/lib/data/getTechnologies';
const BLUR_FADE_DELAY = 0.03;
export default function Home() {
    // Data temp
    const technologies = getTechnologies();
    const projects = getProjects();
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
                                Hi, I&apos;m Lâm 👋🏻
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
                <BlurFade delay={BLUR_FADE_DELAY * 4} className="order-1 md:order-2" offset={0} inView>
                    <Accordion type="single" collapsible className="w-full">
                        {Object.entries(technologies).map(([key, items]) => (
                            <AccordionItem key={key} value={key}>
                                <AccordionTrigger className="capitalize">{key}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-wrap text-sm text-muted-foreground">
                                        {items.map((item, index) => (
                                            <span
                                                key={item}
                                                className={item === 'NestJS' ? 'font-semibold text-blue-500' : ''}
                                            >
                                                {item}
                                                {index < items.length - 1 && <span className="mx-2">-</span>}
                                            </span>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </BlurFade>
            </section>
            {/* Project section */}
            <section about="project" className="mt-10">
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 5} className="order-1 md:order-2" offset={0} inView>
                        <Button asChild className="pointer-events-none">
                            <div>My Project</div>
                        </Button>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                            Check out my latest project
                        </h1>

                        <span className="text-muted-foreground">
                            Here are some of the projects I&apos;ve worked on.
                        </span>
                    </BlurFade>
                </div>
                <BlurFade delay={BLUR_FADE_DELAY * 6} className="order-1 md:order-2 my-11" offset={0} inView>
                    {projects.length > 0 ? (
                        <div className=" justify-items-center grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {projects.map((project) => {
                                return (
                                    <Card key={project?.id} className="relative w-full max-w-sm pt-0">
                                        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                                        <Link
                                            href={`/project/${project?.slug}`}
                                            className="relative z-40 overflow-hidden rounded-t-lg "
                                        >
                                            <img
                                                src="/me.jpg"
                                                alt="Event cover"
                                                className="h-60  transition-transform duration-300 hover:scale-110 z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                                            />
                                        </Link>
                                        <CardHeader>
                                            <CardTitle className="font-bold">{project?.title}</CardTitle>
                                            <p>{project?.date}</p>
                                            <CardDescription>
                                                {project?.description}
                                                <div className="flex flex-wrap gap-1 my-2">
                                                    {project?.technologies.map((tech, index) => (
                                                        <Badge key={index} variant="secondary">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </CardDescription>
                                            <div className="flex flex-wrap gap-2 ">
                                                {project?.soucre.map((tech, index) => {
                                                    const Icon = tech.icon;
                                                    return (
                                                        <a key={index} href={`${tech.link}`}>
                                                            <div className="p-2 backitems-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-1 px-2 py-1 text-[10px]">
                                                                {Icon && <Icon className="w-3 h-3" />}
                                                                {tech.social}
                                                            </div>
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </CardHeader>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <p>No project yet</p>
                    )}
                </BlurFade>
            </section>
            {/* Contact section */}
            <section about="contact" className="mt-10">
                <div className="flex flex-col items-center justify-center text-center space-y-3">
                    <BlurFade delay={BLUR_FADE_DELAY * 6} className="order-1 md:order-2" offset={0} inView>
                        <Button className="pointer-events-none" asChild>
                            <div>Contact</div>
                        </Button>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                            Get in Touch
                        </h1>
                        <span className="text-muted-foreground">
                            Feel free to reach out if youd like to chat Simply send me an{' '}
                            <a href="mailto:lampngia@gmail.com" className="text-accent-foreground font-bold">
                                email with your question
                            </a>{' '}
                            and I&apos;ll get back to you as soon as possible.
                        </span>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}
