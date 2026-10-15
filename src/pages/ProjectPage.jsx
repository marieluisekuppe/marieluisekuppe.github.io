import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="page narrow">
        <p className="eyebrow">404</p>
        <h1>Projektet blev ikke fundet</h1>
        <p>Det projekt findes ikke i listen endnu.</p>
        <Link className="button" to="/projects">
          ← Tilbage
        </Link>
      </div>
    );
  }

  return (
    <article className="project-page">
      <Link className="back-link" to="/projects">
        ← Alle projekter
      </Link>
      <section className="project-hero">
        <img className="detail-image" src={project.image} alt="" />
      </section>{" "}
      <section>
        <p className="eyebrow">{project.year}</p>
        <h1>{project.title}</h1>
        <p className="lead">{project.description}</p>
      </section>
      <div className="actions">
        {project.links.map((link) => (
          <a
            className="button secondary"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
      <section className="project-tags">
        <ul className="tag-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>
      {project.story && (
        <div className="project-story">
          <section className="project-story-intro">
            <div>
              <p className="eyebrow">Udfordringen</p>
              <p>{project.story.challenge}</p>
              <p>{project.story.challenge2}</p>
            </div>
            <div>
              <p className="eyebrow">Løsningen</p>
              <p>{project.story.solution}</p>
              <p>{project.story.solution2}</p>
            </div>
          </section>

          <section className="project-story-process">
            <p className="eyebrow">Processen</p>
            <h2>{project.story.processTitle}</h2>
            <p>{project.story.processParagraph}</p>
            <div className="project-story-cards">
              {project.story.cards.map((card) => (
                <article key={card.number}>
                  <span>{card.number}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="project-story-optimization">
            <p className="eyebrow">Optimering</p>
            <h2>{project.story.optimizationTitle}</h2>
            <p>{project.story.optimizationParagraph1}</p>
            <p>{project.story.optimizationParagraph2}</p>
            <ul className="tag-list">
              {project.story.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project-story-reflection">
            <p className="eyebrow">Refleksion</p>
            <h2>{project.story.reflectionTitle}</h2>
            <p>{project.story.reflectionParagraph1}</p>
            <p>{project.story.reflectionParagraph2}</p>
          </section>
        </div>
      )}
    </article>
  );
}

export default ProjectPage;
