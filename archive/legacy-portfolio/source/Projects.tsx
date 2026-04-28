import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Project } from '../types';
import Card from './shared/Card';
import lawImg from '../../Assets/imgs/law.webp';
import socialMediaImg from '../../Assets/imgs/social_media.webp';
import game2048Img from '../../Assets/imgs/2048.webp';
import sentimentImg from '../../Assets/imgs/sentiment.webp';
import multimodalImg from '../../Assets/imgs/multi_modal.webp';
import plagiarismImg from '../../Assets/imgs/plagarism.webp';
import augmentedImg from '../../Assets/imgs/augmented.webp';
import creditImg from '../../Assets/imgs/credit.webp';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    { id: '1', title: 'Benchmarking LLM Chatbots: Innovations in Legal Assistance', image: lawImg, githubUrl: 'https://github.com/Atharva-Pandkar/LTB_Ontario', description: 'Legacy snapshot', technologies: 'NLP | Data Wrangling  | Machine Learning | Python | Information Retrieval' },
    { id: '2', title: 'Social Media Influencer Marketing', image: socialMediaImg, description: 'Legacy snapshot', technologies: 'API Integration | Data Analysis  | Graph Analysis | Python | Markov Chain' },
    { id: '3', title: '2048 Detailed comparasion of strategies', image: game2048Img, description: 'Legacy snapshot', technologies: 'Artificial Intelligence | Reinforcement Learning  | Game Development | Monte Carlo Tree Search | Research Analysis', externalUrl: 'https://doi.org/10.37118/ijdr.20323.11.2020' },
    { id: '4', title: 'Twitter Sentiment Analysis', image: sentimentImg, description: 'Legacy snapshot', technologies: 'Natural Language Processing | Machine Learning  | Flask | Python | Data Visualizaiton' },
    { id: '5', title: 'Multimodal Gesture Recognition', image: multimodalImg, description: 'Legacy snapshot', technologies: 'Computer Vision | Gesture Recognition  | Multimodal Systems | Python | Deep Learning', githubUrl: 'https://github.com/Atharva-Pandkar/Hand-Gesture-Recognition' },
    { id: '6', title: 'Handwritten Text Recognition', image: plagiarismImg, description: 'Legacy snapshot', technologies: 'Natural Language Processing | Handwriting Recognition  | Plagiarism Detection | Computer Vision | Deep Learning', githubUrl: 'https://github.com/Atharva-Pandkar/MNIST-Detection' },
    { id: '7', title: 'Reality Mapper', image: augmentedImg, description: 'Legacy snapshot', technologies: 'Augmented Reality | Computer Vision  | Camera Calibration | Image Processing | 3D Mapping', githubUrl: 'https://github.com/Atharva-Pandkar/Calibaration---Augmented-Reality' },
    { id: '8', title: 'Credit Risk Prediction', image: creditImg, description: 'Legacy snapshot', technologies: 'Machine Learning | Predictive Modeling  | Credit Risk Analysis | Data Analysis | Comparative Analysis', githubUrl: 'https://github.com/Atharva-Pandkar/Credit-Risk-Prediction' }
  ];

  return (
    <section className="projects section" id="projects" ref={ref}>
      <motion.h2 className="section-title">Projects</motion.h2>
      <div className="project-container">
        {projects.map((project) => (
          <Card key={project.id} hover={true}>
            <motion.div className="project-img">
              <div className="diver">
                <motion.img className="imageheight" src={project.image} alt={project.title} />
              </div>
              <p className="project-title">{project.title}</p>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
