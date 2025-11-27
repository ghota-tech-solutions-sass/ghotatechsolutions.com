'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section';
  showGrid?: boolean;
  showNodes?: boolean;
  showOrbs?: boolean;
  showGradient?: boolean;
  showScanLine?: boolean;
}

export default function AnimatedBackground({
  variant = 'section',
  showGrid = true,
  showNodes = true,
  showOrbs = true,
  showGradient = true,
  showScanLine = false,
}: AnimatedBackgroundProps) {
  const [floatingElements, setFloatingElements] = useState<Array<{
    width: number;
    height: number;
    left: string;
    top: string;
    duration: number;
    y: number;
    x: number;
  }>>([]);

  useEffect(() => {
    setFloatingElements([...Array(5)].map(() => ({
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
      y: Math.random() * 100 - 50,
      x: Math.random() * 100 - 50,
    })));
  }, []);

  return (
    <>
      {/* Animated Grid Background */}
      {showGrid && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
          {showScanLine && (
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>
      )}

      {/* Animated connection nodes */}
      {showNodes && (
        <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Connection lines */}
          <motion.line
            x1="10%" y1="20%" x2="25%" y2="35%"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
          />
          <motion.line
            x1="25%" y1="35%" x2="40%" y2="25%"
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5, times: [0, 0.4, 0.6, 1] }}
          />
          <motion.line
            x1="75%" y1="30%" x2="85%" y2="45%"
            stroke="rgba(16, 185, 129, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1, times: [0, 0.4, 0.6, 1] }}
          />
          <motion.line
            x1="60%" y1="70%" x2="75%" y2="60%"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5, times: [0, 0.4, 0.6, 1] }}
          />
          <motion.line
            x1="20%" y1="65%" x2="35%" y2="75%"
            stroke="rgba(236, 72, 153, 0.15)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2, times: [0, 0.4, 0.6, 1] }}
          />

          {/* Nodes */}
          <motion.circle cx="10%" cy="20%" r="3" fill="#3b82f6" opacity="0.4"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle cx="25%" cy="35%" r="4" fill="#8b5cf6" opacity="0.4"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle cx="40%" cy="25%" r="3" fill="#10b981" opacity="0.4"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.circle cx="75%" cy="30%" r="4" fill="#3b82f6" opacity="0.4"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle cx="85%" cy="45%" r="3" fill="#8b5cf6" opacity="0.4"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
          />
          <motion.circle cx="60%" cy="70%" r="4" fill="#10b981" opacity="0.4"
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
          />
          <motion.circle cx="75%" cy="60%" r="3" fill="#ec4899" opacity="0.3"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle cx="20%" cy="65%" r="3" fill="#3b82f6" opacity="0.4"
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
          />
          <motion.circle cx="35%" cy="75%" r="4" fill="#fbbf24" opacity="0.3"
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          />
        </svg>
      )}

      {/* Floating gradient orbs */}
      {showOrbs && (
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          {floatingElements.map((el, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl"
              style={{
                width: el.width,
                height: el.height,
                left: el.left,
                top: el.top,
                background: i % 3 === 0
                  ? 'rgba(59, 130, 246, 0.08)'
                  : i % 3 === 1
                  ? 'rgba(139, 92, 246, 0.08)'
                  : 'rgba(16, 185, 129, 0.06)',
              }}
              animate={{
                y: [0, el.y],
                x: [0, el.x],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: el.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      {/* Animated gradient overlay */}
      {showGradient && (
        <motion.div
          className="absolute inset-0 z-[2] pointer-events-none"
          animate={{
            background: [
              "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 80% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 50%)",
              "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      )}
    </>
  );
}
