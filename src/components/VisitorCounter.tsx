import React, { useEffect, useRef } from "react";

declare global {
  interface Window { __fvcLoaded?: boolean }
}

type Props = {
  variant?: "floating" | "inline";
};

export const VisitorCounter: React.FC<Props> = ({ variant = "floating" }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Avoid duplicate script injection (HMR or multiple mounts)
    if (window.__fvcLoaded) return;
    window.__fvcLoaded = true;

    // Clear then inject
    ref.current.innerHTML = "";

    const link = document.createElement("a");
    link.href = "http://www.freevisitorcounters.com";
    link.textContent = "free counter";

    const s1 = document.createElement("script");
    s1.src =
      "https://www.freevisitorcounters.com/auth.php?id=4ec2798bde811331fb1531de8e659293860a2208";
    s1.async = true;

    const s2 = document.createElement("script");
    s2.src =
      "https://www.freevisitorcounters.com/en/home/counter/1233557/t/0";
    s2.async = true;

    ref.current.appendChild(link);
    ref.current.appendChild(document.createElement("br"));
    ref.current.appendChild(s1);
    ref.current.appendChild(s2);
  }, []);

  // Floating widget style for every page (stays subtle)
  if (variant === "floating") {
    return (
      <div
        ref={ref}
        className="fixed bottom-4 right-4 z-[9999] rounded-md border border-gamer-border
                   bg-gamer-card/90 px-3 py-2 text-xs text-gamer-text shadow-lg"
      />
    );
  }

  // Inline (use when you want the counter inside a section)
  return <div ref={ref} className="mx-auto w-fit" />;
};
