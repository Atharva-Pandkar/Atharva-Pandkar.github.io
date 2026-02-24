import posthog from 'posthog-js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import resume from '../../Assets/Atharva_Pandkar_Resume.pdf';
import profileImage from '../../Assets/imgs/LinkedIn_Profile_Image.jpg';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="home bd-grid section" id="home" ref={ref}>
      <motion.div
        className="home-data"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="home-title" variants={itemVariants}>
          Hi,<br />
          I'm <span className="home-title-color">Atharva Pandkar</span>
          <br />
          <motion.span
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Machine Learning Engineer
          </motion.span>
        </motion.h2>
        <motion.div variants={itemVariants}>
          <motion.a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            download="Atharva_Pandkar_Resume.pdf"
            onClick={() => posthog.capture('resume_downloaded', { location: 'home_hero' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="home-social"
          variants={itemVariants}
        >
          <motion.a
            href="https://www.linkedin.com/in/atharva-pandkar"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-icon"
            onClick={() => posthog.capture('social_link_clicked', { platform: 'linkedin', location: 'home_hero' })}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="bx bxl-linkedin"></i>
          </motion.a>
          <motion.a
            href="https://github.com/Atharva-Pandkar"
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-icon"
            onClick={() => posthog.capture('social_link_clicked', { platform: 'github', location: 'home_hero' })}
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="bx bxl-github"></i>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="home-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <img
          className="home-imgsrc image round-img"
          src={profileImage}
          alt="Atharva Pandkar"
        />
      </motion.div>
    </section>
  );
};

export default Home;
