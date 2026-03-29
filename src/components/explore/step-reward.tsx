"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { CollectibleItem } from "@/lib/types";
import { MapPin, Star, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const rarityLabel: Record<string, string> = {
  Common: "Phổ thông",
  Rare: "Hiếm",
  Epic: "Sử thi",
  Legendary: "Huyền thoại",
  Endangered: "Cực hiếm",
};

const rarityClass: Record<string, string> = {
  Common: "rarity-common border",
  Rare: "rarity-rare border-2",
  Epic: "rarity-epic border-2",
  Legendary: "rarity-legendary border-2",
  Endangered: "rarity-endangered border-2",
};

const rarityTextColor: Record<string, string> = {
  Common: "text-primary",
  Rare: "text-sky-500",
  Epic: "text-amber-500",
  Legendary: "text-yellow-500",
  Endangered: "text-red-500",
};

function selectItems(items: CollectibleItem[]): CollectibleItem[] {
  // Always include one guaranteed drop (highest dropRate), plus up to 2 random extra
  const sorted = [...items].sort((a, b) => b.dropRate - a.dropRate);
  const selected: CollectibleItem[] = [sorted[0]];

  const remaining = sorted.slice(1);
  for (const item of remaining) {
    if (selected.length >= 3) break;
    if (Math.random() < item.dropRate * 1.5) {
      selected.push(item);
    }
  }
  return selected;
}

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

interface StepRewardProps {
  items: CollectibleItem[];
  nodeId: string;
  nodeName: string;
  totalNodeItems: number;
  onCollected: (itemIds: string[]) => void;
}

export function StepReward({ items, nodeId, nodeName, totalNodeItems, onCollected }: StepRewardProps) {
  const [droppedItems] = useState<CollectibleItem[]>(() => selectItems(items));
  const [xp] = useState(() => droppedItems.length * 120 + Math.floor(Math.random() * 80));
  const [xpDisplay, setXpDisplay] = useState(0);
  const [confetti, setConfetti] = useState<ConfettiDot[]>([]);
  const [collected, setCollected] = useState(false);
  const hasNotified = useRef(false);

  useEffect(() => {
    // Animate XP counter
    let current = 0;
    const target = xp;
    const duration = 1500;
    const step = target / (duration / 16);
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setXpDisplay(Math.round(current));
      if (current >= target) clearInterval(interval);
    }, 16);

    // Generate confetti
    const dots: ConfettiDot[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      x: 45 + Math.random() * 10,
      y: 35 + Math.random() * 10,
      dx: `${(Math.random() - 0.5) * 240}px`,
      dy: `${-(Math.random() * 200 + 60)}px`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.floor(Math.random() * 5),
    }));
    setConfetti(dots);

    return () => clearInterval(interval);
  }, [xp]);

  const handleCollect = () => {
    if (!hasNotified.current) {
      hasNotified.current = true;
      onCollected(droppedItems.map((i) => i.id));
    }
    setCollected(true);
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[oklch(0.10_0.01_80)] text-white overflow-hidden px-6 py-10">
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
            animation: `confetti-scatter 1.2s ease-out ${dot.id * 40}ms both`,
          } as React.CSSProperties}
        />
      ))}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8 mt-4"
      >
        <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-1">
          {nodeName}
        </p>
        <h1 className="text-3xl font-black">
          Nhận <span className="text-[oklch(0.82_0.18_85)]">Vật Phẩm!</span>
        </h1>
        <p className="text-sm text-white/60 mt-1">You&apos;ve earned cultural collectibles</p>
      </motion.div>

      {/* Item cards */}
      <div className={cn(
        "grid gap-4 w-full max-w-sm mb-8",
        droppedItems.length === 1 ? "grid-cols-1 max-w-[180px]" :
        droppedItems.length === 2 ? "grid-cols-2" : "grid-cols-3"
      )}>
        {droppedItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 200, damping: 18 }}
            className={cn(
              "flex flex-col rounded-2xl overflow-hidden",
              "bg-gradient-to-b",
              item.rarity === "Common" ? "from-primary/20 to-primary/5" :
              item.rarity === "Rare" ? "from-sky-500/25 to-sky-500/5" :
              item.rarity === "Epic" ? "from-amber-500/25 to-amber-500/5" :
              item.rarity === "Legendary" ? "from-yellow-400/30 to-yellow-400/5" :
              "from-red-500/25 to-red-500/5",
              rarityClass[item.rarity]
            )}
          >
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 33vw, 150px"
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <p className="text-[10px] font-black leading-tight text-white/90 mb-1">{item.name}</p>
              <Badge className={cn(
                "text-[8px] font-black px-1 py-0 border-0 bg-black/40 backdrop-blur-sm",
                rarityTextColor[item.rarity]
              )}>
                <Star className="size-2 mr-0.5" />
                {rarityLabel[item.rarity]}
              </Badge>
            </div>
          </motion.div>
        ))}
      </div>

      {/* XP counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col items-center gap-1 mb-6"
      >
        <span className="text-4xl font-black text-[oklch(0.82_0.18_85)]">+{xpDisplay}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-white/50">XP Earned</span>
      </motion.div>

      {/* Museum progress */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="w-full max-w-sm bg-white/10 rounded-2xl p-4 mb-8"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-white/70">{nodeName}</span>
          <span className="text-xs font-bold text-white/70">
            {droppedItems.length}/{totalNodeItems} items
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${(droppedItems.length / totalNodeItems) * 100}%` }}
            transition={{ delay: 1.6, duration: 0.8 }}
          />
        </div>
        <p className="text-[10px] text-white/50 mt-1.5">
          {droppedItems.length} vật phẩm được thêm vào bảo tàng
        </p>
      </motion.div>

      {/* CTAs */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="w-full max-w-sm space-y-3"
        >
          {!collected ? (
            <Button
              size="lg"
              className="w-full h-14 rounded-full text-base font-black bg-primary text-primary-foreground shadow-xl shadow-primary/30"
              onClick={handleCollect}
            >
              Thu thập vật phẩm
            </Button>
          ) : (
            <>
              <Button size="lg" className="w-full h-14 rounded-full text-base font-black bg-primary" asChild>
                <Link href="/museum">
                  <LayoutGrid className="size-4 mr-2" />
                  Xem Bảo Tàng
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full h-14 rounded-full font-bold border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/explore">
                  Tiếp tục khám phá
                  <ChevronRight className="size-4 ml-1" />
                </Link>
              </Button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function LayoutGrid({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}
