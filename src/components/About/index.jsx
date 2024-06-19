import './index.css';
import { Link } from 'react-router-dom';
import profilePicture from '../../assets/images/photos/profile-picture.jpg';
import cv from '../../assets/files/Zoltan_Antal-CV.pdf';
import aboutMe from '../../constants/aboutMe';

const About = () => {
  // const mobileLayout =
  //   /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );

  const downloadCV = () => {
    const cvDownloadLink = document.createElement('a');
    cvDownloadLink.href = cv;
    cvDownloadLink.setAttribute('download', 'Zoltan_Antal-CV.pdf');
    cvDownloadLink.click();
  };

  // const viewCV = () => {
  //   window.open(cv, '_blank', 'noopener,noreferrer');
  // };

  return (
    <main className="about">
      <h1>About me</h1>
      <div className="info">
        <div className="introduction">
          {aboutMe}
          <div className="button-group" id="cv-buttons">
            {/* {!mobileLayout && <button onClick={viewCV}>View my CV</button>} */}
            <button onClick={downloadCV}>Download my CV</button>
          </div>
        </div>
        <img className="photo" src={profilePicture} alt="Portrait" />
      </div>
      <div className="button-group">
        <Link to="/projects">
          <button>Take a look at my work</button>
        </Link>
        <Link to="/skills">
          <button>View my skillset</button>
        </Link>
      </div>
    </main>
  );
};

export default About;
