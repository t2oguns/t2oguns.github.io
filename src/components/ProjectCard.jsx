export default function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-category"><p className="eyebrow">{project.category}</p>{project.sample && <span className="sample-label">Sample project</span>}</div>
    <div className="project-info"><h3>{project.title}</h3><p className="muted description">{project.description}</p>{project.image && <img className="project-image" src={`${import.meta.env.BASE_URL}${project.image.src}`} alt={project.image.alt} loading="lazy" width="640" height="400"/>}<ul className="tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
    <div className="project-links"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} code on GitHub (new tab)`}>View code ↗</a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}</div>
  </article>;
}
