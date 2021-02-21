import { Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>

        <div className="social-links">
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className={`fa fa-twitter fa-inverse`} />
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className={`fa fa-codepen fa-inverse`} />
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className={`fa fa-linkedin fa-inverse`} />
          </a>
          <a href="/" rel="noopener noreferrer" target="_blank">
            <i className={`fa fa-github fa-inverse`} />
          </a>
        </div>

        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed by{" "}
          <a
            href="https://williamsl.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            William Suarez Lumbantobing
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
