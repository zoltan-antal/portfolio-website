import './index.css';
import technologies from '../../constants/technologies';
import softwareSkills from '../../constants/softwareSkills';
import languageSkills from '../../constants/languageSkills';

const Skills = () => {
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
      <table className="software-skills">
        <caption>Software skills</caption>
        <thead>
          <tr>
            <th>Languages</th>
            <th>Frameworks</th>
            <th>Dev tools & Libraries</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>Core competencies</td>
          </tr>
          <tr>
            <td>{renderTechnologyGroup('languages', 'high')}</td>
            <td>{renderTechnologyGroup('frameworks', 'high')}</td>
            <td>{renderTechnologyGroup('tools', 'high')}</td>
          </tr>
          <tr>
            <td colSpan={3}>Familiar with</td>
          </tr>
          <tr>
            <td>{renderTechnologyGroup('languages', 'low')}</td>
            <td>{renderTechnologyGroup('frameworks', 'low')}</td>
            <td>{renderTechnologyGroup('tools', 'low')}</td>
          </tr>
        </tbody>
      </table>
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
    </main>
  );
};

export default Skills;
