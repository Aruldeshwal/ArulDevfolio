import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectsStackProps<T> {
    data: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
}

const ProjectsStack = <T,>({ data, renderItem }: ProjectsStackProps<T>) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const cards = gsap.utils.toArray<HTMLElement>('.sticky-card-wrapper');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // The last card doesn't scale down

                const targetScale = 1 - (cards.length - i) * 0.04;

                gsap.to(card, {
                    scale: Math.max(0.88, targetScale),
                    opacity: 0.5,
                    filter: 'blur(2px)',
                    transformOrigin: 'top center',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: 'top 75%',
                        end: 'top 25%',
                        scrub: 0.5, // Smooth lagless scrub response
                        invalidateOnRefresh: true,
                    },
                });
            });
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="relative w-full padding-x-lg pb-32">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    <span className="text-blue-50">#</span>Projects
                </h1>
                <p className="text-white-50/60 text-lg mt-2">
                    A showcase of projects built with passion and engineering discipline.
                </p>
            </div>

            <div className="flex flex-col gap-10 md:gap-14">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="sticky-card-wrapper sticky top-24 md:top-32 w-full"
                        style={{
                            zIndex: index + 1,
                        }}
                    >
                        <div className="w-full bg-black-100/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transition-colors duration-300 hover:border-blue-50/30">
                            {renderItem(item, index)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsStack;