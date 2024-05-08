import './index.css';
import contactDetails from '../../constants/contactDetails';
import linkedinIcon from '../../assets/images/icons/technologies/linkedin.svg';
import githubIcon from '../../assets/images/icons/technologies/github.svg';

const Contact = () => {
  const email = contactDetails.email;

  return (
    <main className="contact">
      <h1>Contact me</h1>
      <div className="contact-category">
        <p className="description">
          To chat about my work, a project collaboration or a job opportunity,
          feel free to contact me at:
        </p>
        <div className="contact-items">
          {/* Obfuscated email address */}
          <a
            className="email"
            href={`mailto:${contactDetails.emailObfuscated}`}
          >
            {email.slice(0, (email.length / 3) * 1)}
            <span>{Math.random().toString(36).substring(2, 12)}</span>
            {email.slice((email.length / 3) * 1, (email.length / 3) * 2)}
            <span>{Math.random().toString(36).substring(2, 12)}</span>
            {email.slice((email.length / 3) * 2)}
          </a>
        </div>
      </div>
      <div className="contact-category">
        <p>Or connect with me with on:</p>
        <div className="contact-items">
          <a className="linkedin" href={contactDetails.linkedin}>
            <img src={linkedinIcon} alt="LinkedIn logo" />
            LinkedIn
          </a>
          <a className="github" href={contactDetails.github}>
            <img src={githubIcon} alt="GitHub logo" />
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
