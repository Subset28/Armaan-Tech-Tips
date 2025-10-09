import React, { useEffect } from "react";

type Props = {
  variant?: "floating" | "inline";
  visible?: boolean;
};

export const VisitorCounter: React.FC<Props> = ({ variant = "floating", visible = true }) => {
  useEffect(() => {
    // Scripts are already loaded in index.html
    // This component just renders the counter container
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
          <div id="sfcxkflcxztqpzjcexu2jw9j1ee8ugypwn6" className="font-mono text-sm"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center text-sm">
      <div id="sfcxkflcxztqpzjcexu2jw9j1ee8ugypwn6"></div>
    </div>
  );
};
