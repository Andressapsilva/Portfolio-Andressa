import { useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const GeometricBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Smooth spring physics for mouse movement
  const smoothX = useSpring(0, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(0, { stiffness: 50, damping: 30 });
  
  // Scroll-based transforms
  const scrollRotate = useTransform(scrollY, [0, 1000], [0, 15]);
  const scrollOpacity = useTransform(scrollY, [0, 500], [1, 0.6]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    smoothX.set(x);
    smoothY.set(y);
    setMousePosition({ x, y });
  }, [smoothX, smoothY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ opacity: scrollOpacity }}
    >
      {/* Floating circles - slow continuous rotation */}
      <motion.div
        className="absolute top-[10%] right-[15%] w-[200px] h-[200px] rounded-full border border-primary/10"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          x: useTransform(smoothX, (v) => v * 20),
          y: useTransform(smoothY, (v) => v * 20),
        }}
      />
      
      <motion.div
        className="absolute top-[8%] right-[12%] w-[280px] h-[280px] rounded-full border border-primary/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{
          x: useTransform(smoothX, (v) => v * 15),
          y: useTransform(smoothY, (v) => v * 15),
        }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[8%] w-[150px] h-[150px] rounded-full border border-primary/8"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 45, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{
          x: useTransform(smoothX, (v) => v * -25),
          y: useTransform(smoothY, (v) => v * -20),
        }}
      />

      <motion.div
        className="absolute bottom-[25%] left-[5%] w-[220px] h-[220px] rounded-full border border-primary/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        style={{
          x: useTransform(smoothX, (v) => v * -18),
          y: useTransform(smoothY, (v) => v * -15),
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-[40%] left-[5%] w-16 h-16 border border-primary/10 rotate-45"
        animate={{ 
          rotate: [45, 135, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: useTransform(smoothX, (v) => v * -30),
          y: useTransform(smoothY, (v) => v * 25),
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[10%] w-12 h-12 border border-primary/8 rotate-12"
        animate={{ 
          rotate: [12, 72, 12],
          scale: [1, 1.15, 1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: useTransform(smoothX, (v) => v * 35),
          y: useTransform(smoothY, (v) => v * -20),
        }}
      />

      {/* SVG Abstract Lines with scroll rotation */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ rotate: scrollRotate }}
      >
        <defs>
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

        {/* Animated diagonal lines */}
        <motion.line
          x1="0"
          y1="20%"
          x2="40%"
          y2="100%"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.line
          x1="10%"
          y1="0"
          x2="60%"
          y2="100%"
          stroke="url(#lineGradient3)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
        />
        <motion.line
          x1="25%"
          y1="0"
          x2="75%"
          y2="100%"
          stroke="#1a1a1a"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
        />

        <motion.line
          x1="100%"
          y1="30%"
          x2="60%"
          y2="100%"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
        />
        <motion.line
          x1="90%"
          y1="0"
          x2="50%"
          y2="80%"
          stroke="#1a1a1a"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        />

        {/* Animated curved paths */}
        <motion.path
          d="M0,60% Q30%,40% 50%,70% T100%,50%"
          fill="none"
          stroke="url(#lineGradient1)"
          strokeWidth="0.8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.6 }}
        />
        <motion.path
          d="M0,80% Q40%,60% 70%,85% T100%,70%"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
        />
      </motion.svg>

      {/* Floating dots with parallax */}
      <motion.div
        className="absolute top-[25%] left-[20%] w-2 h-2 rounded-full bg-primary/20"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: useTransform(smoothX, (v) => v * 40),
          y: useTransform(smoothY, (v) => v * 35),
        }}
      />
      
      <motion.div
        className="absolute top-[45%] right-[25%] w-3 h-3 rounded-full bg-primary/15"
        animate={{ 
          y: [0, 15, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          x: useTransform(smoothX, (v) => v * -30),
          y: useTransform(smoothY, (v) => v * 25),
        }}
      />

      <motion.div
        className="absolute top-[70%] left-[30%] w-2 h-2 rounded-full bg-primary/25"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.25, 0.5, 0.25]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          x: useTransform(smoothX, (v) => v * 35),
          y: useTransform(smoothY, (v) => v * -30),
        }}
      />

      <motion.div
        className="absolute top-[15%] left-[60%] w-1.5 h-1.5 rounded-full bg-primary/20"
        animate={{ 
          y: [0, 18, 0],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{
          x: useTransform(smoothX, (v) => v * -25),
          y: useTransform(smoothY, (v) => v * 20),
        }}
      />

      <motion.div
        className="absolute top-[55%] left-[70%] w-2.5 h-2.5 rounded-full bg-primary/15"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.15, 0.28, 0.15]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        style={{
          x: useTransform(smoothX, (v) => v * 30),
          y: useTransform(smoothY, (v) => v * -25),
        }}
      />

      {/* Ambient glow spots */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/[0.03] rounded-full blur-[150px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          x: useTransform(smoothX, (v) => v * 25),
          y: useTransform(smoothY, (v) => v * 20),
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-[16%] w-[200px] h-[200px] bg-primary/[0.02] rounded-full blur-[100px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          x: useTransform(smoothX, (v) => v * -20),
          y: useTransform(smoothY, (v) => v * -15),
        }}
      />
    </motion.div>
  );
};

export default GeometricBackground;
