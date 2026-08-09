import ScrollVelocity from '../components/ui/ScrollVelocity';

const VelocityText = () => {
  return (
    <div className="w-full my-16 md:my-28 py-8 overflow-hidden">
      <ScrollVelocity
        texts={['Keep Going', 'Scroll Down']} 
        velocity={0.01} 
        className="custom-scroll-text"
      />
    </div>
  );
};

export default VelocityText;
