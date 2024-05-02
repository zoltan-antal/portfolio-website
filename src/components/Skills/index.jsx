import './index.css';
import skills from '../../constants/skills';
import technologies from '../../constants/technologies';

const Skills = () => {
  const renderTechnologyGroup = (category, familiarity) => {
    return (
      <div className="technology-group">
        {skills
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
      <table>
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
            <td colSpan={3}>Proficient skills</td>
          </tr>
          <tr>
            <td>{renderTechnologyGroup('languages', 'high')}</td>
            <td>{renderTechnologyGroup('frameworks', 'high')}</td>
            <td>{renderTechnologyGroup('tools', 'high')}</td>
          </tr>
          <tr>
            <td colSpan={3}>Familiar skills</td>
          </tr>
          <tr>
            <td>{renderTechnologyGroup('languages', 'low')}</td>
            <td>{renderTechnologyGroup('frameworks', 'low')}</td>
            <td>{renderTechnologyGroup('tools', 'low')}</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Skills;
