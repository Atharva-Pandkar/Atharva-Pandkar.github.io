import { ProjectItem } from '../types/content';

export const projectsContent: ProjectItem[] = [
  {
    id: '1',
    title: 'Benchmarking LLM Chatbots: Innovations in Legal Assistance',
    description:
      'This project developed an LLM chatbot designed to provide accessible legal assistance, with a focus on landlord-tenant law. A corpus of information was drawn from the LTB website and integrated into a Retrieval-Augmented Generation (RAG) pipeline. Vector embeddings were used to optimize search efficiency. Performance benchmarking of models like GPT-3.5, GPT-2, and LLaMA 2b guided the fine-tuning of the chatbot, ensuring accurate and timely responses to user queries.',
    technologies: ['NLP', 'Data Wrangling', 'Machine Learning', 'Python', 'Information Retrieval'],
    githubUrl: 'https://github.com/Atharva-Pandkar/LTB_Ontario',
  },
  {
    id: '2',
    title: 'Social Media Influencer Marketing',
    description:
      'This project developed a comprehensive social media analysis tool designed to enhance influencer marketing strategies. Using APIs, the tool collected data from over 10,000 Instagram profiles. Graph analysis techniques and Gephi were employed for in-depth data exploration, while Python-powered Markov Chain algorithms calculated influencer rankings. The project achieved a 75% increase in targeted marketing effectiveness.',
    technologies: ['API Integration', 'Data Analysis', 'Graph Analysis', 'Python', 'Markov Chain'],
  },
  {
    id: '3',
    title: '2048 Detailed comparasion of strategies',
    description:
      'This project transformed the classic game of 2048 by integrating advanced artificial intelligence techniques. Utilizing Python, reinforcement learning, and Monte Carlo Tree Search, the AI-powered version strategically analyzed gameplay. In-depth exploration of reward strategies led to the publication of a research paper.',
    technologies: ['Artificial Intelligence', 'Reinforcement Learning', 'Game Development', 'Monte Carlo Tree Search', 'Research Analysis'],
    externalUrl: 'https://doi.org/10.37118/ijdr.20323.11.2020',
  },
  {
    id: '4',
    title: 'Twitter Sentiment Analysis',
    description:
      'This project created a real-time sentiment analysis platform designed to track public opinion surrounding COVID-19. Leveraging LSTM neural networks and Python Flask, the platform analyzed Twitter data to classify sentiment with 87% accuracy and presented the results on a dynamic web interface.',
    technologies: ['Natural Language Processing', 'Machine Learning', 'Flask', 'Python', 'Data Visualization'],
  },
  {
    id: '5',
    title: 'Multimodal Gesture Recognition',
    description:
      'This project developed a multimodal gesture recognition system integrating vision and gesture recognition technologies. Using the ResNet 106 model, the system achieved 98% accuracy for hand gestures representing English alphabets and 76% performance in language recognition tasks.',
    technologies: ['Computer Vision', 'Gesture Recognition', 'Multimodal Systems', 'Python', 'Deep Learning'],
    githubUrl: 'https://github.com/Atharva-Pandkar/Hand-Gesture-Recognition',
  },
  {
    id: '6',
    title: 'Handwritten Text Recognition',
    description:
      'This project focused on developing an efficient handwritten text recognition system for plagiarism detection. Leveraging GRU neural networks, the system significantly improved text extraction and analysis from PDF documents, ultimately achieving an 85% F1 score.',
    technologies: ['Natural Language Processing', 'Handwriting Recognition', 'Plagiarism Detection', 'Computer Vision', 'Deep Learning'],
    githubUrl: 'https://github.com/Atharva-Pandkar/MNIST-Detection',
  },
  {
    id: '7',
    title: 'Reality Mapper',
    description:
      'This project created an augmented reality system designed to enhance immersive experiences. The system used camera calibration with a chessboard to map image coordinates to real-world coordinates, enabling accurate placement of virtual objects in live scenes.',
    technologies: ['Augmented Reality', 'Computer Vision', 'Camera Calibration', 'Image Processing', '3D Mapping'],
    githubUrl: 'https://github.com/Atharva-Pandkar/Calibaration---Augmented-Reality',
  },
  {
    id: '8',
    title: 'Credit Risk Prediction',
    description:
      'This project developed credit risk prediction models for financial institutions, evaluating KNN, Logistic Regression, Decision Trees, and Neural Networks. Working with a dataset of 1000 applicants, the project achieved predictive accuracies up to 85% and identified key contributors to reliable risk assessment.',
    technologies: ['Machine Learning', 'Predictive Modeling', 'Credit Risk Analysis', 'Data Analysis', 'Comparative Analysis'],
    githubUrl: 'https://github.com/Atharva-Pandkar/Credit-Risk-Prediction',
  },
];
