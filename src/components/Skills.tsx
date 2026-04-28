import { skillsContent } from '../content/skills';

const Skills = () => (
  <section className="section" id="skills">
    <div className="container">
      <p className="section-label">Expertise</p>
      <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>
        Skills &amp; Technologies
      </h2>
      <div className="skills-grid">
        {skillsContent.map((group) => (
          <div key={group.title} className="card">
            <p className="skill-category-title">{group.title}</p>
            <div className="skill-chips">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
