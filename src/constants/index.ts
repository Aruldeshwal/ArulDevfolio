
export interface ProjectItem {
  quote: string;
  name: string;
  designation: string;
  src: string; // Assuming 'src' is a string path to an image
}

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Passion", imgPath: "/images/motivation.png" },
  { text: "Time", imgPath: "/images/hourglass.png" },
  { text: "Vision", imgPath: "/images/targeting.png" },
  { text: "Interest", imgPath: "/images/percentage.png" },
];

const counterItems = [
  { id: 1, value: 100, suffix: "%", label: "Enthusiasm for Learning" },
  { id: 2, value: 100, suffix: "%", label: "Passion for Programming" },
  { id: 3, value: 20, suffix: "+", label: "Skills in Development" },
  { id: 4, value: 5, suffix: "+", label: "Projects in Various Niches" },
];

const navLinks = [
  {
    name: "Introduction",
    link: "#introduction",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "#resume",
  },
];

const frontendIcons = [
  { 
    iconCode: 'assets/html.png', 
    iconColor: '#E34F26', 
    text: 'HTML' 
  },
  { 
    iconCode: 'assets/css.png', 
    iconColor: '#1572B6', 
    text: 'CSS' 
  },
  { 
    iconCode: 'assets/javascript.png', 
    iconColor: '#F7DF1E', 
    text: 'JavaScript' 
  },
  { 
    iconCode: 'assets/typescript.png', 
    iconColor: '#3178C6', 
    text: 'TypeScript' 
  },
  { 
    iconCode: 'assets/tailwind.png', 
    iconColor: '#06B6D4', 
    text: 'Tailwind' 
  },
  { 
    iconCode: 'assets/react.png', 
    iconColor: '#61DAFB', 
    text: 'React' 
  },
  { 
    iconCode: 'assets/next.png', 
    iconColor: '#111111', 
    text: 'Next.js'
  },
];

const backendIcons = [
  { 
    iconCode: 'assets/node.png', 
    iconColor: '#339933', 
    text: 'Node.js' 
  },
  { 
    iconCode: 'assets/express.png', 
    iconColor: '#000000', // Express.js often uses a dark or black logo
    text: 'Express' 
  },
  { 
    iconCode: 'assets/mongo.png', 
    iconColor: '#47A248', 
    text: 'MongoDB' 
  },
  { 
    iconCode: 'assets/python.png', 
    iconColor: '##ffde57', 
    text: 'Python' 
  },
  { 
    iconCode: 'assets/postgresql.png', 
    iconColor: '#336791', 
    text: 'PostgreSQL' 
  },
  { 
    iconCode: 'assets/docker.png', 
    iconColor: '#2496ED', 
    text: 'Docker' 
  },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];



const projects: ProjectItem[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/images/project1.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/images/project2.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/project3.png",
    },
  ];  

  
  

export { words, counterItems, navLinks, logoIconsList, projects, frontendIcons, backendIcons };