"use client";

import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const delayClass = delay > 0 ? `delay-${delay}` : '';
  const animationClass = isVisible ? `animate-${animation} ${delayClass}` : 'animate-on-scroll';

  return (
    <div ref={sectionRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;