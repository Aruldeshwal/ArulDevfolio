import ScrollVelocity from '../components/ui/ScrollVelocity';


const VelocityText = () => {
  return (
    <ScrollVelocity
  texts={['Keep Going', 'Scroll Down']} 
  velocity={0.01} 
  className="custom-scroll-text"
/>
  )
}

export default VelocityText

