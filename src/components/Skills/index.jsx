import './index.css';
import technologies from '../../constants/technologies';
import softwareSkills from '../../constants/softwareSkills';
import languageSkills from '../../constants/languageSkills';

const Skills = () => {
  const mobileLayout =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

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
                  src={technology.icon}
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
              <thead>
                <tr>
                  <th>Languages</th>
                  <th>Frameworks</th>
                  <th>Dev tools & Libraries</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th colSpan={3}>Core competencies</th>
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
                  <td>{renderTechnologyGroup('languages', 'low')}</td>
                  <td>{renderTechnologyGroup('frameworks', 'low')}</td>
                  <td>{renderTechnologyGroup('tools', 'low')}</td>
                </tr>
              </tbody>
            </>
          ) : (
            <tbody className="mobile">
              <tr>
                <th>Languages</th>
              </tr>
              <tr>
                <td>
                  <strong>Core competencies</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('languages', 'high')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Familiar with</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('languages', 'low')}</td>
              </tr>
              <tr>
                <th>Frameworks</th>
              </tr>
              <tr>
                <td>
                  <strong>Core competencies</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('frameworks', 'high')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Familiar with</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('frameworks', 'low')}</td>
              </tr>
              <tr>
                <th>Dev tools & Libraries</th>
              </tr>
              <tr>
                <td>
                  <strong>Core competencies</strong>
                </td>
              </tr>
              <tr>
                <td>{renderTechnologyGroup('tools', 'high')}</td>
              </tr>
              <tr>
                <td>
                  <strong>Familiar with</strong>
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
          <thead>
            <tr>
              <th>Language</th>
              <th>Level</th>
              <th>CEFR level</th>
            </tr>
          </thead>
          <tbody>
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
