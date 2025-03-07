
import React from 'react';
import { cn } from "@/lib/utils";

interface ContentBoxProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Animation delay in seconds
}

const ContentBox: React.FC<ContentBoxProps> = ({
  children,
  className,
  delay = 0,
}) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-lg p-6 animate-slide-up", 
        className
      )}
      style={{ 
        animationDelay: `${delay}s`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default ContentBox;
