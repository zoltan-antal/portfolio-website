import './index.css';
import emailIcon from '../../assets/images/icons/email.svg';
import linkedinIcon from '../../assets/images/icons/linkedin.svg';
import githubIcon from '../../assets/images/icons/github.svg';

const Footer = () => {
  return (
    <footer>
      <div id="footer-contact">
        <a
          // obfuscated email address
          href="mailto:%7a%6f%6c%74%61%6e%5f%61%6e%74%61%6c%40%6f%75%74%6c%6f%6f%6b%2e%63%6f%6d"
        >
          <img src={emailIcon} alt="email" />
        </a>
        <a
          href="https://linkedin.com/in/zoltan-antal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/zoltan-antal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
      </div>
      <div id="footer-credit">
        <pre>Built by Zoltan Antal | </pre>
        <a
          className="repo"
          href="https://github.com/zoltan-antal/portfolio-website"
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
