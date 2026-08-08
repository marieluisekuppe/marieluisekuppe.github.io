import { Link } from "react-router";
import projects from "../data/projects";
// Footer moved to App.jsx to allow full-bleed background

function HomePage() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="page">
      <section className="hero-section">
        <p className="eyebrow">Portfolio</p>
        <h1>Ikk kig, Lien</h1>
        <p className="hero-text">
          Hvis du ser det her, skylder du en sodavand. :3
        </p>
        <div className="actions">
          <Link className="button" to="/projects">
            Se projekter
          </Link>
          <Link className="button secondary" to="/contact">
            Kontakt mig
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Udvalgte projekter</p>
          <h2>Start med få projekter og gør dem stærke.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.slug}>
              <img src={project.image} alt={`Preview af ${project.title}`} />
              <div className="project-card-content">
                <p className="eyebrow">{project.year}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Link to={`/projects/${project.slug}`}>Læs mere</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="contact-section">
        <div className="section-heading"></div>
        <h1>Mangler I en praktikant?</h1>
        <h2>Jeg er klar til at lære nyt og udvikle nye færdigheder.</h2>
      </div>

      <div className="link-container">
        <a className="footer-link" href="mailto:mluisek@gmail.com">
          Email
        </a>
        <div className="footer-link">
          <a href="https://www.linkedin.com/in/marie-luise-kuppe-a2a815267/">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
