import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {scrollProgress > 0 && (
        <motion.div
          className="scroll-progress"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${scrollProgress}%`,
            height: '3px',
            background: 'var(--gradient-primary)',
            zIndex: 9999,
            transition: 'width 0.1s ease-out',
          }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
        />
      )}
    </>
  );
};

export default ScrollProgress;

