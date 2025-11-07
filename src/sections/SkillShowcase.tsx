import CircularGallery from '../components/ui/SkillShow'
import { backendIcons, frontendIcons } from '../constants'


const SkillShowcase = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>

        <CircularGallery items={frontendIcons} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        <div className="h-40">
          <h1 className="text-4xl border-b-black-200 border-b-2 text-center my-auto md:text-5xl font-bold">
            <span className="text-white-50">#</span> Front-End
          </h1>
          <div className="h-20"></div>
        </div>
        <CircularGallery items={backendIcons} bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        <div className="h-40">
          <h1 className="text-4xl border-b-black-200 border-b-2 text-center my-auto md:text-5xl font-bold">
            <span className="text-white-50">#</span> Back-End
          </h1>
          <div className="h-20"></div>
        </div>
    </div>
  )
}

export default SkillShowcase

