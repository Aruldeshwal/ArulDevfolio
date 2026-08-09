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
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group-hover:border-blue-50/40 transition-all duration-500 shadow-xl">
                <img
                    src={project.src}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-black/60 backdrop-blur-md text-blue-50 border border-white/10">
                    Project 0{index + 1}
                </span>
            </div>
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

            <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-white-50/70 border border-white/10">
                    Full-Stack Development
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-white-50/70 border border-white/10">
                    UI/UX Design
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-50/10 text-blue-50 border border-blue-50/20">
                    Performance Optimized
                </span>
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