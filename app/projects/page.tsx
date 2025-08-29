import projects from '../../data/projects'
import ProjectCard from '../../components/ProjectCard'

export default function ProjectsIndex() {
  return (
    <div className="container">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  )
}
