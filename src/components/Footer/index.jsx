import './index.css';
import contactDetails from '../../constants/contactDetails.js';
import emailIcon from '../../assets/images/icons/email.svg';
import linkedinIcon from '../../assets/images/icons/technologies/linkedin.svg';
import githubIcon from '../../assets/images/icons/technologies/github.svg';
import githubIconDark from '../../assets/images/icons/technologies/github-dark.svg';

const Footer = ({ darkMode }) => {
  return (
    <footer>
      <div id="footer-contact">
        <a href={`mailto:${contactDetails.emailObfuscated}`}>
          <img
            className={darkMode ? 'invert' : ''}
            src={emailIcon}
            alt="email"
          />
        </a>
        <a
          href={contactDetails.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href={contactDetails.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={!darkMode ? githubIcon : githubIconDark} alt="GitHub" />
        </a>
      </div>
      <div id="footer-credit">
        <pre>Built by Zoltan Antal | </pre>
        <a
          className="link repo"
          href={`${contactDetails.github}/portfolio-website`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
