import ProjectsStack from "../components/ui/ProjectsStack";
import { projects } from "../constants";
import type { ProjectItem } from "../constants";

interface ProjectCardProps {
    project: ProjectItem;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px]">
        {/* Left Side: Project Media */}
        <div className="lg:col-span-5 flex justify-center items-center">
            <a
                href={project.liveUrl || project.githubUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 hover:border-blue-50/40 transition-all duration-500 shadow-xl block bg-black-200"
            >
                <img
                    src={project.src}
                    alt={project.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 hover:opacity-30 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md text-blue-50 border border-white/10">
                    Project 0{index + 1}
                </span>
            </a>
        </div>

        {/* Right Side: Project Details */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1">
                    {project.name}
                </h3>
                {project.designation && (
                    <p className="text-sm font-medium text-blue-50/80">
                        {project.designation}
                    </p>
                )}
            </div>

            <blockquote className="text-lg md:text-xl text-white-50/80 italic leading-relaxed border-l-2 border-blue-50/50 pl-4 py-1">
                "{project.quote}"
            </blockquote>

            {/* Action Links */}
            <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-white text-black hover:bg-white-50 transition-colors duration-300"
                    >
                        <span>Live Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                )}
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-white/5 text-white-50 border border-white/10 hover:bg-white/10 hover:text-white transition-colors duration-300"
                    >
                        <span>Source Code</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                )}
            </div>
        </div>
    </div>
);

export const ProjectsSection = () => (
    <section id="projects" className="w-full">
        <ProjectsStack
            data={projects}
            renderItem={(project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            )}
        />
    </section>
);