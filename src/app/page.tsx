import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const skills = [
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Building modern, responsive web applications with React, Next.js, and TypeScript'
  },
  {
    icon: Layers,
    title: 'Component Architecture',
    description: 'Building scalable, reusable component systems and design systems for maintainable applications'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, accessibility, and search engine visibility'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight">
            Frontend Engineer
          </h1>
          <p className="text-2xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            I&apos;m Cosmin, a passionate frontend engineer based in Bucharest. 
            I specialize in creating exceptional digital experiences with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I focus on crafting high-quality frontend solutions that combine beautiful design with robust functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} className="hover:shadow-lg hover:border-primary/20 transition-all duration-200">
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Work Together?</CardTitle>
            <CardDescription className="text-base">
              I&apos;m always excited to take on new challenges and collaborate on interesting projects.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact">
                Let&apos;s Connect
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
