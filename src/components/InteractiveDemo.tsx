
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface InteractiveDemoProps {
  className?: string;
}

const InteractiveDemo: React.FC<InteractiveDemoProps> = ({
  className,
}) => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg font-medium">Interactive Elements</h3>
        <p className="text-sm text-muted-foreground">Test interaction within iframe</p>
      </div>
      
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setCount(count => count - 1)}
          className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus-visible:ring-2"
        >
          −
        </button>
        
        <div className="flex items-center justify-center w-16 h-10 text-lg font-medium bg-background rounded-md">
          {count}
        </div>
        
        <button
          onClick={() => setCount(count => count + 1)}
          className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus-visible:ring-2"
        >
          +
        </button>
      </div>
      
      <div className="flex justify-center mt-6">
        <button
          onClick={toggleTheme}
          className={cn(
            "px-4 py-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus-visible:ring-2",
            theme === 'light' 
              ? "bg-white text-gray-800 border border-gray-200" 
              : "bg-gray-800 text-white border border-gray-700"
          )}
        >
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
      </div>
    </div>
  );
};

export default InteractiveDemo;
