export const profile = {
  name: 'Tobi Ogunsina', initials: 'to.', role: 'Computer science student',
  tagline: 'Curious mind. Thoughtful code.',
  intro: 'I’m Tobi, a computer science student turning curiosity into useful, playful software. Here’s what I’ve been building.',
  // TODO: Replace placeholder contact details and profile URLs before publishing.
  email: 'hello@example.com',
  socials: [{ label: 'GitHub', url: 'https://github.com/YOUR_USERNAME' }, { label: 'LinkedIn', url: 'https://www.linkedin.com/in/YOUR_USERNAME/' }],
  // TODO: Add public/resume.pdf, then change this to 'resume.pdf'.
  resume: null,
  bio: 'I’m a computer science student who enjoys the space where logic meets creativity. I like breaking down tricky problems, learning by building, and making small details feel just right.',
  // TODO: Replace these illustrative bio, skills, and education details with your own.
  interests: 'Lately, I’ve been exploring accessible web interfaces, developer tools, and the algorithms behind everyday applications. Outside of code, I make time for good music and new ideas.',
  skills: [{ category: 'Languages', items: ['JavaScript', 'Python', 'Java', 'HTML & CSS'] }, { category: 'Web & tools', items: ['React', 'Tailwind CSS', 'Git & GitHub', 'Vite'] }, { category: 'Foundations', items: ['Data structures', 'Algorithms', 'Accessible design', 'Problem solving'] }],
  education: { institution: 'Your university', degree: 'B.S. in Computer Science', dates: 'Expected graduation · 2027', detail: 'Coursework in data structures, algorithms, software engineering, and computer systems.' },
};
export const navigation = [{ label: 'Home', path: '/' }, { label: 'Projects', path: '/projects' }, { label: 'About', path: '/about' }, { label: 'Contact', path: '/contact' }];
export const pages = {
  '/': { title: 'Tobi Ogunsina · Portfolio', description: 'Meet Tobi Ogunsina, a computer science student. Explore selected software projects and get in touch.' },
  '/projects': { title: 'Projects · Tobi Ogunsina', description: 'Explore Tobi’s sample web applications and developer tools, with filters by technology.' },
  '/about': { title: 'About · Tobi Ogunsina', description: 'Learn about Tobi Ogunsina’s interests, technical skills, and computer science education.' },
  '/contact': { title: 'Contact · Tobi Ogunsina', description: 'Get in touch with Tobi Ogunsina by email, GitHub, or LinkedIn.' },
};
export const copy = {
  home: { eyebrow: 'HELLO, WORLD. I’M TOBI.', heading: 'Building ideas', accent: 'into something real.', projects: 'A few things I’ve built', projectsIntro: 'Small experiments. Real learning. A little bit of personality.' },
  projects: { eyebrow: 'THE PROJECT ARCHIVE', heading: 'Projects & experiments.', intro: 'A collection of experiments in code, design, and solving everyday problems. These are sample projects while I put together my portfolio.' },
  about: { eyebrow: 'A LITTLE ABOUT ME', heading: 'Always a work in progress.', skillsHeading: 'My toolbox', educationHeading: 'Learning the foundations' },
  contact: { eyebrow: 'LET’S CONNECT', heading: 'Get in touch.', intro: 'Have a project in mind, an opportunity to share, or just want to talk code? I’d love to hear from you.' },
  cta: { heading: 'Let’s talk.', text: 'Projects, opportunities, or a conversation about code.', label: 'Say hello' },
  footer: 'React / Vite · A personal corner of the web.',
};
