
import React from 'react';
import { cn } from "@/lib/utils";

interface LoadingIndicatorProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'muted';
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  className,
  size = 'md',
  color = 'primary',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-8 h-8 border-3',
  };

  const colorClasses = {
    primary: 'border-t-primary',
    secondary: 'border-t-secondary',
    muted: 'border-t-muted',
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "rounded-full border-transparent animate-spin-slow",
          sizeClasses[size],
          colorClasses[color]
        )}
      />
    </div>
  );
};

export default LoadingIndicator;
