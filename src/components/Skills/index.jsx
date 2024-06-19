import './index.css';
import { useOutletContext } from 'react-router-dom';
import technologies from '../../constants/technologies';
import softwareSkills from '../../constants/softwareSkills';
import languageSkills from '../../constants/languageSkills';

const Skills = () => {
  const mobileLayout =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const { darkMode } = useOutletContext();

  const renderTechnologyGroup = (category, familiarity) => {
    return (
      <div className="technology-group">
        {softwareSkills
          .filter(
            (skill) =>
              skill.category === category && skill.familiarity === familiarity
          )
          .map((skill) => {
            const technology = technologies[skill.technology];

            return (
              <div key={skill.technology} className="technology">
                <img
                  className="logo"
                  src={
                    !darkMode
                      ? technology.icon
                      : technology.iconDark || technology.icon
                  }
                  alt={`${technology.name} logo`}
                />
                <span className="name">
                  {technology.name.split(' ').join('\n')}
                </span>
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <main className="skills">
      <h1>My Skills</h1>
      <div className="section software-skills">
        <h2>Software skills</h2>
        <table className={`software-skills`}>
          {!mobileLayout ? (
            <>
              <tbody>
                <tr>
                  <th colSpan={3}>Core competencies</th>
                </tr>
                <tr>
                  <td>
                    <strong>Languages</strong>
                  </td>
                  <td>
                    <strong>Frameworks</strong>
                  </td>
                  <td>
                    <strong>Dev tools & Libraries</strong>
                  </td>
                </tr>
                <tr>
                  <td>{renderTechnologyGroup('languages', 'high')}</td>
                  <td>{renderTechnologyGroup('frameworks', 'high')}</td>
                  <td>{renderTechnologyGroup('tools', 'high')}</td>
                </tr>
                <tr>
                  <th colSpan={3}>Familiar with</th>
                </tr>
                <tr>
                  <td>
                    <strong>Languages</strong>
                  </td>
                  <td>
                    <strong>Frameworks</strong>
                  </td>
                  <td>
                    <strong>Dev tools & Libraries</strong>
                  </td>
                </tr>
                <tr>
                  <td>{renderTechnologyGroup('languages', 'low')}</td>
                  <td>{renderTechnologyGroup('frameworks', 'low')}</td>
                  <td>{renderTechnologyGroup('tools', 'low')}</td>
                </tr>
              </tbody>
            </>
          ) : (
            <tbody>
              <tr>
                <th>Core competencies</th>
              </tr>
              <tr>
                <td>
                  <strong>Languages</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('languages', 'high')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Frameworks</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('frameworks', 'high')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Dev tools & Libraries</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('tools', 'high')}</td>
              </tr>
              <tr>
                <th>Familiar with</th>
              </tr>
              <tr>
                <td>
                  <strong>Languages</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('languages', 'low')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Frameworks</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('frameworks', 'low')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Dev tools & Libraries</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('tools', 'low')}</td>
              </tr>
            </tbody>
          )}
        </table>
        <p className="disclaimer">
          *I&apos;m of course happy to learn and work with technologies not
          listed here.
        </p>
      </div>
      <div className="section other-skills">
        <h2>Other skills</h2>
        <table className="languages">
          <caption>Languages</caption>
          <tbody>
            <tr>
              <th>Language</th>
              <th>Level</th>
              <th>CEFR level</th>
            </tr>
            {languageSkills.map((skill) => (
              <tr key={skill.language}>
                <td>{skill.language}</td>
                <td>{skill.level}</td>
                <td>{skill.cefr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Skills;
