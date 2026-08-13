import { Link } from "react-router";
import projects from "../data/projects";

function ProjectsPage() {
  return (
    <div className="page">
      <section className="section intro">
        <h1>Mine projekter</h1>
        <p>
          Her kan du gå på opdagelse i nogle af de projekter, jeg har arbejdet
          med under min uddannelse.
        </p>
      </section>

      <section className="project-grid" aria-label="Projektliste">
        {projects.map((project) => (
          <article className="project-card" key={project.slug}>
            <img src={project.image} alt={`Preview af ${project.title}`} />
            <div className="project-card-content">
              <p className="eyebrow">{project.year}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <Link to={`/projects/${project.slug}`}>
                Læs mere om projektet
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
