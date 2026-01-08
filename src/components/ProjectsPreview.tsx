import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project } from '../types';
import Card from './shared/Card';
import lawImg from '../../Assets/imgs/law.webp';
import socialMediaImg from '../../Assets/imgs/social_media.webp';
import game2048Img from '../../Assets/imgs/2048.webp';

const ProjectsPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Show only first 3 projects as preview
  const previewProjects: Project[] = [
    {
      id: '1',
      title: 'Benchmarking LLM Chatbots: Innovations in Legal Assistance',
      description: `This project developed an LLM chatbot designed to provide accessible legal assistance, with a focus on landlord-tenant law.
      A corpus of information was drawn from the LTB website and integrated into a Retrieval-Augmented Generation (RAG) pipeline.`,
      technologies: 'NLP | Data Wrangling  | Machine Learning | Python | Information Retrieval',
      image: lawImg,
      githubUrl: 'https://github.com/Atharva-Pandkar/LTB_Ontario',
    },
    {
      id: '2',
      title: 'Social Media Influencer Marketing',
      description: `This project developed a comprehensive social media analysis tool designed to enhance influencer marketing strategies. 
      Using APIs, the tool collected data from over 10,000 Instagram profiles.`,
      technologies: 'API Integration | Data Analysis  | Graph Analysis | Python | Markov Chain',
      image: socialMediaImg,
    },
    {
      id: '3',
      title: '2048 Detailed comparasion of strategies',
      description: `This project transformed the classic game of 2048 by integrating advanced artificial intelligence techniques. 
       Utilizing Python, reinforcement learning, and Monte Carlo Tree Search.`,
      technologies: 'Artificial Intelligence | Reinforcement Learning  | Game Development | Monte Carlo Tree Search',
      image: game2048Img,
      externalUrl: 'https://doi.org/10.37118/ijdr.20323.11.2020',
    },
  ];

  return (
    <section className="projects-preview section" id="projects" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>
        <Link to="/projects" className="explore-link explore-projects-btn">
          Explore Projects <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </motion.div>

      <div className="project-container">
        {previewProjects.map((project, index) => (
          <Card key={project.id} hover={true}>
            <motion.div
              className="project-img"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="diver">
                <motion.img
                  className="imageheight"
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="project-title">{project.title}</p>
              <p className="project-subtitle">
                {project.description}
                <br />
                <br />
                <span style={{ color: 'var(--primary-teal)', fontWeight: 600 }}>
                  {project.technologies}
                </span>
              </p>
              <div className="project-btns">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-btn button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Code<i className="bx bxl-github"></i>
                  </motion.a>
                )}
                {project.externalUrl && (
                  <motion.a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="small-btn button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Link<i className="bx bx-link-external"></i>
                  </motion.a>
                )}
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;

