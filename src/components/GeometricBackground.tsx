const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* SVG Abstract Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for turquoise accent lines */}
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(177 85% 46%)" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(177 85% 46%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(177 85% 46%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(177 85% 46%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(177 85% 46%)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(177 85% 46%)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(177 85% 46%)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Diagonal lines - top left to bottom right */}
        <line
          x1="0"
          y1="20%"
          x2="40%"
          y2="100%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          className="animate-[fade-in_2s_ease-out]"
        />
        <line
          x1="10%"
          y1="0"
          x2="60%"
          y2="100%"
          stroke="url(#lineGradient3)"
          strokeWidth="0.5"
          className="animate-[fade-in_2.5s_ease-out]"
        />
        <line
          x1="25%"
          y1="0"
          x2="75%"
          y2="100%"
          stroke="#1a1a1a"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Diagonal lines - top right to bottom left */}
        <line
          x1="100%"
          y1="30%"
          x2="60%"
          y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          className="animate-[fade-in_2s_ease-out_0.3s]"
        />
        <line
          x1="90%"
          y1="0"
          x2="50%"
          y2="80%"
          stroke="#1a1a1a"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />

        {/* Curved lines */}
        <path
          d="M0,60% Q30%,40% 50%,70% T100%,50%"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="0.8"
          className="animate-[fade-in_3s_ease-out]"
        />
        <path
          d="M0,80% Q40%,60% 70%,85% T100%,70%"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />

        {/* Geometric accent shapes */}
        <circle
          cx="85%"
          cy="15%"
          r="80"
          fill="none"
          stroke="hsl(177 85% 46%)"
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />
        <circle
          cx="85%"
          cy="15%"
          r="120"
          fill="none"
          stroke="hsl(177 85% 46%)"
          strokeWidth="0.3"
          strokeOpacity="0.05"
        />
        
        <circle
          cx="10%"
          cy="85%"
          r="60"
          fill="none"
          stroke="hsl(177 85% 46%)"
          strokeWidth="0.5"
          strokeOpacity="0.08"
        />

        {/* Small decorative elements */}
        <polygon
          points="95%,70% 97%,75% 93%,75%"
          fill="hsl(177 85% 46%)"
          fillOpacity="0.1"
        />
        <polygon
          points="5%,30% 7%,35% 3%,35%"
          fill="hsl(177 85% 46%)"
          fillOpacity="0.08"
        />
      </svg>

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/6 w-[200px] h-[200px] bg-primary/2 rounded-full blur-[100px]" />
    </div>
  );
};

export default GeometricBackground;
