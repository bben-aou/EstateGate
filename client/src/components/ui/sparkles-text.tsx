"use client";

import { CSSProperties, ReactElement, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

interface SparklesTextProps {
  as?: ReactElement;
  className?: string;
  text: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

const SparklesText: React.FC<SparklesTextProps> = ({
  text,
  colors = {first: '#9E7AFF', second: '#FE8BBB'},
  className,
  sparklesCount = 10,
  ...props
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateStar = (): Sparkle => ({
      id: `${Math.random()}-${Date.now()}`,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      color: Math.random() > 0.5 ? colors.first : colors.second,
      delay: Math.random() * 2,
      scale: Math.random() * 1 + 0.3,
      lifespan: Math.random() * 10 + 5
    });

    const initializeStars = () => setSparkles(Array.from({ length: sparklesCount }, generateStar));

    const updateStars = () => {
      setSparkles(currentSparkles =>
        currentSparkles.map(star => star.lifespan <= 0 ? generateStar() : { ...star, lifespan: star.lifespan - 0.1 })
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div
      className={cn("text-6xl font-bold", className)}
      {...props}
      style={{
        "--sparkles-first-color": colors.first,
        "--sparkles-second-color": colors.second,
      } as CSSProperties}
    >
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong>{text}</strong>
      </span>
    </div>
  );
};

const Sparkle: React.FC<Sparkle> = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      style={{ left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [0, 180],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z"
        fill={color}
      />
    </motion.svg>
  );
};

export default SparklesText;