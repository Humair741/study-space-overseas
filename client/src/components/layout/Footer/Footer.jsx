import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">StudySpace</span>
              <span className="logo-overseas">OVERSEAS</span>
            </div>
            <p className="brand-description">
              Connecting students with their ideal overseas education opportunities through AI-powered matching and personalized guidance.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="social-icon facebook">f</i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="social-icon twitter">t</i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="social-icon instagram">i</i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="social-icon linkedin">in</i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3 className="column-title">Quick Links</h3>
              <ul className="links-list">
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="column-title">Student Resources</h3>
              <ul className="links-list">
                <li><a href="/visa-guide">Visa Guides</a></li>
                <li><a href="/scholarships">Scholarships</a></li>
                <li><a href="/cost-calculator">Cost Calculator</a></li>
                <li><a href="/accommodation">Accommodation</a></li>
                <li><a href="/faq">FAQs</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="column-title">Contact Us</h3>
              <address className="contact-info">
                <p>123 Education Street</p>
                <p>Global City, Country</p>
                <p>Email: <a href="mailto:info@studyspaceoverseas.com">info@studyspaceoverseas.com</a></p>
                <p>Phone: <a href="tel:+11234567890">+1 (123) 456-7890</a></p>
              </address>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Study Space Overseas. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;