"use client";

import { motion } from "framer-motion";
import type { HeritageNode } from "@/lib/types";
import { cn } from "@/lib/utils";

const craftEmoji: Record<string, string> = {
  carpentry: "🪵",
  incense: "🕯️",
  silk: "🧵",
  pottery: "🏺",
  "hat-making": "👒",
};

interface MistNodeMarkerProps {
  node: HeritageNode;
  isUnlocked: boolean;
  isHovered: boolean;
  distance?: number; // meters (simulated)
  onClick: () => void;
}

export function MistNodeMarker({ node, isUnlocked, isHovered, distance, onClick }: MistNodeMarkerProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center group"
      style={{ transform: "translate(-50%, -50%)" }}
    >
      {/* Pulse ring — locked state */}
      {!isUnlocked && (
        <motion.div
          className={cn(
            "absolute inset-0 rounded-full",
            isHovered ? "bg-accent/20" : "bg-primary/10"
          )}
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 52, height: 52, left: "50%", top: "50%", translateX: "-50%", translateY: "-50%" }}
        />
      )}

      {/* Main marker circle */}
      <div
        className={cn(
          "size-11 rounded-full flex items-center justify-center text-xl transition-all duration-300 shadow-lg",
          isUnlocked
            ? "bg-primary text-primary-foreground shadow-primary/30 group-hover:scale-110"
            : isHovered
            ? "bg-accent/80 backdrop-blur-sm shadow-accent/30 scale-110"
            : "bg-foreground/60 backdrop-blur-sm shadow-black/30",
          !isUnlocked && !isHovered && "filter blur-[1px]"
        )}
      >
        {isUnlocked ? (
          <span>{craftEmoji[node.craftCategory]}</span>
        ) : (
          <span className="text-white/70">{craftEmoji[node.craftCategory]}</span>
        )}
      </div>

      {/* Label */}
      <div
        className={cn(
          "mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all duration-300",
          "bg-background/80 backdrop-blur-sm border border-border/50 shadow-sm",
          isUnlocked ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {isUnlocked ? node.name : (
          <span>
            {distance !== undefined ? `${distance}m` : "Chạm để tiếp cận"}
          </span>
        )}
      </div>
    </button>
  );
}
