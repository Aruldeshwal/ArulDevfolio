import Button from "../components/Button"
import { words } from "../constants"
import HeroExperience from "../components/heroModels/HeroExperience"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useRef } from "react";
import AnimatedCounter from "../components/AnimatedCounter";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const container = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    
    useGSAP(() => {
        if (!container.current) return;
        const elements = container.current.querySelectorAll("h1");
        if (elements.length > 0) {
            gsap.fromTo(
                elements,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.2 }
            );
        }
    }, { scope: container });
  
  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="hero-layout">
            {/*Left Hero Section*/}
            <header className="flex flex-col justify-center md:w-full w-full md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div ref={container} className="hero-text">
                        <h1>Shaping 
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>Into Real Projects</h1>
                        <h1>That Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">A developer moulded by code, forged through algorithms.</p>
                    <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See my Work" />
                </div>
            </header>
            {/*Right Hero Section — hidden on mobile for performance */}
            {!isMobile && (
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience/>
                    </div>
                </figure>
            )}
        </div>
        <AnimatedCounter/>
    </section>
  )
}

export default Hero