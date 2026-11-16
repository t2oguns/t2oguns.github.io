import { profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";
const sections = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];
export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#top" className="wordmark" aria-label={`${profile.name}, top`}>
          <span className="brand-prefix" aria-hidden="true">
            ~/
          </span>
          {profile.initials}
        </a>
        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
