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

      <section className="section contact-section">
        <div className="contact-box">
          <div>
            <h2>Mangler I en praktikant,</h2>
            <h2>der er klar til at lære,</h2>
            <h2>skabe og bidrage?</h2>
          </div>
          <h3>
            Så har I fundet <span className="underline">mig</span>!
          </h3>
        </div>

        <div className="divider"></div>

        <div className="footer-contact">
          <a className="email-link" href="mailto:mluisek@gmail.com">
            <span className="envelope">✉</span>
            mluisek@gmail.com
          </a>

          <div className="divider-vertical"></div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/marie-luise-kuppe-a2a815267/"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <span>in</span>
            </a>

            <a
              href="https://www.instagram.com/marieluisekuppe/"
              title="Instagram"
              aria-label="Instagram"
            >
              <span>ig</span>
            </a>
          </div>

          <a className="cta-link" href="mailto:mluisek@gmail.com">
            Lad os tage en snak
            <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
