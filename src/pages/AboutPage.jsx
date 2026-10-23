function AboutPage() {
  return (
    <div className="page narrow">
      <h1>Hvem er jeg?</h1>
      <div className="about-grid">
        <div className="about-text">
          <p className="lead">
            Jeg er en 26‑årig sønderjyde, der siden 2021 har kaldt Aarhus for
            sit hjem og nu studerer multimediedesign på Erhvervsakademi Aarhus.
            Min bachelor i virksomhedskommunikation vækkede min interesse for
            webdesign og digitale løsninger, og jeg elsker finde nye lag i
            programmering og design, som jeg gerne vil udforske endnu dybere.
          </p>
          <p className="lead">
            {" "}
            Når jeg ikke er ude og får en kop kaffe med veninderne eller til en
            koncert, kan man finde mig med hæklenålen i hånden, ved symaskinen
            eller fordybet i et andet lille kreativt projekt.
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
            UX/UI Design, Frontend programmering, optimering og visuel
            identitet.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
