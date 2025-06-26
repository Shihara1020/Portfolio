import { c } from "maath/dist/index-43782085.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  travely,
  neighbourly,
  dicegame,
  guessthenumber,
  neighbourlyweb,
  wildlife,
  pera,
  dharmaraja,
  jinaraja,
  java,
  cpp,
  firebase,
  kotlin,
  mysql,
  netlify,
  php,
  python,
  bootstrap,
  typescript,
  sezenta,
  nextjs,
  nestjs,
  springboot,
  angular,
  express,
  eventify,
  eyezen,
  PostOffice,
  Arduni_game,
  Arduni_gameMobile,
  robot,
  processor,
  pmPulse,
  avonet,
  circles,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home"
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "CV",
  },
];

const services = [
  {
    title: "Computer Engineeer",   
    icon: backend,
  },

  {
    title: "Computer Engineeer",
    icon: mobile,
  },
  {
    title: "Computer Engineeer",
    icon: mobile,
  },
  {
    title: "Computer Engineeer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const frameworks = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];
const hosting = [
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
];

const databases = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const education = [
  {
    name: "Bachelor's degree",
    institute: "University of peradeniya",
    icon: pera,
    iconBg: "#383E56",
    year: "2021 - present",
    description:
      "Currently reading for my Bachelors' Degree in Computer Engineering",
  },
  {
    name: "Advanced Level",
    institute: "Dharmaraja Collage Kandy",
    icon: dharmaraja,
    iconBg: "#383E56",
    year: "2019 - 2021",
    description:
      "General Certificate Advanced Level get 3'As ",
  },
  {
    name: "Ordinary Level",
    institute: "Jinaraja Boys collage Gampola",
    icon: jinaraja,
    iconBg: "#383E56",
    year: "2012-2019",
    description:
      "Passed General Certificate Ordinary Level Exam with 7 A passes",
  },
];


const universityCourses = [
  {
    category: "Mathematics",
    icon: "🔢", // You can replace with actual icon
    courses: [
      { id: "GP115", name: "Calculus I" },
      { id: "GP116", name: "Linear Algebra" },
      { id: "EM211", name: "Ordinary Differential" },
      { id: "EM212", name: "Calculus II" },
      { id: "EM213", name: "Probability & Statistics" },
      { id: "EM214", name: "Discrete Mathematics" },
      { id: "EM215", name: "Numerical Methods" },

    ]
  },
  {
    category: "Electrical & Electronic",
    icon: "⚡",
    courses: [
      { id: "GP118", name: "Basic Electrical & Electronic Engineering" },
      { id: "EE282", name: "Network Analysis for Computer Engineering" },
      { id: "EE285", name: "Electronic I" },
    ]
  },
  {
    category: "Computer Engineering",
    icon: "💻",
    courses: [
      // { id: "CO221", name: "Logic Network" },
      { id: "CO222", name: "Programming Methodology" },
      { id: "CO223", name: "Computer Communication Networks" },
      { id: "CO224", name: "Computer Architecture" },
      { id: "CO225", name: "Software Construction" },

    ]
  },
  {
    category: "Projects & Research",
    icon: "🔬",
    courses: [

    ]
  },
  {
    category: "Technical",
    icon: "🔧",
    courses: [
      { id: "GP106", name: "Material Science" },
      { id: "GP110", name: "Engineering Mechanics" },
      { id: "GP111", name: "Elementary Thermodynamics" },
      { id: "GP112", name: "Engineering Measurements" },
      { id: "GP113", name: "Fundamentals of Manufacture" },
      { id: "GP114", name: "Engineering Drawing" },
    ]
  },
  {
    category: "General",
    icon: "📚",
    courses: [
      { id: "GP101", name: "English I" },
      { id: "GP102", name: "English II" },
    ]
  }
];

// Achievements data
const achievements = [
  {
    title: "Professor E. F. Bartholomeusz Prize for First Year Engineering Mathematics",
    year: "2024",
    description: "Best student in all engineering specialties who achieved the highest average marks in the engineering mathematics modules offered throughout the year. (Out of 415 engineering students)",
    icon: "🏆",
    category: "Academic Excellence"
  },
  {
    title: "ACES Coders v11.0 - 12 hours algorithmic programming competition",
    year: "2024", 
    description: "An inter-university 12-hour coding competition organized by the University of Peradeniya.",
    icon: "💻",
    category: "Programming Competition"
  }
];



const projects = [
  {
    name: "GP118-Line Following Robot",
    description:
      "An autonomous line-following robot powered by Arduino Uno, developed for the GP118 Line Following Competition, which secured 1st place against 60+ teams.",
    tags: [
      {
        name: "Arunio",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "blue-text-gradient",
      },

      {
        name: "microservices",
        color: "blue-text-gradient",
      },
      
    ],
    image: robot,
    source_code_link: "https://github.com/Shihara1020/GP118-Line-Following-Robot",
  },
  {
    name: "CO224-Building Processor",
    description:
      "Building simple processor using veriolog",
    tags: [
      {
        name: "ARM",
        color: "blue-text-gradient",
      },
      {
        name: "MIPS",
        color: "blue-text-gradient",
      },

      {
        name: "Variolg",
        color: "blue-text-gradient",
      },
    ],
    image: processor,
    source_code_link: "https://github.com/Shihara1020/CO224-Building_Processor",
  },
  {
    name: "Booking WebSite",
    description:
      "Creat a simple hotel booking web site",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "google-maps",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "ayurveda",
        color: "green-text-gradient",
      },
    ],
    image: eyezen,
    source_code_link: "https://github.com/Shihara1020/BOOKING-WEB",
  },
  {
    name: "CO222-Project-Milestone-2",
    description:
      "A C program that simulates a post office package management system using linked lists, developed for the CO223 module milestone project.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "google-maps",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "PostOffice",
        color: "green-text-gradient",
      },
    ],
    image: PostOffice,
    source_code_link: "https://github.com/Shihara1020/CO222-Project-Milestone-2",
  },
  {
    name: "GP106 - Arduino Game",
    description:
      "An interactive Rock-Paper-Scissors-Lizard-Spock game built with Arduino and Python, featuring both hardware controls and a graphical user interface.",
    tags: [
      {
        name: "Pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "qr-scanner",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "public-transport",
        color: "green-text-gradient",
      },
    ],
    image: Arduni_game,
    source_code_link: "https://github.com/Shihara1020/GP106-Arduino_Game",
  },
  
];
neighbourlyweb;
export {

  technologies,
  education,
  projects,
  frameworks,
  databases,
  hosting,
  universityCourses,
  achievements 

  // experience,
};
