import { Link, useParams } from "react-router";
import projects from "../data/projects";
import "../css/project-detail.css";

function CaseImage({ image, index, note }) {
  return (
    <figure className="project-case-image-figure">
      {image.src ? (
        <img className="project-case-image" src={image.src} alt={image.alt} />
      ) : (
        <div
          className="project-case-image-placeholder"
          role="img"
          aria-label={image.alt}
        >
          <span>Billede {index + 1}</span>
          <small>Tilføj screenshot</small>
        </div>
      )}
      {note && <figcaption>{note}</figcaption>}
    </figure>
  );
}

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
    <article className="project-detail">
      <Link className="project-back" to="/projects">
        ← Alle projekter
      </Link>

      <section className="project-hero">
        <div className="project-hero-inner">
          <div className="project-hero-copy">
            <p className="project-label">{project.year} · Portfolio</p>
            <h1>{project.title}</h1>
            <p className="project-intro">{project.description}</p>

            <div className="project-actions">
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
          </div>

          <div className="project-hero-media">
            <img
              className="project-hero-image"
              src={project.image}
              alt={`Visuelt materiale fra ${project.title}`}
            />
          </div>
        </div>
      </section>

      <section className="project-meta" aria-label="Projektinformation">
        <div className="project-meta-item">
          <span>Min rolle</span>
          <p>{project.role?.join(" · ") ?? "Ikke angivet"}</p>
        </div>
        <div className="project-meta-item">
          <span>Værktøjer</span>
          <p>{project.tools?.join(" · ") ?? project.tags.join(" · ")}</p>
        </div>
        <div className="project-meta-item">
          <span>Team</span>
          <p>{project.collaboration?.join(" · ") ?? "Ikke angivet"}</p>
        </div>
        <div className="project-meta-item">
          <span>Varighed</span>
          <p>{project.duration ?? "Ikke angivet"}</p>
        </div>
      </section>

      <div className="project-body">
        {project.caseSections ? (
          <div className="project-case-sections">
            {project.caseSections.map((section) => (
              <section className="project-case-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.subheading && <h3>{section.subheading}</h3>}
                {section.issueCards?.length > 0 && (
                  <div className="project-issue-grid">
                    {section.issueCards.map((card) => (
                      <article className="project-issue-card" key={card.number}>
                        <span>{card.number}</span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </article>
                    ))}
                  </div>
                )}
                {section.items?.map((item) => (
                  <div className="project-case-item" key={item.heading}>
                    <h3>{item.heading}</h3>
                    {item.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {item.points?.length > 0 && (
                      <ul className="project-case-points">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                    {item.onboardingImages?.length > 0 && (
                      <div
                        className="project-case-image-row"
                        aria-label="Billeder af Vuuhs oprindelige onboarding"
                      >
                        {item.onboardingImages.map((image, index) => (
                          <CaseImage
                            image={image}
                            index={index}
                            key={image.src || image.alt}
                          />
                        ))}
                      </div>
                    )}
                    {item.followupParagraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {item.optimizationImages?.length > 0 && (
                      <div
                        className="project-case-image-row"
                        aria-label="Billeder af den optimerede Vuuh onboarding"
                      >
                        {item.optimizationImages.map((image, index) => (
                          <CaseImage
                            image={image}
                            index={index}
                            key={image.src || image.alt}
                            note={image.point}
                          />
                        ))}
                      </div>
                    )}
                    {item.comparison && (
                      <div className="project-comparison">
                        {["before", "after"].map((stage) => (
                          <figure
                            className="project-comparison-figure"
                            key={stage}
                          >
                            <figcaption>
                              {stage === "before" ? "Før" : "Efter"}
                            </figcaption>
                            {item.comparison[stage].src ? (
                              <img
                                src={item.comparison[stage].src}
                                alt={item.comparison[stage].alt}
                              />
                            ) : (
                              <div className="project-comparison-placeholder">
                                <span>
                                  {stage === "before"
                                    ? "Før redesign"
                                    : "Efter redesign"}
                                </span>
                                <small>Tilføj et skærmbillede i public/</small>
                              </div>
                            )}
                          </figure>
                        ))}
                      </div>
                    )}
                    {item.closingParagraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ))}
                {section.points?.length > 0 && (
                  <ol className="project-case-points">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ol>
                )}
              </section>
            ))}
          </div>
        ) : project.story ? (
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
        ) : null}
      </div>
    </article>
  );
}

export default ProjectPage;
