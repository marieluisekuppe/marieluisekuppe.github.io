import { Link } from "react-router";
import projects from "../data/projects";
import "../css/projects-page.css";
import "../css/home-projects.css";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <section className="projects-intro">
        <h1>Mine projekter</h1>
        <p>
          Her finder du et udvalg af projekter som jeg har arbejdet med i løbet
          af min uddannelse som multimediedesigner.
        </p>
        <p>
          Find et udvalg af produkt optimeringer, koncept udvikling og mere.
        </p>
      </section>

      <section
        className="home-project-grid projects-grid"
        aria-label="Projektliste"
      >
        {projects.map((project) => (
          <article
            className="home-project-card"
            data-project={project.slug}
            key={project.slug}
          >
            <Link to={`/projects/${project.slug}`}>
              <div className="home-project-image-wrap">
                <img
                  src={project.image}
                  alt={`Visuelt materiale fra ${project.title}`}
                />
              </div>
              <div className="home-project-caption">
                <h3>{project.title}</h3>
                <p>{project.tags[0]}</p>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ProjectsPage;
