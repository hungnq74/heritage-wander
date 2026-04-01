"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HeritageNode } from "@/lib/types";
import { getCategoryLabel } from "@/lib/ich-utils";
import { useTranslations } from "next-intl";

type TierRarityKey = 1 | 2 | 3;

const tierConfig: Record<TierRarityKey, { className: string; rarityKey: string; bg: string }> = {
  1: { className: "rarity-common border",      rarityKey: "Common",    bg: "from-primary/10 to-primary/5" },
  2: { className: "rarity-rare border-2",      rarityKey: "Rare",      bg: "from-sky-500/15 to-sky-500/5" },
  3: { className: "rarity-legendary border-2", rarityKey: "Legendary", bg: "from-yellow-400/20 to-yellow-400/5" },
};

function getCardConfig(node: HeritageNode) {
  const hasEndangered = node.items.some((i) => i.rarity === "Endangered");
  if (hasEndangered) {
    return { className: "rarity-endangered border-2", rarityKey: "Endangered", bg: "from-red-500/15 to-red-500/5" };
  }
  return tierConfig[(node.tier as TierRarityKey)] ?? tierConfig[1];
}

interface HeritageCardProps {
  node: HeritageNode;
  isUnlocked: boolean;
}

export function HeritageCard({ node, isUnlocked }: HeritageCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const category = getCategoryLabel(node.category);
  const config = getCardConfig(node);
  const tCommon = useTranslations("common");

  // High-quality heritage placeholder (stable)
  const placeholderUrl = "https://images.unsplash.com/photo-1596701062351-be5f6a42a4a9?auto=format&fit=crop&q=80&w=1200";

  return (
    <Link href={`/museum/heritage/${node.id}`} className="block group">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl aspect-[4/5] shadow-sm transition-all duration-300 group-active:scale-[0.98]",
          `bg-gradient-to-b ${config.bg}`,
          config.className
        )}
      >
        {/* Cover image / Fallback */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={
              imgFailed 
                ? placeholderUrl 
                : (!isUnlocked && node.teaserImage ? node.teaserImage : node.coverImage)
            }
            alt={node.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            onError={() => setImgFailed(true)}
            className={cn(
              "object-cover transition-all duration-700 will-change-transform",
              isUnlocked 
                ? "opacity-100 scale-100 blur-0 grayscale-0" 
                : "opacity-40 scale-105 blur-[2px] grayscale contrast-125"
            )}
            priority={node.tier === 1}
          />
        </div>

        {/* Lock Overlay for locked items */}
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="size-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="size-5 text-white/80"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
          </div>
        )}

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

        {/* Top: rarity label + UNESCO badge */}
        <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
          <div className="flex flex-col gap-1">
            {node.unescoStatus === "inscribed" && (
              <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-amber-500/90 text-white shadow-sm ring-1 ring-white/10">
                ⭐ UNESCO
              </span>
            )}
          </div>
          {/* Rarity label top-right */}
          <span className={cn(
            "text-[9px] font-black px-1.5 py-0.5 rounded-full bg-black/40 text-white shadow-sm ring-1 ring-white/10",
            !isUnlocked && "opacity-30"
          )}>
            {tCommon(`rarity.${config.rarityKey}`)}
          </span>
        </div>

        {/* Collected checkmark (only if unlocked) */}
        {isUnlocked && (
          <div className="absolute top-2 left-2 z-10 scale-110">
            <div className="bg-primary rounded-full p-0.5 shadow-lg ring-2 ring-background">
              <CheckCircle2 className="size-3 text-white" />
            </div>
          </div>
        )}

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className={cn(
              "text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-black/40 text-white/90 ring-1 ring-white/10",
              !isUnlocked && "bg-black/20"
            )}>
              {category.emoji} {category.vi}
            </span>
          </div>
          <p className={cn(
            "text-[12px] font-black leading-tight line-clamp-2 transition-colors",
            isUnlocked ? "text-white" : "text-white/60"
          )}>
            {node.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
