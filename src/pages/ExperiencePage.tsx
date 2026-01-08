import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  achievements: string[];
  technologies: string[];
}

const ExperiencePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      id: '1',
      title: 'AI Solutions Engineer',
      company: 'Attri AI',
      location: 'Austin, TX',
      period: 'September 2025 - Present',
      achievements: [
        'Delivered multiple client-facing AI products on structured and relational datasets, translating ambiguous business questions into agentic workflows that supported ~$300K in closed revenue',
        'Led end-to-end development of the Attorney Draw Automation, an AI-assisted system operating over relational billing; owned requirements, SQL logic, client demos, and UAT, generating ~$120K in revenue',
        'Architected a secure Legal AI Sandbox combining RAG, structured metadata retrieval, and role-based guardrails, enabling interpretable, auditable AI outputs for enterprise workflows in a SOC-aligned production environment',
        'Coordinated closely with PMs, designers, DevOps, and offshore engineering teams to ship production AI systems, unblock execution, and align agent behavior with real customer workflows',
      ],
      technologies: ['Python', 'Agentic AI', 'RAG', 'SQL', 'Systems Design', 'LLM Workflows', 'Production AI'],
    },
    {
      id: '2',
      title: 'Founding AI Engineer',
      company: 'Stealth Startup',
      location: 'San Jose, CA',
      period: 'June 2025 - September 2025',
      achievements: [
        'Built and shipped multi-agent systems using LangGraph, owning agent design, orchestration, evaluation, and iteration from prototype to production; reduced time-to-ship by 46% while achieving 91% task success',
        'Implemented production guardrails, observability, and reliability for LLM workflows (fallbacks, retries, eval hooks), maintaining 93% uptime in a fast-moving startup environment',
      ],
      technologies: ['Python', 'LangGraph', 'Multi-Agent Systems', 'LLM Workflows', 'Production Systems'],
    },
    {
      id: '3',
      title: 'AI Engineer',
      company: 'EasyBee AI',
      location: 'Boston, MA',
      period: 'May 2024 - May 2025',
      achievements: [
        'Built CI/CD pipelines for ML workflows using GitHub Actions, automating AWS infrastructure for scalable model deployment; reduced manual release overhead by 60%',
        'Re-architected monolithic ML systems into modular LLM agents using LangChain and LangGraph; improved scalability and reduced development time by 75%',
        'Instrumented agent behavior using LangSmith for tracing, evaluation, and debugging, improving reliability and developer trust in production LLM systems',
        'Improved AI service security by developing centralized access control with API Gateway and AWS Lambda',
        'Led full lifecycle ML solution development from model design to production deployment, leveraging LangSmith for model observability and ensuring high availability of AI-driven products',
      ],
      technologies: ['Python', 'LangChain', 'LangGraph', 'LangSmith', 'AWS', 'CI/CD', 'GitHub Actions', 'MLOps'],
    },
    {
      id: '4',
      title: 'Full-Stack Developer',
      company: 'HER Heard',
      location: 'Cambridge, MA',
      period: 'January 2024 - April 2024',
      achievements: [
        'Orchestrated the tech stack migration from Flutter to Node.js, Express.js, Firebase for authentication, enhancing data-driven analytics and boosting application performance by 30%, resulting in improved customer experience',
        'Refined application functionality through continuous improvements, integrating customer feedback to optimize workflows and delivering a more intuitive, user-centric experience',
      ],
      technologies: ['Node.js', 'Express.js', 'Firebase', 'JavaScript', 'Full-Stack Development'],
    },
    {
      id: '5',
      title: 'Full-Stack Developer',
      company: 'Intelligence Techsol Pvt Ltd',
      location: 'India',
      period: 'March 2021 - March 2022',
      achievements: [
        'Built a Python-based backend pipeline for invoice data extraction across varied formats, reducing manual reconciliation errors by 91.8%',
      ],
      technologies: ['Python', 'Backend Development', 'Data Extraction', 'Full-Stack Development'],
    },
  ];

  return (
    <div className="page-container">
      <section className="experience-page section" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  {exp.location && <p className="location">{exp.location}</p>}
                </div>
                <p className="period">{exp.period}</p>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
              <div className="tech-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;

