"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import type { CollectibleItem, CollectedItem, Rarity } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Lock, MapPin } from "lucide-react";

const rarityConfig: Record<Rarity, { label: string; className: string; bg: string }> = {
  Common:    { label: "Phổ thông", className: "rarity-common border",    bg: "from-primary/10 to-primary/5" },
  Rare:      { label: "Hiếm",      className: "rarity-rare border-2",     bg: "from-sky-500/15 to-sky-500/5" },
  Epic:      { label: "Sử thi",    className: "rarity-epic border-2",     bg: "from-amber-500/15 to-amber-500/5" },
  Legendary: { label: "Huyền thoại", className: "rarity-legendary border-2", bg: "from-yellow-400/20 to-yellow-400/5" },
  Endangered: { label: "Cực hiếm", className: "rarity-endangered border-2", bg: "from-red-500/15 to-red-500/5" },
};

interface ItemCardProps {
  item: CollectibleItem | CollectedItem;
  collected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ItemCard({ item, collected = false, onClick, className }: ItemCardProps) {
  const config = rarityConfig[item.rarity];

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-200",
        "bg-gradient-to-b", config.bg,
        config.className,
        collected ? "cursor-pointer hover:scale-[1.03] active:scale-[0.98]" : "opacity-60 cursor-default",
        className
      )}
    >
      {/* Rarity badge */}
      <div className="absolute top-2 right-2 z-10">
        <Badge className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 bg-background/80 backdrop-blur-sm text-foreground border-0">
          {config.label}
        </Badge>
      </div>

      {/* Image area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary/40">
        {collected ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Lock className="size-8 text-muted-foreground/40" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2.5 flex flex-col gap-1">
        <span className="text-[11px] font-black leading-tight line-clamp-2">
          {collected ? item.name : "???"}
        </span>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="size-2.5 shrink-0" />
          <span className="text-[10px] truncate">{item.sourceNodeName}</span>
        </div>
      </div>
    </button>
  );
}
