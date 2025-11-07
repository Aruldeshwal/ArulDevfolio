interface ButtonProps {
    className?: string;
    id?: string;
    text: string;
}

const Button = ({ className, id, text}: ButtonProps) => {
  return (
    <a onClick={(e)=>{
      e.preventDefault();
      const Target = document.getElementById('projects')
      if(Target && id) {
        const offset = window.innerHeight*0.15;
        const top = Target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({top, behavior: 'smooth'});
      }
    }} className={`${className ?? ""} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle"></div>
            <p className="text">{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button