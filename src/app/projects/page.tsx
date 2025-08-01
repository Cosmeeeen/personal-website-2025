import * as React from 'react';
import { Metadata } from 'next';

import { ProjectCard, type TProject } from '@/components/project-card';


export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my portfolio of web applications including Focus Timer, Flag Guesser, and Typing Game. Each project showcases modern React, Next.js, and TypeScript development with clean, user-focused design.',
  openGraph: {
    title: 'Projects - Cosmin Ilie',
    description: 'Explore my portfolio of web applications including Focus Timer, Flag Guesser, and Typing Game. Each project showcases modern React, Next.js, and TypeScript development with clean, user-focused design.',
    url: 'https://cosmin.zip/projects',
  },
  twitter: {
    title: 'Projects - Cosmin Ilie',
    description: 'Explore my portfolio of web applications including Focus Timer, Flag Guesser, and Typing Game. Each project showcases modern React, Next.js, and TypeScript development with clean, user-focused design.',
  },
};

const PROJECTS: TProject[] = [
  {
    title: 'Focus Timer',
    shortDescription: 'A minimalist productivity app designed to help users track and manage their focused work sessions',
    images: ['/focus-timer-screenshot.png'],
    longDescription: 'Focus Timer is a clean, modern web application built to enhance productivity through time tracking. The app features a simple timer interface that allows users to monitor their focused work sessions, with tracking for both daily and total accumulated focus time. The application emphasizes simplicity and user experience.',
    usedTechnologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Local Storage',
    ],
    projectUrl: 'https://focus.cosmin.zip'
  },
  {
    title: 'Flag Guesser',
    shortDescription: 'An interactive educational game for learning world flags and discovering interesting country facts',
    images: ['/flags-screenshot.png'],
    longDescription: 'Flag Guesser is an engaging web-based game that challenges players to identify country flags while learning fascinating facts about different nations. The application features continent-based filtering, immediate feedback, and educational content that makes geography learning both fun and informative. Country facts are dynamically generated using the ChatGPT API, ensuring fresh and interesting information with each interaction.',
    usedTechnologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'ChatGPT API',
    ],
    projectUrl: 'https://flags.cosmin.zip'
  },
  {
    title: 'Typing Game',
    shortDescription: 'A simple yet engaging typing game to improve typing speed and accuracy',
    images: ['/typing-game-screenshot.png'],
    longDescription: 'A web-based typing game that provides an interactive and fun way to practice and improve typing skills. The application features a clean, minimalist design with responsive layout that works seamlessly across all devices. Built with modern web technologies to deliver a smooth and engaging user experience.',
    usedTechnologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript',
    ],
    projectUrl: 'https://typing.cosmin.zip'
  },
]

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
            My Work
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore interactive web applications spanning productivity tools, educational games, and skill-building exercises.
            Each project demonstrates modern React development, clean UI design, and thoughtful user experience -
            from time management utilities to engaging learning experiences.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard project={project} key={`${project.title}-${index}`} />
        ))}
      </div>
    </main>
  );
}
