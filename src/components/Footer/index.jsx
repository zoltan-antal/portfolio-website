import './index.css';
import contactDetails from '../../constants/contactDetails.js';
import emailIcon from '../../assets/images/icons/email.svg';
import linkedinIcon from '../../assets/images/icons/technologies/linkedin.svg';
import githubIcon from '../../assets/images/icons/technologies/github.svg';

const Footer = () => {
  return (
    <footer>
      <div id="footer-contact">
        <a href={`mailto:${contactDetails.emailObfuscated}`}>
          <img src={emailIcon} alt="email" />
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
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
      <div id="footer-credit">
        <pre>Built by </pre>
        <a
          className="link repo"
          href={`${contactDetails.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zoltan Antal
        </a>
        <pre> | </pre>
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
