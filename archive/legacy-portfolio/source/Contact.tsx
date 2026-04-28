import { FormEvent, useState } from 'react';
import posthog from 'posthog-js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [formData, setFormData] = useState({
    callerName: '',
    phoneNumber: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://hook.us1.make.com/vton1xu7g0uavit4haaab2baqzkswkyo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.phoneNumber,
          callerName: formData.callerName,
        }),
      });

      if (response.ok) {
        posthog.capture('contact_form_submitted', { caller_name: formData.callerName });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      posthog.capture('contact_form_error', { error: String(error) });
      posthog.captureException(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer section" id="contact" ref={ref}>
      <motion.h2 className="section-title">Get in touch</motion.h2>
      <motion.p className="footer-title">Atharva Pandkar</motion.p>
      <motion.p>atharva.pandkar.1820@gmail.com</motion.p>
      <motion.p>+1 213-272-8261</motion.p>
      <motion.form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="callerName">Name:</label>
        <motion.input type="text" id="callerName" className="contact-input" name="callerName" value={formData.callerName} />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <motion.input type="tel" id="phoneNumber" className="contact-input" name="phoneNumber" value={formData.phoneNumber} />
        <motion.button type="submit" className="contact-button" id="inquiryButton" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </motion.button>
      </motion.form>
    </footer>
  );
};

export default Contact;
