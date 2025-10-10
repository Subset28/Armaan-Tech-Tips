import React, { useEffect, useRef } from "react";

type Props = {
  variant?: "floating" | "inline";
  visible?: boolean;
};

declare global {
  interface Window {
    sfc_load_counter?: () => void;
  }
}

export const VisitorCounter: React.FC<Props> = ({ variant = "floating", visible = true }) => {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the visitor counter scripts if not already loaded
    const loadCounter = () => {
      if (window.sfc_load_counter) {
        window.sfc_load_counter();
      } else {
        // Fallback: create a simple counter if the script doesn't work
        if (counterRef.current && !counterRef.current.querySelector('.visitor-count')) {
          const counterDiv = document.createElement('div');
          counterDiv.className = 'visitor-count';
          counterDiv.textContent = 'Loading...';
          counterRef.current.appendChild(counterDiv);
        }
      }
    };

    loadCounter();
  }, []);

  if (!visible) {
    return null;
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 right-4 z-[9999] rounded-md border border-gamer-border
                     bg-gamer-card/90 px-3 py-2 text-xs text-gamer-text shadow-lg">
        <div className="text-center">
          <div className="text-[10px] opacity-75 mb-1">Visitors</div>
          <div ref={counterRef} id="sfcxkflcxztqpzjcexu2jw9j1ee8ugypwn6" className="font-mono text-sm"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center text-sm">
      <div ref={counterRef} id="sfcxkflcxztqpzjcexu2jw9j1ee8ugypwn6"></div>
    </div>
  );
};
