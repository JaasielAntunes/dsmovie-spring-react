import logo from "assets/img/film-icon.png";
import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1 className="dsmovie-nav-content-h1">DSMovie</h1>
          <img className="dsmovie-logo" src={logo} alt="icon" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JaasielAntunes"
          >
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">jaasiel</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
