"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getCityById } from "@/lib/cities";
import { useTranslations } from "next-intl";

interface ConfettiDot {
  id: number;
  x: number;
  y: number;
  dx: string;
  dy: string;
  color: string;
  size: number;
}

const COLORS = ["#5C7A5C", "#C4714A", "#7c9bcc", "#d4a843", "#c45470"];

interface BadgeCelebrationProps {
  cityId: string;
  onDismiss: () => void;
}

export function BadgeCelebration({ cityId, onDismiss }: BadgeCelebrationProps) {
  const [confetti, setConfetti] = useState<ConfettiDot[]>([]);
  const city = getCityById(cityId);
  const t = useTranslations("badgeCelebration");

  useEffect(() => {
    const dots: ConfettiDot[] = Array.from({ length: 36 }, (_, i) => ({
      id: i,
      x: 45 + Math.random() * 10,
      y: 40 + Math.random() * 10,
      dx: `${(Math.random() - 0.5) * 280}px`,
      dy: `${-(Math.random() * 220 + 80)}px`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.floor(Math.random() * 6),
    }));
    setConfetti(dots);
  }, []);

  if (!city) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="badge-celebration"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
      >
        {/* Confetti */}
        {confetti.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              backgroundColor: dot.color,
              "--dx": dot.dx,
              "--dy": dot.dy,
              animation: `confetti-scatter 1.4s ease-out ${dot.id * 35}ms both`,
            } as React.CSSProperties}
          />
        ))}

        {/* Card */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 260, delay: 0.15 }}
          className="relative bg-background rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-border/30"
        >
          {/* Badge emoji */}
          <motion.div
            initial={{ scale: 0.5, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 14, stiffness: 200, delay: 0.3 }}
            className="text-7xl mb-4 leading-none"
          >
            {city.badgeEmoji}
          </motion.div>

          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
            {t("newBadge")}
          </p>
          <h2 className="text-2xl font-black mb-1">
            🎉 {city.badgeName}
          </h2>
          <p className="text-sm text-muted-foreground italic mb-1">{city.badgeNameEn}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-3 mb-6">
            {city.badgeDescription}
          </p>

          {/* CTAs */}
          <div className="space-y-2.5">
            <Link
              href="/museum"
              onClick={onDismiss}
              className="block w-full py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm"
            >
              {t("viewBadge")}
            </Link>
            <button
              onClick={onDismiss}
              className="block w-full py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("continueCta")}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
