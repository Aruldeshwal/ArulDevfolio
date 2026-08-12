
export interface ProjectItem {
  quote: string;
  name: string;
  designation: string;
  src: string; // Assuming 'src' is a string path to an image
  liveUrl?: string;
  githubUrl?: string;
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
  { id: 4, value: 6, suffix: "+", label: "Projects in Various Niches" },
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
        "A cutting-edge social matching platform for metro commuters — bridging daily transit and social connection through intelligent route matching, AI-powered conversations, and real-time chat.",
      name: "Line-A-Link (MetroConnect)",
      designation: "Next.js 15 · React 19 · PostgreSQL · Socket.io · Gemini AI",
      src: "/images/project1.png",
      liveUrl: "https://metro-connect-lyart.vercel.app",
      githubUrl: "https://github.com/Aruldeshwal/Metro-Connect",
    },
    {
      quote:
        "An intelligent, RAG-powered job application tracking suite with drag-and-drop Kanban boards, resume-to-role matching, and AI-powered job description analysis.",
      name: "Jobber AI",
      designation: "Next.js · React · RAG AI · TypeScript · Tailwind CSS",
      src: "/images/project2.png",
      liveUrl: "https://jobber-flax.vercel.app",
      githubUrl: "https://github.com/Aruldeshwal/Jobber",
    },
    {
      quote:
        "A modern full-stack scheduling application integrated with Google Calendar synchronization, Sanity headless CMS, and Clerk authentication.",
      name: "Calvero",
      designation: "Next.js 16 · React 19 · Sanity CMS · Clerk · Tailwind CSS",
      src: "/images/project3.png",
      liveUrl: "https://calvero-mu.vercel.app",
      githubUrl: "https://github.com/Aruldeshwal/Calvero",
    },
    {
      quote:
        "A peer-to-peer calendar time slot exchange application engineered for transactional integrity and atomic slot swaps using MERN stack.",
      name: "SlotSwap",
      designation: "MongoDB · Express · React · Node.js · TypeScript",
      src: "/images/project4.png",
      liveUrl: "https://slot-swap-omega.vercel.app",
      githubUrl: "https://github.com/Aruldeshwal/SlotSwap",
    },
    {
      quote:
        "A complete full-stack experience & slot booking web app with robust server-side validation to eliminate double-booking and streamline payments.",
      name: "BookIt",
      designation: "React · Node.js · Express · MongoDB · Tailwind CSS",
      src: "/images/project5.png",
      liveUrl: "https://book-it-rosy.vercel.app/",
      githubUrl: "https://github.com/Aruldeshwal/Book-IT",
    },
    {
      quote:
        "A high-performance machine learning sentiment predictor analyzing real-time user text with scikit-learn & NLTK NLP models in an interactive web UI.",
      name: "Sentitude AI",
      designation: "Python · Streamlit · Scikit-Learn · NLTK · Machine Learning",
      src: "/images/project6.png",
      liveUrl: "https://sentitude.streamlit.app/",
      githubUrl: "https://github.com/Aruldeshwal/sentiment-analysis-app",
    },
  ];  

  
  

export { words, counterItems, navLinks, logoIconsList, projects, frontendIcons, backendIcons };