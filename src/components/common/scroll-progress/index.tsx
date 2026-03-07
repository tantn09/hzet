"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px]">
      <div
        className="h-full bg-linear-to-r from-blue-600 via-cyan-400 to-blue-600 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
