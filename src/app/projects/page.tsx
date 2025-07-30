import * as React from 'react';
import { Metadata } from 'next';

import { ProjectCard, type TProject } from '@/components/project-card';

import PlaceholderImage from '../favicon.ico';

export const metadata: Metadata = {
  title: 'Cosmin Ilie - Projects',
};

const PROJECTS_PLACEHOLDER: TProject[] = [
  {
    title: 'Test 1',
    shortDescription: 'This is a test description',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 2',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 3',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 4',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 5',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 6',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 7',
    image: PlaceholderImage.src
  },
  {
    title: 'Featured Project',
    shortDescription: 'This is a comprehensive project showcasing modern web development practices',
    image: PlaceholderImage.src,
    longDescription: 'This is a placeholder for the longer description of a project, where you can go into detail about how you worked on it and other things that you might want to mention. This is a placeholder for the longer description of a project, where you can go into detail about how you worked on it and other things that you might want to mention.',
    usedTechnologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ]
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
            A collection of projects that showcase my passion for building elegant, functional, and user-focused web applications. 
            Each project represents a unique challenge and learning experience in my journey as a frontend engineer.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_PLACEHOLDER.map((project, index) => (
          <ProjectCard project={project} key={`${project.title}-${index}`} />
        ))}
      </div>
    </main>
  );
}
