"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { HeritageNode } from "@/lib/types";
import { getDomainEmoji, getDomainLabel, getProvinceLabel } from "@/lib/ich-utils";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface ProximityHudProps {
  node: HeritageNode | null;
  distance: number;
  proximityMeters: number;
  onDismiss: () => void;
}

export function ProximityHud({ node, distance, proximityMeters, onDismiss }: ProximityHudProps) {
  const canEnter = distance <= proximityMeters;
  const [thumbFailed, setThumbFailed] = useState(false);
  const t = useTranslations("proximityHud");

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-16 left-0 right-0 z-50 px-4 pb-2 md:bottom-4 md:pb-4 md:max-w-md md:mx-auto md:left-0 md:right-0"
        >
          <div className="bg-background/95 backdrop-blur-sm rounded-3xl border border-border shadow-2xl p-5">
            {/* Node info */}
            <div className="flex items-center gap-4 mb-4">
              {thumbFailed ? (
                <div className="size-14 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <span className="text-2xl">{getDomainEmoji(node.ichDomain)}</span>
                </div>
              ) : (
                <div className="relative size-14 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={node.coverImage}
                    alt={node.name}
                    fill
                    sizes="56px"
                    onError={() => setThumbFailed(true)}
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                  <span className="text-lg">{getDomainEmoji(node.ichDomain)}</span>
                  <Badge variant="outline" className="text-[10px] border-primary/30 text-primary font-bold">
                    Tier {node.tier}
                  </Badge>
                  {node.unescoStatus === "inscribed" && (
                    <Badge className="text-[10px] bg-amber-500/10 text-amber-600 border-amber-500/20 font-bold">
                      ⭐ UNESCO
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-[10px] text-muted-foreground font-medium">
                    {getProvinceLabel(node.province)}
                  </Badge>
                </div>
                <h3 className="font-black text-base leading-tight">{node.name}</h3>
                <p className="text-xs text-muted-foreground truncate">{getDomainLabel(node.ichDomain).en}</p>
              </div>

              {/* Distance */}
              <div className="flex flex-col items-center shrink-0">
                <div className="flex items-center gap-1 text-accent">
                  <Navigation className="size-3.5" />
                  <span className="font-black text-lg leading-none">{distance}</span>
                </div>
                <span className="text-[9px] font-bold uppercase text-muted-foreground">{t("meters")}</span>
              </div>
            </div>

            {/* Items preview */}
            <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-0.5">
              <MapPin className="size-3 text-muted-foreground shrink-0" />
              <span className="text-xs text-muted-foreground shrink-0">{t("itemsCount", { count: node.items.length })}</span>
              <div className="flex gap-1 ml-1">
                {node.items.slice(0, 4).map((item) => (
                  <div key={item.id} className="relative size-7 rounded-lg overflow-hidden border border-border/50">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </div>
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
                {t("dismiss")}
              </button>
              {canEnter ? (
                <Button className="flex-[2] h-12 rounded-full text-sm font-black" asChild>
                  <Link href={`/explore/node/${node.id}`}>
                    {t("approach")}
                  </Link>
                </Button>
              ) : (
                <div className="flex-[2] h-12 rounded-full bg-secondary flex flex-col items-center justify-center gap-0.5">
                  <span className="text-[11px] font-black text-muted-foreground leading-none">{t("getCloser")}</span>
                  <span className="text-[10px] text-muted-foreground/70 leading-none">{t("metersAway", { count: distance - proximityMeters })}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
