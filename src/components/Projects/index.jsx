import './index.css';

import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import projects from '../../constants/projects';
import technologies from '../../constants/technologies';

import githubIcon from '../../assets/images/icons/technologies/github.svg';
import linkIcon from '../../assets/images/icons/open-in-new.svg';
import desktopIcon from '../../assets/images/icons/desktop.svg';
import mobileIcon from '../../assets/images/icons/mobile.svg';
import darkModeIcon from '../../assets/images/icons/moon.svg';
import colourBlindIcon from '../../assets/images/icons/eye.svg';
import wipIcon from '../../assets/images/icons/wip.svg';
import expandIcon from '../../assets/images/icons/chevron-down.svg';
import collapseIcon from '../../assets/images/icons/chevron-up.svg';

const Projects = () => {
  const { darkMode } = useOutletContext();
  const [allProjectsVisible, setAllProjectsVisible] = useState(false);

  const renderProject = (project) => {
    return (
      <div key={project.name} className="project">
        <div className="screenshot">
          <img
            src={project.wip ? wipIcon : project.screenshot}
            alt={project.wip ? 'work in progress' : 'project screenshot'}
            className={project.wip ? 'wip' : ''}
          />
        </div>
        <div className="info">
          <div className="header">
            <h3 className="name">
              {project.name + (project.wip ? '\n– WORK IN PROGRESS' : '')}
            </h3>
            <div className={`feature-icons${darkMode ? ' invert' : ''}`}>
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
                  src={
                    (darkMode ? technologies[technology].iconDark : false) ||
                    technologies[technology].icon
                  }
                  alt={`${technologies[technology].name} logo`}
                />
              </div>
            ))}
          </div>
          <div className="description">{project.description}</div>
          <div className="links">
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Go to app
                <img src={linkIcon} alt="open-in-new-tab" />
              </a>
            )}
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
    );
  };

  const toggleAllProjects = (e) => {
    setAllProjectsVisible((val) => !val);
    setTimeout(() => {
      e.target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 25);
  };

  return (
    <main className="projects">
      <h1>My Projects</h1>
      <div id="main-projects">
        <h2>Main projects</h2>
        <div className="projects">
          {projects
            .filter((project) => project.category === 'main')
            .map((project) => renderProject(project))}
        </div>
      </div>
      <div id="learning-projects" className="collapsible">
        <div className="header">
          <h2 onClick={toggleAllProjects}>Learning projects</h2>
          <p>
            Projects created earlier in my developer journey, showing my growth
            and experimentation with a limited toolset.
          </p>
          <button onClick={toggleAllProjects}>
            <img
              className={darkMode ? 'invert' : ''}
              src={allProjectsVisible ? collapseIcon : expandIcon}
              alt={allProjectsVisible ? 'hide' : 'show'}
            />
          </button>
        </div>
        <div className={`content ${allProjectsVisible ? 'visible' : 'hidden'}`}>
          <div className="projects">
            {projects
              .filter((project) => project.category === 'learning')
              .map((project) => renderProject(project))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
