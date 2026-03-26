"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { HeritageNode } from "@/lib/types";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";

const craftEmoji: Record<string, string> = {
  carpentry: "🪵",
  incense: "🕯️",
  silk: "🧵",
  pottery: "🏺",
  "hat-making": "👒",
};

interface ProximityHudProps {
  node: HeritageNode | null;
  distance: number;
  onDismiss: () => void;
}

export function ProximityHud({ node, distance, onDismiss }: ProximityHudProps) {
  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] md:max-w-md md:mx-auto md:left-0 md:right-0"
        >
          <div className="bg-background/95 backdrop-blur-md rounded-3xl border border-border shadow-2xl p-5">
            {/* Node info */}
            <div className="flex items-center gap-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={node.coverImage}
                alt={node.name}
                className="size-14 rounded-2xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-lg">{craftEmoji[node.craftCategory]}</span>
                  <Badge variant="outline" className="text-[10px] border-primary/30 text-primary font-bold">
                    Tier {node.tier}
                  </Badge>
                </div>
                <h3 className="font-black text-base leading-tight">{node.name}</h3>
                <p className="text-xs text-muted-foreground truncate">{node.nameEn}</p>
              </div>

              {/* Distance */}
              <div className="flex flex-col items-center shrink-0">
                <div className="flex items-center gap-1 text-accent">
                  <Navigation className="size-3.5" />
                  <span className="font-black text-lg leading-none">{distance}</span>
                </div>
                <span className="text-[9px] font-bold uppercase text-muted-foreground">mét</span>
              </div>
            </div>

            {/* Items preview */}
            <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-0.5">
              <MapPin className="size-3 text-muted-foreground shrink-0" />
              <span className="text-xs text-muted-foreground shrink-0">{node.items.length} vật phẩm</span>
              <div className="flex gap-1 ml-1">
                {node.items.slice(0, 4).map((item) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={item.id}
                    src={item.image}
                    alt=""
                    className="size-7 rounded-lg object-cover border border-border/50"
                  />
                ))}
                {node.items.length > 4 && (
                  <div className="size-7 rounded-lg bg-secondary flex items-center justify-center text-[9px] font-bold text-muted-foreground border border-border/50">
                    +{node.items.length - 4}
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <button
                onClick={onDismiss}
                className="flex-1 h-12 rounded-full border border-border text-sm font-bold text-muted-foreground hover:bg-secondary transition-colors"
              >
                Để sau
              </button>
              <Button className="flex-[2] h-12 rounded-full text-sm font-black" asChild>
                <Link href={`/explore/node/${node.id}`}>
                  Tiếp cận →
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
