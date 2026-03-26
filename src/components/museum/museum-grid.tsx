"use client";

import { useState, useEffect } from "react";
import { ItemCard } from "./item-card";
import type { HeritageNode, CollectibleItem } from "@/lib/types";
import { getMuseumState } from "@/lib/museum-store";
import { Lock } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

const rarityColors: Record<string, string> = {
  Common: "text-primary",
  Rare: "text-sky-500",
  Epic: "text-amber-500",
  Legendary: "text-yellow-500",
  Endangered: "text-red-500",
};

interface MuseumGridProps {
  nodes: HeritageNode[];
}

export function MuseumGrid({ nodes }: MuseumGridProps) {
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<CollectibleItem | null>(null);

  useEffect(() => {
    const state = getMuseumState();
    setCollectedIds(state.collectedItemIds);
  }, []);

  const totalItems = nodes.reduce((s, n) => s + n.items.length, 0);
  const collectedCount = nodes.reduce(
    (s, n) => s + n.items.filter((i) => collectedIds.includes(i.id)).length,
    0
  );

  return (
    <div className="space-y-8">
      {/* Overall progress */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-muted-foreground">
          {collectedCount}/{totalItems} vật phẩm
        </span>
        <div className="flex-1 mx-4 h-1.5 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${(collectedCount / totalItems) * 100}%` }}
          />
        </div>
        <span className="text-xs font-bold text-muted-foreground">
          {Math.round((collectedCount / totalItems) * 100)}%
        </span>
      </div>

      {nodes.map((node) => {
        const nodeCollected = node.items.filter((i) => collectedIds.includes(i.id));
        const isUnlocked = nodeCollected.length > 0;

        return (
          <div key={node.id} className="space-y-3">
            {/* Node header */}
            <div className="flex items-center gap-3">
              <div className={`size-2 rounded-full ${isUnlocked ? "bg-primary" : "bg-muted-foreground/30"}`} />
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold">{node.name}</span>
                  <span className="text-xs text-muted-foreground">{node.nameEn}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden max-w-[120px]">
                    <div
                      className="h-full bg-primary/60 transition-all duration-500"
                      style={{ width: `${(nodeCollected.length / node.items.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium">
                    {nodeCollected.length}/{node.items.length}
                  </span>
                </div>
              </div>
              {!isUnlocked && (
                <div className="flex items-center gap-1 text-muted-foreground/50">
                  <Lock className="size-3" />
                  <span className="text-[10px]">Chưa khám phá</span>
                </div>
              )}
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5">
              {node.items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  collected={collectedIds.includes(item.id)}
                  onClick={collectedIds.includes(item.id) ? () => setSelectedItem(item) : undefined}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Item detail dialog */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-sm p-0 overflow-hidden rounded-2xl">
          {selectedItem && (
            <>
              <div className="aspect-video w-full overflow-hidden bg-secondary/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-black text-lg leading-tight">{selectedItem.name}</h3>
                    <p className="text-sm text-muted-foreground italic">{selectedItem.nameEn}</p>
                  </div>
                  <Badge className={`shrink-0 font-bold ${rarityColors[selectedItem.rarity]} bg-secondary border-0`}>
                    <Star className="size-3 mr-1" />
                    {selectedItem.rarity}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" />
                  <span>{selectedItem.sourceNodeName}</span>
                  <span>·</span>
                  <span>Bởi {selectedItem.artisanName}</span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
