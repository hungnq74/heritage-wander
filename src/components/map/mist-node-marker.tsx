"use client";

import { motion } from "framer-motion";
import type { HeritageNode } from "@/lib/types";
import { getDomainEmoji } from "@/lib/ich-utils";
import { cn } from "@/lib/utils";

interface MistNodeMarkerProps {
  node: HeritageNode;
  isUnlocked: boolean;
  isHovered: boolean;
  distance?: number;
  onClick: () => void;
}

export function MistNodeMarker({ node, isUnlocked, isHovered, distance, onClick }: MistNodeMarkerProps) {
  const emoji = getDomainEmoji(node.ichDomain);
  const isUNESCO = node.unescoStatus === "inscribed";

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
            ? "bg-accent/90 shadow-accent/30 scale-110"
            : "bg-foreground/70 shadow-black/30",
          !isUnlocked && !isHovered && "opacity-40"
        )}
      >
        {isUnlocked ? (
          <span>{emoji}</span>
        ) : (
          <span className="text-white/70">{emoji}</span>
        )}
      </div>

      {/* UNESCO gold badge */}
      {isUNESCO && (
        <div className="absolute -top-1 -right-1 size-5 rounded-full bg-amber-400 flex items-center justify-center text-[9px] shadow-sm border border-amber-300">
          ⭐
        </div>
      )}

      {/* Label */}
      <div
        className={cn(
          "mt-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all duration-300",
          "bg-background/95 border border-border/50 shadow-sm",
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
