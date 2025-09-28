import React from 'react';
import Link from 'next/link';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="container py-8">
      <section className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Hi — I'm{' '}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              eho99
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A concise portfolio showcasing technical projects and results.
          </p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <Badge variant="outline" className="text-sm">
              {projects.length} projects
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <div className="flex items-center space-x-4 pt-8">
          <Button variant="outline" asChild>
            <Link href="/about">
              About Me
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="https://github.com/eho99"
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a
              href="#"
              className="flex items-center space-x-2"
            >
              <span>LinkedIn</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
