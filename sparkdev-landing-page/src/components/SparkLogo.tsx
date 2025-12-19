const SparkLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(25, 100%, 55%)" />
          <stop offset="33%" stopColor="hsl(330, 85%, 60%)" />
          <stop offset="66%" stopColor="hsl(270, 70%, 55%)" />
          <stop offset="100%" stopColor="hsl(220, 90%, 55%)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Main bolt shape */}
      <path
        d="M22 4L8 22H18L16 36L32 16H21L22 4Z"
        fill="url(#sparkGradient)"
        filter="url(#glow)"
      />
      {/* Spark accent */}
      <circle cx="30" cy="8" r="2" fill="hsl(25, 100%, 55%)" opacity="0.8" />
      <circle cx="10" cy="32" r="1.5" fill="hsl(270, 70%, 55%)" opacity="0.6" />
    </svg>
  );
};

export default SparkLogo;
