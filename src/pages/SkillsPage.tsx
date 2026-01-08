import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import { SkillCategory } from '../types';
import Card from '../components/shared/Card';

const SkillsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Machine Learning Skills',
      skills: [
        { name: 'Python', icon: 'logos:python', iconType: 'iconify' },
        { name: 'Scikit-Learn', icon: 'simple-icons:scikitlearn', iconType: 'iconify' },
        { name: 'Tensorflow', icon: 'logos:tensorflow', iconType: 'iconify' },
        { name: 'Natural Language Processing', icon: 'mdi:translate', iconType: 'iconify' },
        { name: 'Computer Vision', icon: 'mdi:eye-outline', iconType: 'iconify' },
      ],
    },
    {
      title: 'Data Science Skills',
      skills: [
        { name: 'Pandas', icon: 'devicon:pandas', iconType: 'iconify' },
        { name: 'Matplotlib', icon: 'devicon:matplotlib', iconType: 'iconify' },
        { name: 'Exploratory Data Analysis', icon: 'mdi:chart-bar', iconType: 'iconify' },
        { name: 'A/B Testing', icon: 'mdi:flask-outline', iconType: 'iconify' },
      ],
    },
    {
      title: 'Software Development Skills',
      skills: [
        { name: 'Git', icon: 'skill-icons:git', iconType: 'iconify' },
        { name: 'HTML5', icon: 'bx bxl-html5', iconType: 'boxicon' },
        { name: 'JAVASCRIPT', icon: 'bx bxl-javascript', iconType: 'boxicon' },
        { name: 'React', icon: 'bx bxl-react', iconType: 'boxicon' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-light', iconType: 'iconify' },
        { name: 'Node.js', icon: 'bx bxl-nodejs', iconType: 'boxicon' },
      ],
    },
  ];

  const renderIcon = (skill: { icon: string; iconType?: string }) => {
    if (skill.iconType === 'image') {
      return <img className="skills-icon" src={skill.icon} alt={skill.icon} />;
    } else if (skill.iconType === 'iconify') {
      // Logo icons should not have color override, others should
      const isLogoIcon = skill.icon.startsWith('logos:') || skill.icon.startsWith('simple-icons:');
      return (
        <Icon
          icon={skill.icon}
          className="skills-icon"
          width="2.5rem"
          height="2.5rem"
          style={isLogoIcon ? {} : { color: 'var(--primary-teal)' }}
        />
      );
    } else {
      return <i className={`${skill.icon} skills-icon`}></i>;
    }
  };

  return (
    <div className="page-container">
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
    </div>
  );
};

export default SkillsPage;

