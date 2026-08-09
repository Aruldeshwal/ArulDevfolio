import CircularGallery from '../components/ui/SkillShow';
import { backendIcons, frontendIcons } from '../constants';
import { useMediaQuery } from 'react-responsive';

interface TechItem {
  iconCode: string;
  iconColor: string;
  text: string;
}

const MobileTechGrid = ({ title, items }: { title: string; items: TechItem[] }) => (
  <div className="w-full mb-8">
    <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 p-3 rounded-xl bg-black-100/90 border border-white/10 shadow-md hover:border-blue-50/40 transition-colors"
          style={{
            borderLeftColor: item.iconColor && item.iconColor !== '##ffde57' ? item.iconColor : '#38bdf8',
            borderLeftWidth: '3px',
          }}
        >
          <img
            src={item.iconCode}
            alt={item.text}
            className="w-7 h-7 object-contain shrink-0"
          />
          <span className="text-sm font-semibold text-white-50 truncate">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const SkillShowcase = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobile) {
    return (
      <div className="w-full py-8 padding-x-lg" id="skills">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-white-50">#</span>Skills
          </h1>
          <p className="text-white-50/60 text-base">
            Core technologies and tools I utilize across front-end and back-end architecture.
          </p>
        </div>
        <MobileTechGrid title="Front-End" items={frontendIcons} />
        <MobileTechGrid title="Back-End" items={backendIcons} />
      </div>
    );
  }

  return (
    <div className="w-full py-12 flex flex-col gap-12" id="skills">
      {/* Main #Skills Header */}
      <div className="padding-x-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          <span className="text-white-50">#</span>Skills
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
        <div className="w-full h-[480px] relative">
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
        <div className="w-full h-[480px] relative">
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
