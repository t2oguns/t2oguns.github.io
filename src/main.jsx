import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import "./styles.css";

function SocialLinks() {
  return (
    <div className="social-links">
      {profile.socials.map((s) => (
        <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
          {s.label} ↗
        </a>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="container">
        <section className="hero" id="top" aria-labelledby="intro-heading">
          <p className="eyebrow">
            {profile.role} · {profile.education.institution}
          </p>
          <h1 id="intro-heading">
            {profile.name}
            <span className="name-period">.</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <SocialLinks />
        </section>

        <section
          className="content-section"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">01 / PROJECTS</p>
            <h2 id="projects-heading">Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section
          className="content-section"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">02 / ABOUT</p>
            <h2 id="about-heading">About</h2>
          </div>
          <div className="about-content">
            <p>{profile.bio}</p>
            <p>{profile.interests}</p>
            <h3>Texas A&M University</h3>
            <p>
              {profile.education.degree} · {profile.education.dates}
            </p>
            <h3>Skills</h3>
            <div className="skills-grid">
              {profile.skills.map((group) => (
                <div className="skill-card" key={group.category}>
                  <h4>{group.category}</h4>
                  <p>{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
            {profile.resume && (
              <a
                className="button button-primary"
                href={`${import.meta.env.BASE_URL}${profile.resume}`}
                download
              >
                Download résumé ↓
              </a>
            )}
          </div>
        </section>

        <section
          className="content-section contact-section"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <p className="eyebrow">03 / CONTACT</p>
          <h2 id="contact-heading">Get in touch</h2>
          <a className="email-link" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <SocialLinks />
        </section>
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
