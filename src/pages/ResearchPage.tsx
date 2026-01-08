import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Research {
  id: string;
  title: string;
  description: string;
  publication?: string;
  link?: string;
}

const ResearchPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const research: Research[] = [
    {
      id: '1',
      title: '2048 Game Strategy Analysis',
      description: 'Research paper on reinforcement learning strategies...',
      publication: 'International Journal',
      link: 'https://doi.org/10.37118/ijdr.20323.11.2020',
    },
    // Add more research items here
  ];

  return (
    <div className="page-container">
      <section className="research-page section" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Research
        </motion.h2>
        <div className="research-container">
          {research.map((item, index) => (
            <motion.div
              key={item.id}
              className="research-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.publication && <p className="publication">{item.publication}</p>}
              {item.link && (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="research-link">
                  View Publication
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;

