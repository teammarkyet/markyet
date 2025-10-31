// BackgroundOrbs.jsx
import React from "react";

const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Pulsing orb - top left */}
      <div className="absolute top-10 left-10 sm:top-16 sm:left-16 md:top-10 md:left-20 w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 bg-markyetcolor/30 dark:bg-violet-700/30 rounded-full blur-3xl animate-pulseSlow"></div>

      {/* Floating orb - bottom right */}
      <div className="absolute bottom-20 right-10 sm:bottom-24 sm:right-20 md:bottom-20 md:right-32 w-48 sm:w-56 md:w-60 h-48 sm:h-56 md:h-60 bg-violet-400/30 dark:bg-markyetcolor/30 rounded-full blur-3xl animate-floatSlow"></div>

      {/* Glowing spinning orb - center left */}
      <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-violet-500/20 dark:bg-markyetcolor/20 rounded-full blur-3xl animate-glow animate-spinSlow"></div>

      {/* Small bouncing orb - middle right */}
      <div className="absolute bottom-1/3 right-1/4 sm:right-1/3 md:right-1/3 w-20 sm:w-24 md:w-24 h-20 sm:h-24 md:h-24 bg-markyetcolor/20 dark:bg-violet-400/20 rounded-full blur-2xl animate-bounceSlow"></div>

      {/* Extra floating orb for mobile view */}
      <div className="absolute top-1/4 left-3/4 sm:hidden w-16 h-16 bg-violet-300/30 rounded-full blur-xl animate-floatSlow"></div>
    </div>
  );
};

export default BackgroundOrbs;
