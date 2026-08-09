 

// --- Configuration ---
const CONTACT_EMAIL = 'aruldeshwal1@gmail.com'; 
const SOCIAL_LINKS = [
    { name: 'LinkedIn', icon: '/assets/linkedin.png', url: 'https://www.linkedin.com/in/arul-deshwal-1367b1327/', label: "LinkedIn" },
    { name: 'GitHub', icon: '/assets/github.png', url: 'https://github.com/Aruldeshwal', label: "GitHub" },
    { name: 'Twitter', icon: '/assets/twitter.png', url: 'https://x.com/linuxstonks', label: "Twitter" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // Utilize responsive top margin for ample separation
        <footer className="mt-40 md:mt-60" id="contact">
            
            <div className="padding-x-lg">

                {/* 1. DOMINANT CTA SECTION (No change needed here; it remains the centerpiece) */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-10 md:py-16">
                    
                    {/* Large, Bold Message */}
                    <div className="md:w-3/5 w-full">
                         <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                            Wanna Collaborate on your next big thing?
                        </h2>
                    </div>
                    
                    {/* Prominent Email Link */}
                    <div className="md:w-2/5 w-full flex md:justify-end justify-start">
                        <a 
                            href={`mailto:${CONTACT_EMAIL}`} 
                            className="text-2xl md:text-3xl font-bold text-white-50 hover:text-white transition-colors duration-300 underline underline-offset-8 decoration-white-50 hover:decoration-white break-all md:break-normal"
                        >
                            {CONTACT_EMAIL}
                        </a>
                    </div>
                </div>

                {/* --- DIVIDER LINE --- */}
                <hr className="border-t border-black-50" />

                {/* 2. INFORMATIONAL GRID SECTION (OPTIMIZED SPACING) */}
                {/* Changed to md:grid-cols-3 to optimize remaining space */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-16"> 

                    {/* Column 1: Branding, Core Info & Copyright (Takes the primary left space) */}
                    <div className="md:col-span-1 flex flex-col gap-4">
                        <a href="#top" className="logo">Arul | Deshwal</a>
                        <p className="text-sm text-white-50 max-w-sm">
                            Full-Stack Developer focused on design, performance, and engineering discipline.
                        </p>
                        <p className="text-xs text-blue-50 mt-4">
                            &copy; {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Column 2: Legal & Ethical Statement (Center Column for clear visibility) */}
                    <div className="md:col-span-1 flex flex-col gap-4">
                        <h4 className="text-lg font-bold text-white">Legal & Ethos</h4>
                         <p className="text-sm text-blue-50">
                            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a> / 
                            <a href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</a>
                        </p>
                        <p className="text-sm text-blue-50">
                            Building disciplined software and storytelling through design.
                        </p>
                    </div>

                    {/* Column 3: Social & Contact (Pushed to the far right for visual balance) */}
                    <div className="md:col-span-1 flex flex-col gap-4 md:items-end">
                        <h4 className="text-lg font-bold text-white">Connect</h4>
                        
                        {/* Social Icons (Flex-end alignment) */}
                        <div className="socials flex gap-4 md:justify-end">
                            {SOCIAL_LINKS.map(link => (
                                <a 
                                    key={link.name} 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="icon"
                                    title={`Connect on ${link.name}`}
                                >
                                    <img src={link.icon} alt={link.label} className="size-6 object-contain"/>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>
                
                {/* Removed the final bottom line as the copyright is now in Column 1 */}
            </div>
        </footer>
    );
};

export default Footer;