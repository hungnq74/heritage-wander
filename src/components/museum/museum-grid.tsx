"use client";

import { useState, useEffect } from "react";
import type { HeritageNode, City } from "@/lib/types";
import { getMuseumState } from "@/lib/museum-store";
import { groupNodesByCity } from "@/lib/ich-utils";
import { CITIES } from "@/lib/cities";
import { HeritageCard } from "./heritage-card";
import { BadgeCelebration } from "./badge-celebration";

interface MuseumGridProps {
  nodes: HeritageNode[];
}

function CitySection({
  city,
  nodes,
  unlockedIds,
  earnedBadgeIds,
}: {
  city: City;
  nodes: HeritageNode[];
  unlockedIds: string[];
  earnedBadgeIds: string[];
}) {
  const unlockedCount = nodes.filter((n) => unlockedIds.includes(n.id)).length;
  const hasBadge = earnedBadgeIds.includes(city.id);

  return (
    <div className="space-y-3">
      {/* City header */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">{city.badgeEmoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-black text-base leading-tight">{city.name}</span>
            {hasBadge && (
              <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 border border-amber-500/30">
                Hoàn thành! ✓
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {unlockedCount}/{nodes.length} di sản đã khám phá
          </span>
        </div>
        <div className="shrink-0">
          <div className="flex-1 w-16 h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(unlockedCount / nodes.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Heritage card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
        {nodes.map((node) => (
          <HeritageCard
            key={node.id}
            node={node}
            isUnlocked={unlockedIds.includes(node.id)}
          />
        ))}
      </div>
    </div>
  );
}

export function MuseumGrid({ nodes }: MuseumGridProps) {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [earnedBadgeIds, setEarnedBadgeIds] = useState<string[]>([]);
  const [celebrationBadgeId, setCelebrationBadgeId] = useState<string | null>(null);

  useEffect(() => {
    const state = getMuseumState();
    setUnlockedIds(state.unlockedNodeIds);
    setEarnedBadgeIds(state.earnedBadgeIds);
  }, []);

  const cityMap = groupNodesByCity(nodes, CITIES);
  const totalNodes = nodes.length;
  const unlockedCount = nodes.filter((n) => unlockedIds.includes(n.id)).length;

  return (
    <div className="space-y-8">
      {/* Overall progress */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-muted-foreground shrink-0">
          {unlockedCount}/{totalNodes} di sản
        </span>
        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${totalNodes > 0 ? (unlockedCount / totalNodes) * 100 : 0}%` }}
          />
        </div>
        <span className="text-xs font-bold text-muted-foreground shrink-0">
          {totalNodes > 0 ? Math.round((unlockedCount / totalNodes) * 100) : 0}%
        </span>
      </div>

      {/* City sections */}
      {Array.from(cityMap.entries()).map(([city, cityNodes]) => (
        <CitySection
          key={city.id}
          city={city}
          nodes={cityNodes}
          unlockedIds={unlockedIds}
          earnedBadgeIds={earnedBadgeIds}
        />
      ))}

      {/* Badge celebration overlay */}
      {celebrationBadgeId && (
        <BadgeCelebration
          cityId={celebrationBadgeId}
          onDismiss={() => setCelebrationBadgeId(null)}
        />
      )}
    </div>
  );
}
