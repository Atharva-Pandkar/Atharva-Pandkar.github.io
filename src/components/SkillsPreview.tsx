import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import AutoScrollCarousel from './shared/AutoScrollCarousel';

const SkillsPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allSkills = [
    { name: 'Python', icon: 'logos:python', iconType: 'iconify' },
    { name: 'Scikit-Learn', icon: 'simple-icons:scikitlearn', iconType: 'iconify' },
    { name: 'Tensorflow', icon: 'logos:tensorflow', iconType: 'iconify' },
    { name: 'Natural Language Processing', icon: 'mdi:translate', iconType: 'iconify' },
    { name: 'Computer Vision', icon: 'mdi:eye-outline', iconType: 'iconify' },
    { name: 'Pandas', icon: 'devicon:pandas', iconType: 'iconify' },
    { name: 'Matplotlib', icon: 'devicon:matplotlib', iconType: 'iconify' },
    { name: 'Exploratory Data Analysis', icon: 'mdi:chart-bar', iconType: 'iconify' },
    { name: 'A/B Testing', icon: 'mdi:flask-outline', iconType: 'iconify' },
    { name: 'Git', icon: 'skill-icons:git', iconType: 'iconify' },
    { name: 'HTML5', icon: 'bx bxl-html5', iconType: 'boxicon' },
    { name: 'JAVASCRIPT', icon: 'bx bxl-javascript', iconType: 'boxicon' },
    { name: 'React', icon: 'bx bxl-react', iconType: 'boxicon' },
    { name: 'Express.js', icon: 'skill-icons:expressjs-light', iconType: 'iconify' },
    { name: 'Node.js', icon: 'bx bxl-nodejs', iconType: 'boxicon' },
  ];

  const renderIcon = (skill: { icon: string; iconType?: string }) => {
    if (skill.iconType === 'image') {
      return <img className="carousel-skill-icon" src={skill.icon} alt={skill.name} />;
    } else if (skill.iconType === 'iconify') {
      // Logo icons should not have color override, others should
      const isLogoIcon = skill.icon.startsWith('logos:') || skill.icon.startsWith('simple-icons:');
      return (
        <Icon
          icon={skill.icon}
          className="carousel-skill-icon"
          width="3rem"
          height="3rem"
          style={isLogoIcon ? {} : { color: 'var(--primary-teal)' }}
        />
      );
    } else {
      return <i className={`${skill.icon} carousel-skill-icon`}></i>;
    }
  };

  return (
    <section className="skills-preview section" id="skills" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>
        <Link to="/skills" className="explore-link">
          Explore Skills <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </motion.div>
      <AutoScrollCarousel speed={25}>
        {allSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="carousel-skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
          >
            {renderIcon(skill)}
            <span className="carousel-skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </AutoScrollCarousel>
    </section>
  );
};

export default SkillsPreview;

