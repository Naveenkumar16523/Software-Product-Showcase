"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.4,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.5 }}
      className={`inline-block relative ${className}`}
      {...props}
    >
      <motion.div
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.2 }}
        className="w-full h-full flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
