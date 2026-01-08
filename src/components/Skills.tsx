import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import nlpIcon from '../../Assets/imgs/natural-language-processing.png';
import visionIcon from '../../Assets/imgs/vision.png';
import explorationIcon from '../../Assets/imgs/exploration.png';
import abTestingIcon from '../../Assets/imgs/ab-testing.png';
import codeIcon from '../../Assets/imgs/code.png';
import expressIcon from '../../Assets/imgs/express.png';
import { SkillCategory } from '../types';
import Card from './shared/Card';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Machine Learning Skills',
      skills: [
        { name: 'Python', icon: 'skill-icons--python-light', iconType: 'iconify' },
        { name: 'Scikit-Learn', icon: 'skill-icons--scikitlearn-light', iconType: 'iconify' },
        { name: 'Tensorflow', icon: 'skill-icons--tensorflow-light', iconType: 'iconify' },
        { name: 'Natural Language Processing', icon: nlpIcon, iconType: 'image' },
        { name: 'Computer Vision', icon: visionIcon, iconType: 'image' },
      ],
    },
    {
      title: 'Data Science Skills',
      skills: [
        { name: 'Pandas', icon: 'devicon--pandas-wordmark', iconType: 'iconify' },
        { name: 'Matplotlib', icon: 'devicon--matplotlib-wordmark', iconType: 'iconify' },
        { name: 'Exploratory Data Analysis', icon: explorationIcon, iconType: 'image' },
        { name: 'A/B Testing', icon: abTestingIcon, iconType: 'image' },
      ],
    },
    {
      title: 'Software Development Skills',
      skills: [
        { name: 'Git', icon: codeIcon, iconType: 'image' },
        { name: 'HTML5', icon: 'bx bxl-html5', iconType: 'boxicon' },
        { name: 'JAVASCRIPT', icon: 'bx bxl-javascript', iconType: 'boxicon' },
        { name: 'React', icon: 'bx bxl-react', iconType: 'boxicon' },
        { name: 'Express.js', icon: expressIcon, iconType: 'image' },
        { name: 'Node.js', icon: 'bx bxl-nodejs', iconType: 'boxicon' },
      ],
    },
  ];

  const renderIcon = (skill: { icon: string; iconType?: string }) => {
    if (skill.iconType === 'image') {
      return <img className="skills-icon" src={skill.icon} alt={skill.icon} />;
    } else if (skill.iconType === 'iconify') {
      return (
        <i
          className={`${skill.icon} skills-icon`}
          style={{ display: 'inline-block', width: '2.5rem', height: '2.5rem' }}
        ></i>
      );
    } else {
      return <i className={`${skill.icon} skills-icon`}></i>;
    }
  };

  return (
    <section className="skills section" id="skills" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="skills-container bd-grid">
        {skillCategories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="skills-category-card">
            <motion.h2
              className="skills-subtitle"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            >
              {category.title}
            </motion.h2>
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                className="skills-data"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{
                  delay: categoryIndex * 0.1 + skillIndex * 0.05,
                  duration: 0.4,
                }}
              >
                <div className="skills-names">
                  {renderIcon(skill)}
                  <span className="skills-name">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
