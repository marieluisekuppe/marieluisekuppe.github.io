function Footer() {
  const year = new Date().getFullYear();
  const location = "Aarhus - Danmark";

  return (
    <footer className="site-footer" id="kontakt">
      <div className="footer-inner">
        <div className="footer-intro">
          <h2 className="footer-heading">
            Projekter
            <br />
            &
            <br />
            Kontakt
          </h2>
        </div>

        <div className="footer-details">
          <div className="footer-item">
            <p className="footer-label">GitHub</p>
            <a
              className="footer-value"
              href="https://github.com/marieluisekuppe"
              target="_blank"
              rel="noreferrer"
            >
              marieluisekuppe
            </a>
          </div>

          <div className="footer-item">
            <p className="footer-label">Mail</p>
            <a className="footer-value" href="mailto:mluisek@gmail.com">
              mluisek@gmail.com
            </a>
          </div>

          <div className="footer-item">
            <p className="footer-label">LinkedIn</p>
            <a
              className="footer-value"
              href="https://www.linkedin.com/in/marie-luise-kuppe-a2a815267/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
            >
              Marie-Luise Kuppe
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-credit">
          <p className="footer-copyright">© {year} Marie-Luise Kuppe</p>
          <p className="footer-location">{location}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
