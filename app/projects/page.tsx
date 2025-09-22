import projects from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import { Badge } from '@/components/ui/badge';

export default function ProjectsIndex() {
  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Badge variant="secondary">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
