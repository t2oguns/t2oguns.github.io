// Optional image: { src: 'images/project.webp', alt: 'Describe the project screenshot' }.
// Files in public/ use paths relative to the Vite base. liveUrl is optional.
export const projects = [
  {
    id: "asoro",
    title: "Asoro Languages",
    category: "01 / WEB APPLICATION",
    description:
      "A language learning platform, helping combat acculturation in African diaspora communities.",
    tags: ["Next.js", "Django", "PostgreSQL", "PyTorch"],
    githubUrl: "https://github.com/t2oguns/asorolanguages/",
    liveUrl: "https://app.asorolanguages.com",
    featured: true,
    sample: false,
    visual: "study",
    color: "green",
    image: null,
  },
  {
    id: "turtle",
    title: "BLNC",
    category: "02 / ROBOTICS & DATA ANALYTICS",
    description:
      "Development of inverted‑pendulum, self‑balancing robotic solutions capable of safely transporting variable mass payloads across unknown terrain.",
    tags: ["Python", "SQL", "Raspberry Pi", "Docker"],
    githubUrl: "https://github.com/turtle-robotics/BLNC",
    liveUrl: "https://www.turtlerobotics.org/projects/blnc",
    featured: true,
    sample: false,
    visual: "path",
    color: "yellow",
    image: null,
  },
  {
    id: "wangetal",
    title: "wangetal",
    category: "03 / WEB APPLICATION",
    description:
      "An AI-powered research discovery platform that helps users explore academic papers, discover related research, and visualize connections through interactive citation networks.",
    tags: ["Next.jS", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/t2oguns/wangetal",
    liveUrl: null,
    featured: true,
    sample: false,
    visual: "notes",
    color: "pink",
    image: null,
  },
];
