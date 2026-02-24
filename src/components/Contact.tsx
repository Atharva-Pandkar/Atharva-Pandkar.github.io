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
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ callerName: '', phoneNumber: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      posthog.capture('contact_form_error', { error: String(error) });
      posthog.captureException(error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="footer section" id="contact" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="footer-title"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Atharva Pandkar
      </motion.p>
      <motion.div
        className="footer-social"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/atharva-pandkar"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          onClick={() => posthog.capture('footer_social_link_clicked', { platform: 'linkedin' })}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bx bxl-linkedin">
            <br />
            <p className="fffff">LinkedIn</p>
          </i>
        </motion.a>
        <motion.a
          href="https://github.com/Atharva-Pandkar"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
          onClick={() => posthog.capture('footer_social_link_clicked', { platform: 'github' })}
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="bx bxl-github">
            <br />
            <p className="fffff">Github</p>
          </i>
        </motion.a>
      </motion.div>
      <motion.div
        id="last"
        className="footer-social"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="footer-social" id="lastdiv">
          <i className="bx bx-mail-send footer-icon"></i>
          <p className="fffff">atharva.pandkar.1820@gmail.com</p>
        </div>
        <div className="footer-social" id="lastdiv">
          <i className="bx bx-phone footer-icon"></i>
          <p className="fffff">+1 213-272-8261</p>
        </div>
      </motion.div>

      <motion.form
        id="contactForm"
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <label htmlFor="callerName">Name:</label>
        <motion.input
          type="text"
          id="callerName"
          className="contact-input"
          name="callerName"
          placeholder="Your Name"
          value={formData.callerName}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <label htmlFor="phoneNumber">Phone Number:</label>
        <motion.input
          type="tel"
          id="phoneNumber"
          className="contact-input"
          name="phoneNumber"
          placeholder="Your Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button
          type="submit"
          className="contact-button"
          id="inquiryButton"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </motion.button>
      </motion.form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ color: 'var(--text-muted)', marginTop: '2rem' }}
      >
        &#169; 2024 copyright all right reserved
      </motion.p>
    </footer>
  );
};

export default Contact;
