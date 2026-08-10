import { useEffect, useState } from "react";
import { navLinks } from "../constants"
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Close drawer on route change (hash click)
    const handleNavClick = () => {
        setDrawerOpen(false);
    };

  return (
    <>
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner">
            <a className="logo" href="#hero">
                Arul | Deshwal
            </a>
            <nav className="desktop">
                <ul>
                    {navLinks.map((navLink) => (
                        <li key={navLink.name} className="group">
                            <a href={navLink.link}>
                                <span>{navLink.name}</span>
                                <span className="underline"></span>
                            </a> 
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span>
                        Contact Me
                    </span>
                </div>
            </a>

            {/* Mobile hamburger button — only renders on mobile */}
            {isMobile && (
                <button
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    className="flex flex-col justify-center items-center gap-[5px] z-[110] relative"
                    aria-label="Toggle navigation menu"
                >
                    <span
                        className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                            drawerOpen ? 'rotate-45 translate-y-[7px]' : ''
                        }`}
                    />
                    <span
                        className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                            drawerOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                        className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                            drawerOpen ? '-rotate-45 -translate-y-[7px]' : ''
                        }`}
                    />
                </button>
            )}
        </div>
    </header>

    {/* Mobile drawer overlay — only renders on mobile */}
    {isMobile && drawerOpen && (
        <div
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            onClick={handleNavClick}
        >
            {navLinks.map((navLink) => (
                <a
                    key={navLink.name}
                    href={navLink.link}
                    className="text-2xl font-semibold text-white-50 hover:text-white transition-colors duration-300"
                    onClick={handleNavClick}
                >
                    {navLink.name}
                </a>
            ))}
            <a
                href="#contact"
                className="mt-4 px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white-50 transition-colors duration-300"
                onClick={handleNavClick}
            >
                Contact Me
            </a>
        </div>
    )}
    </>
  )
}

export default Navbar