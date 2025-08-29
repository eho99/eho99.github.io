import React from 'react'
import Link from 'next/link'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="text-3xl font-semibold">Hi — I'm eho99</h1>
        <p className="mt-2 text-gray-600">A concise portfolio showcasing technical projects and results.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-medium">Featured Projects</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link href="/about" className="text-accent underline">About</Link>
          <span className="mx-2">•</span>
          <a href="https://github.com/eho99" target="_blank" rel="noreferrer" className="text-accent underline">GitHub</a>
          <span className="mx-2">•</span>
          <a href="#" className="text-accent underline">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
