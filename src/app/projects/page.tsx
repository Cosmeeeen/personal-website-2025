import * as React from 'react';

import { Metadata } from 'next';
import Image from 'next/image';

import {
  Card
} from '@/components/ui/card';
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
    title: 'Test 2',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 2',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 2',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 2',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 2',
    image: PlaceholderImage.src
  },
  {
    title: 'Test 3',
    shortDescription: 'TThis is a test descriptionThis is a test descriptionThis is a test descriptionhis is a test description',
    image: PlaceholderImage.src,
    longDescription: 'This is a placeholder for the longer description of a project, where you can go into detail about how you worked on it and other things that you might want to mention. This is a placeholder for the longer description of a project, where you can go into detail about how you worked on it and other things that you might want to mention.',
    usedTechnologies: [
      'React',
      'Next.js',
      'Typescript',
      'Rust',
    ]
  },
]

export default function ProjectsPage() {
  return (
    <main className="flex flex-row justify-start gap-4 flex-wrap p-4">
      {PROJECTS_PLACEHOLDER.map(project => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </main>
  );
}
