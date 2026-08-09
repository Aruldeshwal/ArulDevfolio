

interface DownloadButtonProps {
    className?: string;
    href: string; 
    fileName: string;
}

const DownloadButton = ({ className, href, fileName }: DownloadButtonProps) => {
  return (
    // 1. Apply the passed-in className and the cta-wrapper class to the <a> tag.
    <a 
      href={href} 
      download 
      target="_blank" 
      rel="noopener noreferrer" 
      // Ensure any external classes are applied here along with the required wrapper class
      className={`${className ?? ""} cta-wrapper`} 
    >
        {/* 2. This inner DIV must have the 'cta-button group' classes for styling and hover effects */}
        <div className="cta-button group">
            <div className="bg-circle"></div>
            <p className="text mr-2">{fileName}</p>
            <div className="arrow-wrapper">
                {/* Ensure you use the correct path for your download arrow icon */}
                <img src="/images/download.svg" alt="download icon" />
            </div>
        </div>
    </a>
  )
}

export default DownloadButton;