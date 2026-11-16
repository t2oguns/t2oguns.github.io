import { resume } from "react-dom/server";

export const profile = {
  name: "Tobi Ogunsina",
  initials: "to.",
  role: "Computer science student",
  tagline: "",
  intro: "I’m Tobi, an aspiring engineer with an interest in computer science, problem solving, and philosophy. I enjoy exploring how technology influences our everyday lives, shapes human behavior, and changes the ways we interact with each other and the world.",
  email: "ogunsina04@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/t2oguns" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/tobi-ogunsina/" },
  ],
  resume: "resume.pdf",
  bio: "Aspiring engineer with an interest in computer science, problem-solving, and philosophy. I enjoy exploring how technology influences our everyday lives, shapes human behavior, and changes the ways we interact with each other and the world.",
  interests:
    "Lately, I’ve been exploring human-computer interaction, robotics, and machine learning, hoping to learn how to bridge the gap between human creativity and technological innovation to develop intelligent systems that can meaningfully improve people’s lives.",
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "C++", "Java", "HTML & CSS"],
    },
    {
      category: "Web & tools",
      items: ["Next.js", "Django", "PostgreSQL", "PyTorch", "Git & GitHub"],
    },
    {
      category: "Foundations",
      items: [
        "Data structures",
        "Algorithms",
        "Accessible design",
        "Problem solving",
      ],
    },
  ],
  education: {
    institution: "Texas A&M University",
    degree: "B.S. in Computer Science",
    dates: "Expected graduation · 2029",
    detail:
      "Coursework in data structures, algorithms, machine learning, software engineering, and computer systems.",
  },
};
export const navigation = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const copy = {
  home: {
    eyebrow: "HELLO, WORLD. I’M TOBI.",
    heading: "Building ideas",
    accent: "into something real.",
    projects: "A few things I’ve built",
    projectsIntro:
      "Small experiments. Real learning. A little bit of personality.",
  },
  projects: {
    eyebrow: "THE PROJECT ARCHIVE",
    heading: "Projects & experiments.",
    intro:
      "A collection of experiments in code, design, and solving everyday problems. These are sample projects while I put together my portfolio.",
  },
  about: {
    eyebrow: "A LITTLE ABOUT ME",
    heading: "Always a work in progress.",
    skillsHeading: "My toolbox",
    educationHeading: "Learning the foundations",
  },
  contact: {
    eyebrow: "LET’S CONNECT",
    heading: "Get in touch.",
    intro:
      "Have a project in mind, an opportunity to share, or just want to talk code? I’d love to hear from you.",
  },
  cta: {
    heading: "Let’s talk.",
    text: "Projects, opportunities, or a conversation about code.",
    label: "Say hello",
  },
  footer: "React / Vite · A personal corner of the web.",
};
