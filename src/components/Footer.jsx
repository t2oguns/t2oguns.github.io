import { profile, copy } from '../data/profile';
export default function Footer() { return <footer className="container footer"><p>© {new Date().getFullYear()} {profile.name}</p><p>{copy.footer} <span aria-hidden="true">✳</span></p><a href={`mailto:${profile.email}`}>Let’s connect ↗</a></footer>; }
