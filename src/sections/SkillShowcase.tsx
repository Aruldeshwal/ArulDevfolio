import CircularGallery from '../components/ui/SkillShow';
import { backendIcons, frontendIcons } from '../constants';

const SkillShowcase = () => {
  return (
    <div className="w-full py-12 flex flex-col gap-12">
      {/* Main #Skills Header */}
      <div className="padding-x-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="text-blue-50">#</span>Skills
        </h1>
        <p className="text-white-50/60 text-lg">
          Core technologies and tools I utilize across front-end and back-end architecture.
        </p>
      </div>

      {/* Front-End Section */}
      <div className="w-full">
        <div className="padding-x-lg mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 border-b border-white/10 pb-3">
            Front-End
          </h2>
        </div>
        <div className="w-full h-[380px] md:h-[480px] relative">
          <CircularGallery
            items={frontendIcons}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>

      {/* Back-End Section */}
      <div className="w-full">
        <div className="padding-x-lg mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 border-b border-white/10 pb-3">
            Back-End
          </h2>
        </div>
        <div className="w-full h-[380px] md:h-[480px] relative">
          <CircularGallery
            items={backendIcons}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillShowcase;
