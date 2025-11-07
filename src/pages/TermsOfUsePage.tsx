const TermsOfUsePage = () => {
    return (
        // Utilize the section class for full-width content and responsive top margin
        <section className="mt-responsive pb-40" id="terms-of-use">
            
            <div className="padding-x-lg mx-auto max-w-7xl">
                
                {/* Main Title Block */}
                <div className="pt-20 pb-10 border-b border-black-50">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                        Terms of Use
                    </h1>
                    <p className="text-lg text-blue-50 mt-3">
                        Effective Date: November 7, {new Date().getFullYear()}
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-white-50">
                    
                    {/* Left Column: Navigation/Outline (Sticky for long pages) */}
                    <aside className="md:col-span-1 sticky top-20 h-fit hidden md:block">
                        <h4 className="text-xl font-bold text-white mb-4">Outline</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#acceptance" className="hover:text-white transition-colors">Acceptance of Terms</a></li>
                            <li><a href="#use-of-service" className="hover:text-white transition-colors">Use of Service</a></li>
                            <li><a href="#intellectual-property" className="hover:text-white transition-colors">Intellectual Property</a></li>
                            <li><a href="#termination" className="hover:text-white transition-colors">Termination</a></li>
                        </ul>
                    </aside>

                    {/* Right Column: Detailed Content */}
                    <div className="md:col-span-2 space-y-10 text-base leading-relaxed">
                        
                        <div id="acceptance">
                            <h2 className="text-3xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using the Applymatic portfolio website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you disagree with any part of the terms, you must not use this website.</p>
                        </div>
                        
                        <div id="use-of-service">
                            <h2 className="text-3xl font-bold text-white mb-4">2. Use of Service</h2>
                            <p>The content on this website is provided for informational and promotional purposes related to Arul Deshwal's professional work. You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the functionality of the website.</p>
                            <p className="mt-4">Unauthorized access, distribution, reproduction, or modification of the site content is strictly prohibited.</p>
                        </div>
                        
                        <div id="intellectual-property">
                            <h2 className="text-3xl font-bold text-white mb-4">3. Intellectual Property</h2>
                            <p>The website and its original content, features, and functionality (including images, code, design, and project descriptions) are and will remain the exclusive property of Arul Deshwal, protected by copyright laws. You may not reproduce, modify, or distribute any content without explicit written permission.</p>
                        </div>
                        
                        <div id="termination">
                            <h2 className="text-3xl font-bold text-white mb-4">4. Termination</h2>
                            <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, a breach of the Terms.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfUsePage;