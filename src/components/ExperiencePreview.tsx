import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AutoScrollCarousel from './shared/AutoScrollCarousel';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location?: string;
  description: string;
}

const ExperiencePreview = () => {
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
      description: 'Delivered multiple client-facing AI products on structured and relational datasets, translating ambiguous business questions into agentic workflows that supported ~$300K in closed revenue. Led end-to-end development of Attorney Draw Automation, generating ~$120K in revenue.',
    },
    {
      id: '2',
      title: 'Founding AI Engineer',
      company: 'Stealth Startup',
      location: 'San Jose, CA',
      period: 'June 2025 - September 2025',
      description: 'Built and shipped multi-agent systems using LangGraph, owning agent design, orchestration, evaluation, and iteration from prototype to production; reduced time-to-ship by 46% while achieving 91% task success.',
    },
    {
      id: '3',
      title: 'AI Engineer',
      company: 'EasyBee AI',
      location: 'Boston, MA',
      period: 'May 2024 - May 2025',
      description: 'Built CI/CD pipelines for ML workflows using GitHub Actions, automating AWS infrastructure for scalable model deployment. Re-architected monolithic ML systems into modular LLM agents, improving scalability and reducing development time by 75%.',
    },
    {
      id: '4',
      title: 'Full-Stack Developer',
      company: 'HER Heard',
      location: 'Cambridge, MA',
      period: 'January 2024 - April 2024',
      description: 'Orchestrated tech stack migration from Flutter to Node.js, Express.js, Firebase, enhancing data-driven analytics and boosting application performance by 30%, resulting in improved customer experience.',
    },
    {
      id: '5',
      title: 'Full-Stack Developer',
      company: 'Intelligence Techsol Pvt Ltd',
      location: 'India',
      period: 'March 2021 - March 2022',
      description: 'Built a Python-based backend pipeline for invoice data extraction across varied formats, reducing manual reconciliation errors by 91.8%.',
    },
  ];

  return (
    <section className="experience-preview section" id="experience" ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>
        <Link to="/experience" className="explore-link">
          Explore Experience <i className="bx bx-right-arrow-alt"></i>
        </Link>
      </motion.div>
      <AutoScrollCarousel speed={20}>
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="carousel-experience-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <div className="carousel-exp-header">
              <div>
                <h3 className="carousel-exp-title">{exp.title}</h3>
                <h4 className="carousel-exp-company">{exp.company}</h4>
                {exp.location && <p className="carousel-exp-location">{exp.location}</p>}
              </div>
              <p className="carousel-exp-period">{exp.period}</p>
            </div>
            <p className="carousel-exp-description">{exp.description}</p>
          </motion.div>
        ))}
      </AutoScrollCarousel>
    </section>
  );
};

export default ExperiencePreview;

