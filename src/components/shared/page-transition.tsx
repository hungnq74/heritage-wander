"use client";

import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for a cinematic feel
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}
