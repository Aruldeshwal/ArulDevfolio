import CountUp from "react-countup"
import { counterItems } from "../constants"

const AnimatedCounter = () => {    
  return (
    <div id="counter" className={`padding-x-lg xl:mt-0 mt-32`}>
        <div className="mx-auto grid-4-cols">
            {counterItems.map((item, index) => (
                // 🎯 CRITICAL FIX: The key prop must be on the outer-most element of the map function.
                // Since you don't have a unique ID in 'item', we'll use the 'index' as a fallback,
                // although using a stable ID from 'item' is generally better.
                <div 
                    key={item.id ?? index} // Use a stable ID if available, otherwise fallback to index
                    className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                >
                    <div className="counter-number text-white text-5xl font-bold mb-2 ">
                        <CountUp duration={8} suffix={item.suffix} end={item.value}/>
                    </div>
                    <div className="text-white-50 text-lg">
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default AnimatedCounter;