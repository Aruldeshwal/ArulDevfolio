import React, { useRef } from 'react';

// Define the component using a functional approach with TypeScript
const IntroductionSection: React.FC = () => {
    const bioCardRef = useRef<HTMLDivElement>(null);
    const ctaCardRef = useRef<HTMLDivElement>(null);

    // Function to handle mouse movement over a card (Handles both glow and 3D tilt)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // X position relative to the element.
        const y = e.clientY - rect.top;  // Y position relative to the element.

        // --- 1. Glow Effect Logic (CSS Variable) ---
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
        card.style.setProperty('--start', `${angle + 90}`); 
        
        // --- 2. 3D Tilt Effect Logic (Only for the CTA Card) ---
        if (card === ctaCardRef.current) {
            const xNormalized = (x / rect.width) - 0.5;
            const yNormalized = (y / rect.height) - 0.5;
            const maxRotate = 5;
            const rotateY = xNormalized * maxRotate * 2; 
            const rotateX = yNormalized * maxRotate * -2; 

            // APPLY TRANSFORM HERE
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };
    
    // Function to reset the tilt on mouse leave
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        if (card === ctaCardRef.current) {
            // Reset transformation smoothly
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
    };

    return (
        <section className="section-padding xl:mt-40 md:mt-10 mt-10">
            <div className="grid grid-cols-12 gap-6 padding-x-lg">
                
                {/* 1. Title Container */}
                <div className="col-span-full xl:col-span-8 ml-5 md:ml-0 xl:ml-0">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        <span className="text-white-50">#</span>About Me
                    </h1>
                </div>
                
                {/* 2. Photo Card Placeholder */}
                <div className="col-span-full xl:col-span-4 hidden xl:block"></div>


                {/* 3. Left Column Content: Bio Card */}
                <div className="col-span-full mt-15 xl:col-span-8">
                    <div
                        className="card card-border p-10 md:p-12 ml-5 md:ml-0" 
                        ref={bioCardRef}
                        onMouseMove={handleMouseMove}
                    >
                        <p className="text-white-50 text-xl md:text-2xl leading-relaxed">
                            I’m Arul, a Computer Science student with a deep curiosity for how technology truly works beneath the surface. I enjoy the process of creating, refining, and understanding systems—especially the quiet satisfaction that comes from working directly in the command line.

                            For me, development is as much about discipline and clarity of thought as it is about writing code. I value simplicity, precision, and learning something new each day. My journey in tech is guided by curiosity, patience, and the desire to build things that feel purposeful and lasting.
                        </p>
                    </div>
                </div>

                {/* 4. Right Column Content: Photo/CTA Card */}
                <div className="col-span-full xl:col-span-4 mt-6 xl:-mt-24">
                    <div
                        // STYLES: 3D and Glow handlers are attached here.
                        className="card card-border p-6 bg-linear-to-br rounded-2xl from-black-200 to-black-100" 
                        ref={ctaCardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ transition: 'transform 0.5s ease' }} // Removed external pointerEvents
                    >
                        {/* FINAL FIX: This wrapper provides the necessary relative/z-index stacking context 
                           to overcome the click-blocking transform layer. */}
                        <div className="w-full h-full relative z-10"> 
                            {/* Image/Photo Container */}
                            <div className="relative w-full aspect-square overflow-hidden mb-5"> 
                                <img 
                                    src="/images/Arul.jpg" 
                                    alt="Professional portrait of Arul Deshwal" 
                                    className="w-full h-full object-cover rounded-xl shadow-2xl shadow-black/80 transition-transform duration-500 ring-2 ring-cyan-400/50" 
                                />
                            </div>

                            {/* Text and Button Section */}
                            <div className="px-2 pb-2">
                                <h3 className="text-2xl font-bold mb-3 text-center text-white tracking-wide">
                                    Initiate Collaboration
                                </h3>
                                <p className="text-white-50 mb-4 text-sm text-center">
                                    Discuss how my algorithms can deliver your next success.
                                </p>
                                
                                {/* CTA Button - Inherits z-10 for clickability */}
                                <a href="#contact" className="group contact-btn w-full">
                                    <div className="inner flex-center">
                                        <span>Connect Now</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroductionSection;