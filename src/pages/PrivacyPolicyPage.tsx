
const PrivacyPolicyPage = () => {
    return (
        // Utilize the section class for full-width content and responsive top margin
        <section className="mt-responsive pb-40" id="privacy-policy">
            
            <div className="padding-x-lg mx-auto max-w-7xl">
                
                {/* Main Title Block */}
                <div className="pt-20 pb-10 border-b border-black-50">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-blue-50 mt-3">
                        Last Updated: November 7, {new Date().getFullYear()}
                    </p>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 text-white-50">
                    
                    {/* Left Column: Navigation/Outline (Sticky for long pages) */}
                    <aside className="md:col-span-1 sticky top-20 h-fit hidden md:block">
                        <h4 className="text-xl font-bold text-white mb-4">Outline</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#collection" className="hover:text-white transition-colors">Information Collection</a></li>
                            <li><a href="#use" className="hover:text-white transition-colors">How We Use Data</a></li>
                            <li><a href="#sharing" className="hover:text-white transition-colors">Data Sharing & Disclosure</a></li>
                            <li><a href="#security" className="hover:text-white transition-colors">Security of Data</a></li>
                            <li><a href="#changes" className="hover:text-white transition-colors">Policy Changes</a></li>
                        </ul>
                    </aside>

                    {/* Right Column: Detailed Content */}
                    <div className="md:col-span-2 space-y-10 text-base leading-relaxed">
                        
                        <div id="collection">
                            <h2 className="text-3xl font-bold text-white mb-4">1. Information Collection and Use</h2>
                            <p>We collect several different types of information for various purposes to provide and improve our Service to you. The types of data collected may include: Personal Data (e.g., email address if you contact me), Usage Data (e.g., IP addresses, browser type, pages visited, time spent on pages) collected automatically via analytics tools.</p>
                            <p className="mt-4">This website primarily uses Google Analytics to track performance and user interactions. No sensitive personal information, such as financial details or government identifiers, is collected directly by this portfolio.</p>
                        </div>
                        
                        <div id="use">
                            <h2 className="text-3xl font-bold text-white mb-4">2. How We Use the Data</h2>
                            <p>The data collected is used solely for analyzing and monitoring the usage of this portfolio website, maintaining and improving the service, and contacting you regarding your inquiries (if you reach out via email).</p>
                        </div>
                        
                        <div id="sharing">
                            <h2 className="text-3xl font-bold text-white mb-4">3. Data Sharing and Disclosure</h2>
                            <p>Your Personal Data is not sold, traded, or rented to third parties. We may share Usage Data with service providers (like Google Analytics) to monitor and analyze the use of our website, subject to their respective privacy policies.</p>
                        </div>
                        
                        <div id="security">
                            <h2 className="text-3xl font-bold text-white mb-4">4. Security of Data</h2>
                            <p>The security of your data is paramount. While we strive to use commercially acceptable means to protect your information, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
                        </div>
                        
                        <div id="changes">
                            <h2 className="text-3xl font-bold text-white mb-4">5. Changes to This Privacy Policy</h2>
                            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicyPage;