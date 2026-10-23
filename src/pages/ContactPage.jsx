function ContactPage() {
  return (
    <div className="page page-with-intro">
      <h1 className="contact-heading">Kontakt</h1>

      <section className="contact-info" aria-label="Mine kontaktoplysninger">
        <div className="contact-info-list">
          <h2 className="contact-subheading">Mine oplysninger</h2>

          <div className="contact-info-item">
            <p className="contact-info-label">Email</p>
            <a href="mailto:mluisek@gmail.com">mluisek@gmail.com</a>
          </div>

          <div className="contact-info-item">
            <p className="contact-info-label">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/marie-luise-kuppe-a2a815267/"
              rel="noreferrer"
              target="_blank"
            >
              Marie-Luise Kuppe
            </a>
          </div>

          <div className="contact-info-item">
            <p className="contact-info-label">Lokation</p>
            <p>Aarhus C, Danmark</p>
          </div>
        </div>

        <div className="contact-info-image">
          <img src="/kuppe1.png" alt="Marie-Luise Kuppe" />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
