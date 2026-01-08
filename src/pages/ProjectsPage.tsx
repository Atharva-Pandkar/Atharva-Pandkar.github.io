import { motion } from 'framer-motion';
import { Project } from '../types';
import Card from '../components/shared/Card';
import lawImg from '../../Assets/imgs/law.webp';
import socialMediaImg from '../../Assets/imgs/social_media.webp';
import game2048Img from '../../Assets/imgs/2048.webp';
import sentimentImg from '../../Assets/imgs/sentiment.webp';
import multimodalImg from '../../Assets/imgs/multi_modal.webp';
import plagiarismImg from '../../Assets/imgs/plagarism.webp';
import augmentedImg from '../../Assets/imgs/augmented.webp';
import creditImg from '../../Assets/imgs/credit.webp';

const ProjectsPage = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Benchmarking LLM Chatbots: Innovations in Legal Assistance',
      description: `This project developed an LLM chatbot designed to provide accessible legal assistance, with a focus on landlord-tenant law.
      A corpus of information was drawn from the LTB website and integrated into a Retrieval-Augmented Generation (RAG) pipeline.
       Vector embeddings were used to optimize search efficiency. Performance benchmarking of models like GPT-3.5, GPT-2, and LLaMA 2b guided 
       the fine-tuning of the chatbot, ensuring accurate and timely responses to user queries.`,
      technologies: 'NLP | Data Wrangling  | Machine Learning | Python | Information Retrieval',
      image: lawImg,
      githubUrl: 'https://github.com/Atharva-Pandkar/LTB_Ontario',
    },
    {
      id: '2',
      title: 'Social Media Influencer Marketing',
      description: `This project developed a comprehensive social media analysis tool designed to enhance influencer marketing strategies. 
      Using APIs, the tool collected data from over 10,000 Instagram profiles. Graph analysis techniques and Gephi were employed 
      for in-depth data exploration, while Python-powered Markov Chain algorithms calculated influencer rankings. 
      The project's success was demonstrated by its ability to significantly boost targeted marketing efforts, achieving a 75% increase in effectiveness.`,
      technologies: 'API Integration | Data Analysis  | Graph Analysis | Python | Markov Chain',
      image: socialMediaImg,
    },
    {
      id: '3',
      title: '2048 Detailed comparasion of strategies',
      description: `This project transformed the classic game of 2048 by integrating advanced artificial intelligence techniques. 
       Utilizing Python, reinforcement learning, and Monte Carlo Tree Search, the AI-powered version strategically analyzed gameplay.
         In-depth exploration of reward strategies led to the publication of a research paper.`,
      technologies: 'Artificial Intelligence | Reinforcement Learning  | Game Development | Monte Carlo Tree Search | Research Analysis',
      image: game2048Img,
      externalUrl: 'https://doi.org/10.37118/ijdr.20323.11.2020',
    },
    {
      id: '4',
      title: 'Twitter Sentiment Analysis',
      description: `This innovative project created a real-time sentiment analysis platform designed to track public opinion surrounding COVID-19.  Leveraging LSTM neural networks and Python Flask, the platform analyzed Twitter data to classify sentiment with high accuracy (87%).
      Results were presented dynamically on a web page, providing valuable and timely insights into public sentiment during the pandemic.`,
      technologies: 'Natural Language Processing | Machine Learning  | Flask | Python | Data Visualizaiton',
      image: sentimentImg,
    },
    {
      id: '5',
      title: 'Multimodal Gesture Recognition',
      description: `This project developed a cutting-edge multimodal gesture recognition system, seamlessly integrating vision and gesture recognition technologies.
      Utilizing the ResNet 106 model, the system achieved impressive accuracy in recognizing hand gestures representing English alphabets (98%) 
      and made significant strides in language recognition tasks (76%).`,
      technologies: 'Computer Vision | Gesture Recognition  | Multimodal Systems | Python | Deep Learning',
      image: multimodalImg,
      githubUrl: 'https://github.com/Atharva-Pandkar/Hand-Gesture-Recognition',
    },
    {
      id: '6',
      title: 'Handwritten Text Recognition',
      description: `This project focused on developing an efficient handwritten text recognition system for the purpose of plagiarism detection.
       Leveraging GRU neural networks, the system significantly improved text extraction and analysis capabilities from PDF documents.
         The project demonstrated adaptability through the transition from LeNet-5 CNN architecture, ultimately achieving an impressive 85% F1 score.`,
      technologies: 'Natural Language Processing | Handwriting Recognition  | Plagiarism Detection | Computer Vision | Deep Learning',
      image: plagiarismImg,
      githubUrl: 'https://github.com/Atharva-Pandkar/MNIST-Detection',
    },
    {
      id: '7',
      title: 'Reality Mapper',
      description: `This project created an innovative augmented reality (AR) system designed to enhance immersive experiences.
       The system utilized camera calibration with a chessboard to precisely map image coordinates to their real-world counterparts.
         This enabled the accurate and dynamic placement of virtual objects into live scenes, pushing the boundaries of AR technology.`,
      technologies: 'Augmented Reality | Computer Vision  | Camera Calibration | Image Processing | 3D Mapping',
      image: augmentedImg,
      githubUrl: 'https://github.com/Atharva-Pandkar/Calibaration---Augmented-Reality',
    },
    {
      id: '8',
      title: 'Credit Risk Prediction',
      description: `This project aimed to develop robust credit risk prediction models for financial institutions.
        It involved the evaluation and comparison of various machine learning algorithms, including K-Nearest Neighbors, Logistic Regression, Decision Trees,
         and Neural Networks. Working with a dataset of 1000 loan applicants, the project achieved predictive accuracies up to 85% and identified the key factors
          that contribute to accurate credit risk assessment.`,
      technologies: 'Machine Learning | Predictive Modeling  | Credit Risk Analysis | Data Analysis | Comparative Analysis',
      image: creditImg,
      githubUrl: 'https://github.com/Atharva-Pandkar/Credit-Risk-Prediction',
    },
  ];

  return (
    <div className="page-container">
      <section className="projects-page section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          All Projects
        </motion.h2>

        <div className="project-container">
          {projects.map((project, index) => (
            <Card key={project.id} hover={true}>
              <motion.div
                className="project-img"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
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
    </div>
  );
};

export default ProjectsPage;

