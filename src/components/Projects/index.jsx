import './index.css';

import projects from '../../constants/projects';
import technologies from '../../constants/technologies';

import githubIcon from '../../assets/images/icons/technologies/github.svg';
import linkIcon from '../../assets/images/icons/open-in-new.svg';
import desktopIcon from '../../assets/images/icons/desktop.svg';
import mobileIcon from '../../assets/images/icons/mobile.svg';
import darkModeIcon from '../../assets/images/icons/moon.svg';
import colourBlindIcon from '../../assets/images/icons/eye.svg';
import wipIcon from '../../assets/images/icons/wip.svg';

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>
      <h2>Main projects</h2>
      <div className="projects">
        {projects
          .filter((project) => project.category === 'main')
          .map((project) => (
            <div key={project.name} className="project">
              <img
                src={project.wip ? wipIcon : project.screenshot}
                alt={project.wip ? 'work in progress' : 'project screenshot'}
              />
              <div className="info">
                <div className="header">
                  <h3 className="name">{project.name}</h3>
                  <div className="feature-icons">
                    {project.desktop && (
                      <div data-tooltip="Desktop layout">
                        <img src={desktopIcon} alt="desktop-layout" />
                      </div>
                    )}
                    {project.mobile && (
                      <div data-tooltip="Mobile layout">
                        <img src={mobileIcon} alt="mobile-layout" />
                      </div>
                    )}
                    {project.darkMode && (
                      <div data-tooltip="Dark mode">
                        <img src={darkModeIcon} alt="dark-mode" />
                      </div>
                    )}
                    {project.colourblindFriendly && (
                      <div data-tooltip="Colourblind-friendly">
                        <img src={colourBlindIcon} alt="colourblind-friendly" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <div key={technology}>
                      {technologies[technology].name}{' '}
                      <img
                        src={technologies[technology].icon}
                        alt={`${technologies[technology].name} logo`}
                      />
                    </div>
                  ))}
                </div>
                <div className="description">{project.description}</div>
                <div className="links">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to app
                    <img src={linkIcon} alt="open-in-new-tab" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See code
                    <img src={githubIcon} alt="github-logo" />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Projects;
