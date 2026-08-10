import { Suspense } from 'react';
import DownloadButton from '../components/DownloadButton';
import { useMediaQuery } from 'react-responsive';

// --- Configuration ---
// IMPORTANT: Replace this with the actual path to your Resume PDF file in your public directory
const RESUME_PDF_PATH = '/assets/Resume_Enhanced.pdf'; 

// --- Lazy Loading Implementation ---
// We create a component that will only be rendered once the parent is loaded.
// This is the simplest way to lazy-load content within a component's body.
const LazyPdfViewer = () => (
    // The iframe uses standard HTML/CSS to embed the PDF viewer provided by the browser
    <iframe
        // CRUCIAL FIX: Append #page=1 to load only the first page by default
        src={`${RESUME_PDF_PATH}#page=1`}
        title="Professional Resume PDF"
        // ADJUSTED HEIGHT: Set a fixed, single-page-friendly height (e.g., 1000px)
        // Removed h-screen to prevent disproportionate height
        className="w-full border-0 rounded-xl"
        // minHeight is set to a fixed value that closely matches a single A4 page aspect ratio when full width
        style={{ height: '1000px', minHeight: '1000px' }} 
        loading="lazy" // Standard HTML lazy loading attribute for iframe
    >
        <p className="text-white-50 p-4">
            It appears your browser does not support PDF embeds. Please <a href={RESUME_PDF_PATH} target="_blank" rel="noopener noreferrer" className="text-white font-bold underline">download the PDF</a> instead.
        </p>
    </iframe>
);

// Mobile fallback — real mobile browsers can't render PDFs in iframes
const MobileResumeView = () => (
    <div className="flex flex-col items-center gap-6 py-10 px-5">
        <div className="w-full rounded-xl border border-white/10 bg-black-200/50 p-8 text-center">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-xl font-bold text-white mb-2">Resume Preview</h3>
            <p className="text-white-50 text-sm mb-6">
                PDF preview is not supported on mobile browsers. Tap below to view or download.
            </p>
            <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white-50 transition-colors duration-300"
            >
                View Resume PDF
            </a>
        </div>
    </div>
);


const ResumeSection = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        // The mt-responsive utility is applied here for consistent section spacing
        <section className="mt-responsive">
            
            {/* Styled Heading */}
            <div className="padding-x-lg w-full mt-20"> 
                <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="text-white-50">#</span>Resume
                </h1>
            </div>
            
            {/* 2. PDF Content — iframe on desktop, fallback on mobile */}
            <div className="padding-x-lg mt-10 md:mt-16 card-border p-5 md:p-10 rounded-xl mx-5 md:mx-10 xl:mx-20">
                
                {isMobile ? (
                    <MobileResumeView />
                ) : (
                    <Suspense fallback={
                        <div className="flex-center w-full h-[500px] text-xl text-white-50">
                            <p>Loading Resume Content...</p>
                        </div>
                    }>
                        <LazyPdfViewer />
                    </Suspense>
                )}
                
            </div>
            
            {/* Download button — hidden on mobile where MobileResumeView already has a link */}
            {!isMobile && (
                <div className="flex-center mt-10 mb-20">
                    <DownloadButton 
                        href={RESUME_PDF_PATH} 
                        fileName='DOWNLOAD RESUME'
                        className='md:w-80 md:h-16 w-60 h-12' 
                    />
                </div>
            )}
            
        </section>
    );
};

export default ResumeSection;