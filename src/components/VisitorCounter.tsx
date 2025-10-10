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
    // Load the visitor counter scripts and display the counter
    const loadCounter = () => {
      if (window.sfc_load_counter && counterRef.current) {
        // Clear any existing content
        counterRef.current.innerHTML = '';

        // Trigger the counter loading
        window.sfc_load_counter();

        // The external script should populate the element with the counter
        // If it doesn't work, we'll show a fallback
        setTimeout(() => {
          if (counterRef.current && counterRef.current.children.length === 0) {
            counterRef.current.textContent = 'Loading...';
          }
        }, 1000);
      } else if (counterRef.current) {
        // Fallback if script doesn't load
        counterRef.current.textContent = 'Loading...';
      }
    };

    // Load scripts if not already loaded
    if (!document.querySelector('script[src*="freevisitorcounters.com/auth.php"]')) {
      const authScript = document.createElement('script');
      authScript.src = 'https://www.freevisitorcounters.com/auth.php?id=4ec2798bde811331fb1531de8e659293860a2208';
      authScript.type = 'text/javascript';
      document.head.appendChild(authScript);

      const counterScript = document.createElement('script');
      counterScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1233557/t/0';
      counterScript.type = 'text/javascript';
      document.head.appendChild(counterScript);

      // Load counter after scripts are loaded
      counterScript.onload = loadCounter;
    } else {
      loadCounter();
    }
  }, []);

  if (!visible) {
    return null;
  }

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 right-4 z-[9999] rounded-md border border-gamer-border
                     bg-gamer-card/90 px-3 py-2 text-xs text-gamer-text shadow-lg">
        <div className="text-center">
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
