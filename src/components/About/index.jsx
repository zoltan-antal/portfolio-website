import './index.css';
import { Link } from 'react-router-dom';
import wipIcon from '../../assets/images/icons/wip.svg';
import cv from '../../assets/files/Zoltan_Antal-CV.pdf';

const About = () => {
  const mobileLayout =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const downloadCV = () => {
    const cvDownloadLink = document.createElement('a');
    cvDownloadLink.href = cv;
    cvDownloadLink.setAttribute('download', 'Zoltan_Antal-CV.pdf');
    cvDownloadLink.click();
  };

  const viewCV = () => {
    window.open(cv, '_blank', 'noopener,noreferrer');
  };

  console.log(Object.keys(cv));

  return (
    <main className="about">
      <h1>About me</h1>
      <div className="info">
        <div className="introduction">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
          <div className="button-group" id="cv-buttons">
            {!mobileLayout && <button onClick={viewCV}>View my CV</button>}
            <button onClick={downloadCV}>Download my CV</button>
          </div>
        </div>
        <img className="photo" src={wipIcon} alt="Portrait" />
      </div>
      <div className="button-group">
        <Link to="/projects">
          <button>Take a look at my work</button>
        </Link>
        <Link to="/skills">
          <button>View my skillset</button>
        </Link>
      </div>
      {/* <p>
        Hey there! I&apos;m Zoltan, a full-stack software developer specialising
        in web development. With a background in Aerospace Engineering I bring a
        unique blend of analytical thinking and creative problem-solving to
        every project.
      </p>
      <p>
        My web development toolkit includes React for front-end, ExpressJS for
        back-end, and MongoDB & PostgreSQL for database management. Whether
        it&apos;s building engaging user-interfaces or designing scalable
        backend systems, I&apos;m dedicated to delivering high-quality solutions
        that exceed expectations.
      </p>
      <p>
        In my free time, I enjoy tackling coding challenges using Python,
        constantly seeking to hone my problem-solving skills and explore new
        concepts.
      </p> */}
    </main>
  );
};

export default About;
