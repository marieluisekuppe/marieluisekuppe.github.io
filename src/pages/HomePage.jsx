import { Link } from "react-router";
import projects from "../data/projects";
import "../css/home-projects.css";
// Footer moved to App.jsx to allow full-bleed background

function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="page">
      <section className="hero-section">
        <img className="hero-ornament" src="/hero-ornament.svg" alt="" />
        <div className="hero-intro">
          <h1>Marie-Luise<br />Kuppe</h1>
          <p>Multimediedesigner</p>
        </div>
        <div className="hero-portrait-frame">
          <img src="/kuppe3.png" alt="Marie-Luise Kuppe" />
        </div>
      </section>

      <section className="home-projects">
        <div className="home-projects-heading">
          <h2>Udvalgte projekter</h2>
          <Link to="/projects">
            Alle projekter <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="home-project-grid">
          {featuredProjects.map((project) => (
            <article className="home-project-card" key={project.slug}>
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
        </div>
      </section>
    </div>
  );
}

export default HomePage;
