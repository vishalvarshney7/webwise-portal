import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';

interface AnimatedTechnologyProps {
  name: string;
  icon: string;
  className?: string;
}

const AnimatedTechnology = ({ name, icon, className }: AnimatedTechnologyProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <AnimatedSection className="flex flex-col">
      <div 
        className={cn(
          "rounded-lg p-4 transition-all duration-300 relative flex flex-col items-center justify-center h-28 overflow-hidden group",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={cn(
          "transition-all duration-300",
          isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
        )}>
          <img 
            src={icon || "/placeholder.svg"} 
            alt={name} 
            className="w-16 h-16 object-contain" 
          />
        </div>
        
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <p className="font-medium text-center px-2">{name}</p>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AnimatedTechnology;
