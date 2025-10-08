import React from "react";

type Props = {
  variant?: "floating" | "inline";
};

export const VisitorCounter: React.FC<Props> = ({ variant = "floating" }) => {
  // Counter is now embedded in index.html head
  // This component can be used for styling if needed

  if (variant === "floating") {
    return (
      <div className="fixed bottom-4 right-4 z-[9999] rounded-md border border-gamer-border
                     bg-gamer-card/90 px-3 py-2 text-xs text-gamer-text shadow-lg">
        <div className="text-center">
          <div className="text-[10px] opacity-75 mb-1">Visitors</div>
          <div className="font-mono text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  return <div className="text-center text-sm text-muted-foreground">Visitor Counter Active</div>;
};
