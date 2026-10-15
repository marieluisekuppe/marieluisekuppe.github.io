import { Link } from "react-router";
import projects from "../data/projects";
import "../css/home-projects.css";
// Footer moved to App.jsx to allow full-bleed background

function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-text-block">
          <h1>Halløjsa!</h1>
          <h2>Jeg er Marie-Luise</h2>
          <p className="hero-text">
            Multimediedesignstuderende med passion for design, programmering og
            problemløsning. Jeg elsker nye udfordringer og motiveres af at skabe
            løsninger, der ser både godt ud og men også fungerer teknisk.
          </p>
        </div>
        <div className="hero-image">
          <img src="/kuppe.jpeg" alt="Marie-Luise Kuppe" />
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
          {featuredProjects.map((project, index) => (
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

      <section className="section contact-section">
        <div className="contact-box">
          <div>
            <h3>Mangler I en praktikant, med interesse indenfor </h3>
            <h3>
              {" "}
              <strong>UX/UI</strong> og <strong>frontend-udvikling</strong>?
            </h3>
          </div>
          <h3>
            Så har I fundet{" "}
            <Link to="/about" className="underline">
              mig
            </Link>
            !
          </h3>
        </div>

        <div className="divider"></div>

        <div className="footer-contact">
          <a className="email-link" href="mailto:mluisek@gmail.com">
            <span className="envelope">✉</span>
            <span className="email-text">mluisek@gmail.com</span>
          </a>
          <div className="divider-vertical"></div>
          <div className="telephone">
            <span className="telephone">📞</span>
            <span className="telephone-text">22 70 23 72</span>
          </div>
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
        </div>
      </section>
    </div>
  );
}

export default HomePage;
