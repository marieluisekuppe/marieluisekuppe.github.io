import "../index.css";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy;{new Date().getFullYear()} Marie-Luise Kuppe</p>
        </div>
        <div className="footer-content">
          <p>Aarhus, Danmark</p>
        </div>
      </div>
    </footer>
  );
}
