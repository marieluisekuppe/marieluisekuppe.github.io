import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import projects from "../data/projects";
import "../css/project-detail.css";

function CaseVideo({ video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !video.src) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          videoElement.play().catch(() => {});
        } else {
          videoElement.pause();
        }
      },
      { threshold: [0, 0.5] },
    );

    observer.observe(videoElement);
    return () => {
      observer.disconnect();
      videoElement.pause();
    };
  }, [video.src]);

  return (
    <div className="project-case-video-box">
      <video
        ref={videoRef}
        className="project-case-video"
        src={video.src}
        aria-label={video.alt}
        autoPlay={false}
        controls
        muted
        playsInline
        preload="metadata"
      />
    </div>
  );
}

function CaseImage({ image, note }) {
  return (
    <figure className="project-case-image-figure">
      <img
        className={`project-case-image${image.transparent ? " is-transparent" : ""}`}
        src={image.src}
        alt={image.alt}
      />
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
            {Array.isArray(project.description) ? (
              project.description.map((paragraph) => (
                <p className="project-intro" key={paragraph}>
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="project-intro">{project.description}</p>
            )}

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
              className={`project-hero-image${project.slug === "Vuuh" ? " project-hero-image-vuuh" : ""}`}
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
                {section.designDecisions?.length > 0 && (
                  <div className="project-design-decisions">
                    {section.designDecisions.map((decision, index) => (
                      <article
                        className={`project-design-decision${index % 2 === 1 ? " is-reversed" : ""}`}
                        key={decision.title}
                      >
                        <img
                          className={`project-design-decision-image${decision.image.cover ? " is-cover" : ""}`}
                          src={decision.image.src}
                          alt={decision.image.alt}
                        />
                        <div className="project-design-decision-copy">
                          <h3>{decision.title}</h3>
                          {decision.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                )}
                {section.subheading && <h3>{section.subheading}</h3>}
                {section.issueCards?.length > 0 && (
                  <div
                    className={`project-issue-grid${project.slug === "RE RŌUGE" ? " project-issue-grid-re-rouge" : ""}${project.slug === "Vuuh" && ["De 4 centrale udfordringer", "De primære forbedringer er:"].includes(section.subheading) ? " project-issue-grid-vuuh-highlight" : ""}`}
                  >
                    {section.issueCards.map((card) => (
                      <article className="project-issue-card" key={card.number}>
                        <span>{card.number}</span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                      </article>
                    ))}
                  </div>
                )}
                {section.optimizationItems?.length > 0 && (
                  <div className="project-optimizations">
                    {section.optimizationItems.map((item) => (
                      <article
                        className={`project-optimization${item.layout === "trade-in" ? " project-optimization-trade-in" : ""}`}
                        key={item.title}
                      >
                        {!item.video && !item.images && (
                          <h3>
                            {item.number} {item.title}
                          </h3>
                        )}
                        {item.introduction && <p>{item.introduction}</p>}
                        {item.channels && (
                          <>
                            <div className="project-optimization-channels">
                              {item.channels.map((channel) => (
                                <div key={channel.title}>
                                  <h4>{channel.title}</h4>
                                  {channel.paragraphs.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                  ))}
                                </div>
                              ))}
                            </div>
                            <div className="project-optimization-gallery">
                              {item.channels
                                .flatMap((channel) => channel.images)
                                .map((image) => (
                                  <CaseImage
                                    image={image}
                                    key={image.src || image.alt}
                                  />
                                ))}
                            </div>
                          </>
                        )}
                        {item.video && (
                          <div
                            className={`project-optimization-flow${item.layout === "trade-in" ? " project-optimization-trade-in-flow" : ""}`}
                          >
                            <div>
                              <h3>
                                {item.number} {item.title}
                              </h3>
                              {item.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                            <div className="project-optimization-video">
                              <CaseVideo video={item.video} />
                            </div>
                          </div>
                        )}
                        {item.images && (
                          <div className="project-optimization-product">
                            <div>
                              <h3>
                                {item.number} {item.title}
                              </h3>
                              {item.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                            <div className="project-optimization-product-images">
                              {item.images.map((image) => (
                                <CaseImage
                                  image={image}
                                  key={image.src || image.alt}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                )}
                {section.items?.map((item) => (
                  <div className="project-case-item" key={item.heading}>
                    <h3>{item.heading}</h3>
                    {item.video ? (
                      <div className="project-case-video-layout">
                        <div className="project-case-video-copy">
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
                        </div>
                        <CaseVideo video={item.video} />
                      </div>
                    ) : (
                      <>
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
                      </>
                    )}
                    {item.onboardingImages?.length > 0 && (
                      <div
                        className="project-case-image-row project-case-image-row-onboarding"
                        aria-label="Billeder af Vuuhs oprindelige onboarding"
                      >
                        {item.onboardingImages.map((image) => (
                          <CaseImage
                            image={image}
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
                        className="project-case-image-row project-case-image-row-optimization"
                        aria-label="Billeder af den optimerede Vuuh onboarding"
                      >
                        {item.optimizationImages.map((image) => (
                          <CaseImage
                            image={image}
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
                            <img
                              src={item.comparison[stage].src}
                              alt={item.comparison[stage].alt}
                            />
                          </figure>
                        ))}
                      </div>
                    )}
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
