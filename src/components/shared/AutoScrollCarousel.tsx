import { useRef, useEffect, ReactNode } from 'react';

interface AutoScrollCarouselProps {
  children: ReactNode[];
  speed?: number; // pixels per second
  className?: string;
}

const AutoScrollCarousel = ({ children, speed = 30, className = '' }: AutoScrollCarouselProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    // Calculate animation duration based on content width and speed
    const contentWidth = content.scrollWidth / 2; // Divide by 2 because we duplicate
    const duration = contentWidth / speed; // seconds

    // Set CSS custom property for animation duration
    content.style.setProperty('--scroll-duration', `${duration}s`);
  }, [speed, children]);

  return (
    <div className={`carousel-wrapper ${className}`}>
      <div className="carousel-fade-left"></div>
      <div className="carousel-container">
        <div className="carousel-content" ref={contentRef}>
          {children}
          {/* Duplicate children for seamless loop */}
          {children}
        </div>
      </div>
      <div className="carousel-fade-right"></div>
    </div>
  );
};

export default AutoScrollCarousel;

