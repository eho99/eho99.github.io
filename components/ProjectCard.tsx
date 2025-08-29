import Link from 'next/link'

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block border rounded p-3 hover:shadow">
      <h3 className="font-medium">{project.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{project.short}</p>
    </Link>
  )
}
