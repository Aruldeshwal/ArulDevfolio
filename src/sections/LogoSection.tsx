import { logoIconsList } from "../constants"

interface LogoIconProps {
    icon: {
        imgPath: string;
    }
}

const LogoSection = () => {
    const LogoIcon = ({icon}: LogoIconProps) => {
        return (
            <div className="flex-none flex-center marquee-item ">
                <img 
                    src={icon.imgPath} 
                    alt={"Company Logo"}
                />
            </div>
        )
    } 
  return (
    <div className="md:my-20 my-10 relative">
        <div className="gradient-edge">
        </div>
        <div className="gradient-edge">
        </div>
        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} />
                ))}
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoSection