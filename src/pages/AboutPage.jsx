function AboutPage() {
  return (
    <div className="page page-with-intro">
      <h1>Hvem er jeg?</h1>
      <div className="about-grid">
        <div className="about-text">
          <p className="lead">
            Jeg er en 26‑årig sønderjyde, der siden 2021 har kaldt Aarhus for
            sit hjem og nu studerer multimediedesign på tredje semester på
            Erhvervsakademi Aarhus.
          </p>
          <br />
          <p className="lead">
            Jeg har en bachelor i virksomhedskommunikation fra Aarhus
            Universitet, som vækkede min interesse for webdesign og digitale
            løsninger. Jeg kan godt lide at finde nye lag i programmering og
            design, som jeg gerne vil udforske endnu dybere.
          </p>
          <br />
          <p className="lead">
            Når jeg ikke er ude og får en kop kaffe med veninderne, ude og gå
            tur med kæresten eller til en koncert, kan man finde mig med
            hæklenålen i hånden, ved symaskinen eller fordybet i et andet lille
            kreativt projekt.
          </p>
        </div>
        <div className="about-image">
          <img src="/kuppe2.jpeg" alt="Marie-Luise Kuppe" />
        </div>
      </div>

      <section className="info-list" aria-label="Om mig detaljer">
        <div>
          <h2>
            <strong>Mine faglige værktøjer</strong>
          </h2>

          <p>Figma: Design & prototyping </p>
          <p>Programmering: HTLM, CSS, JavaScript, React og Vite</p>
          <p>Andet: Onboarding, Optimering, Kundeservice og Word Press</p>
        </div>
        <div>
          <h2>
            <strong>Mine interesse områder</strong>
          </h2>
          <p>
            UX/UI Design, Optimering, Frontend-udvikling, Webdesign og Visuel
            identitet.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
