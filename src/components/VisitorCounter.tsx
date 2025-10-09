import React, { useEffect } from "react";

type Props = {
  variant?: "floating" | "inline";
  visible?: boolean;
};

export const VisitorCounter: React.FC<Props> = ({ variant = "floating", visible = true }) => {
  useEffect(() => {
    // Load the counter scripts
    const authScript = document.createElement('script');
    authScript.type = 'text/javascript';
    authScript.src = 'https://www.freevisitorcounters.com/auth.php?id=4ec2798bde811331fb1531de8e659293860a2208';
    document.body.appendChild(authScript);

    const counterScript = document.createElement('script');
    counterScript.type = 'text/javascript';
    counterScript.src = 'https://www.freevisitorcounters.com/en/home/counter/1233557/t/0';
    document.body.appendChild(counterScript);

    return () => {
      document.body.removeChild(authScript);
      document.body.removeChild(counterScript);
    };
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
