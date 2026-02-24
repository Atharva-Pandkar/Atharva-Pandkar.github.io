import { useState } from 'react';
import posthog from 'posthog-js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('atharva.pandkar.1820@gmail.com');
      setCopied(true);
      posthog.capture('email_copied', { location: 'about_section' });
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
      posthog.captureException(err);
    }
  };

  return (
    <section className="about section" id="about" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        About
      </motion.h2>
      <motion.div
        className="about-container bd-grid"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div style={{ textAlign: 'center' }}>
          <p className="about-text">
            At Attri, as an AI Solutions Engineer Intern, my work centers on leveraging systems design and agentic AI to contribute to the development of innovative solutions. My role builds on prior experience as an AI Developer at EasyBee AI and a Founding AI Engineer at a stealth startup, where I gained exposure to operational management in artificial intelligence projects.
          </p>
          <p className="about-text">
            Currently with a Master's in Artificial Intelligence at Northeastern University, I complement my academic foundation with certifications in software engineering, artificial intelligence, and generative AI prompt engineering. My academic and professional journey reflects a commitment to advancing AI-driven technologies through practical application and continuous learning.
          </p>
          <br />
          <motion.p
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontSize: '1.125rem',
            }}
            whileHover={{ scale: 1.05 }}
          >
            Drop a mail @ atharva.pandkar.1820@gmail.com
            <motion.i
              style={{
                color: 'var(--primary-teal)',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              className={`bx ${copied ? 'bx-check' : 'bx-copy'}`}
              onClick={handleCopyEmail}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={copied ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.i>
            {copied && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                style={{ color: 'var(--primary-teal)', fontSize: '0.875rem' }}
              >
                Copied!
              </motion.span>
            )}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
