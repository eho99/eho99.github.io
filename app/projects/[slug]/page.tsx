import projects from '../../../data/projects'
import { projectComponentMap } from '../content'

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const p = projects.find((x) => x.slug === params.slug)

    // Look up the specific component from the map using the slug
    const ContentComponent = projectComponentMap[params.slug]

    if (!p || !ContentComponent) {
        return <div className="container">Project not found</div>
    }

    return (
        <div className="container">
            {/* Common header for all projects */}
            <h1 className="text-3xl font-bold">{p.title}</h1>
            <p className="mt-2 text-lg text-gray-600">{p.description}</p>

            <hr className="my-6" />

            {/* Render the dynamically selected component */}
            <ContentComponent />
        </div>
    )
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}