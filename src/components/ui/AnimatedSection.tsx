
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (direction) {
      case 'up': return 'animate-fade-in';
      case 'down': return 'animate-fade-in'; // We'd need a specific keyframe for this
      case 'left': return 'animate-fade-in-left';
      case 'right': return 'animate-fade-in-right';
      case 'fade': return 'animate-scale-in';
      default: return 'animate-fade-in';
    }
  };

  const getInitialTransform = () => {
    if (isVisible) return '';
    
    switch (direction) {
      case 'up': return 'translate3d(0, 20px, 0)';
      case 'down': return 'translate3d(0, -20px, 0)';
      case 'left': return 'translate3d(-20px, 0, 0)';
      case 'right': return 'translate3d(20px, 0, 0)';
      case 'fade': return 'scale(0.95)';
      default: return 'translate3d(0, 20px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{
        transform: getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.7s ease-out, transform 0.7s ease-out`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
