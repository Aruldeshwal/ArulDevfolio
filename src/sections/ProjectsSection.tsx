import ScrollStack from "../components/ui/ProjectsStack";

import { projects } from "../constants";

import type { ProjectItem } from "../constants";

interface ProjectCardProps {
    projects: ProjectItem; // Explicitly assign the ProjectItem type
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => (
    // Outer container: 
    // h-full: Ensures it uses full height of ScrollStackItem.
    // flex: Enables horizontal layout.
    // items-center: Vertically centers the content within the card.
    // p-8: Consistent padding.
    <div className="h-full flex items-center p-8 md:p-12">

        
        {/* === LEFT SIDE: Image Container (Takes ~40% width) === */}
        {/* flex-shrink-0: Prevents the image from shrinking when text is long. */}
        {/* flex justify-center: Centers the image horizontally. */}
        <div className="w-5/12 shrink-0 flex justify-center">
            <img 
                src={projects.src} 
                alt={projects.name} 
                // Image Sizing: Increased size for dominance.
                // w-72 h-72: Sets a large fixed size (18rem / ~288px).
                // rounded-full: Makes it circular.
                // border-4 border-zinc-400: Added a visible border.
                className="w-160 h-120 object-cover shadow-2xl border-4 border-zinc-400" 
            />
        </div>

        {/* === RIGHT SIDE: Text Content (Takes ~60% width) === */}
        {/* text-left: Aligns all text content to the left. */}
        {/* pl-12: Ample left padding to separate from the image. */}
        <div className="w-7/12 text-left pl-12">
            
            {/* Title (Project Name) */}
            {/* text-5xl: Extra large, impactful title font size. */}
            {/* text-white: Primary attention color. */}
            {/* mb-4: Margin below the title. */}
            <p className="name text-5xl font-extrabold text-white mb-4">
                {projects.name}
            </p>
            
            {/* Description (Quote) */}
            {/* text-3xl: Large description/quote font size. */}
            {/* italic: Distinct style for the quote. */}
            {/* text-zinc-300: High-contrast, but secondary color. */}
            <p className="quote text-3xl italic text-zinc-300">
                "{projects.quote}"
            </p>
            
            {/* The project designation field is SCRAPPED entirely as requested. */}
        </div>
    </div>
);

export const ProjectsSection = () => (
    <ScrollStack
        data={projects}
        renderItem={(project, index) => (
            <ProjectCard key={index} projects={project} /> 
        )}
        // 🎯 CRITICAL FIX: Tell the component to use the window for scrolling
        useWindowScroll={true} 
        blurAmount={0}
        rotationAmount={0}
    />
);