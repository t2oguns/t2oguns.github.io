import { profile, copy } from '../data/profile';
export default function Footer() { return <footer className="container footer"><p>© {new Date().getFullYear()} {profile.name}</p><p>{copy.footer}</p><a href={`mailto:${profile.email}`}>Contact ↗</a></footer>; }
