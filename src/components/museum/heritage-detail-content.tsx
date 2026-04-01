"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MapPin, Lock } from "lucide-react";
import { getMuseumState } from "@/lib/museum-store";
import { getCategoryLabel, getDomainEmoji, getDomainLabel, getProvinceLabel } from "@/lib/ich-utils";
import { getCityById } from "@/lib/cities";
import { Badge } from "@/components/ui/badge";
import type { HeritageNode } from "@/lib/types";
import { useTranslations, useLocale } from "next-intl";

export function HeritageDetailContent({ node }: { node: HeritageNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [collectedItemIds, setCollectedItemIds] = useState<string[]>([]);
  const [heroFailed, setHeroFailed] = useState(false);
  const t = useTranslations("heritageDetail");
  const locale = useLocale();

  useEffect(() => {
    const state = getMuseumState();
    setIsUnlocked(state.unlockedNodeIds.includes(node.id));
    setCollectedItemIds(state.collectedItemIds);
  }, [node.id]);

  const category = getCategoryLabel(node.category);
  const city = getCityById(node.cityId);

  return (
    <div className="max-w-xl mx-auto pb-24">
      {/* Hero cover */}
      <div className="relative w-full aspect-[16/9] bg-secondary overflow-hidden">
        {!heroFailed ? (
          <Image
            src={node.coverImage}
            alt={node.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 800px"
            onError={() => setHeroFailed(true)}
            className={`object-cover transition-opacity duration-500 ${!isUnlocked ? "opacity-40" : "opacity-100"}`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <span className="text-6xl opacity-40">{getCategoryLabel(node.category).emoji}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Back button */}
        <Link
          href="/museum"
          className="absolute top-4 left-4 size-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md"
        >
          <ChevronLeft className="size-5" />
        </Link>

        {/* Lock overlay */}
        {!isUnlocked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-white/80">
              <Lock className="size-8" />
              <span className="text-xs font-bold">{t("notExplored")}</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pt-5 space-y-5">
        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className="text-xs font-bold border-primary/30 text-primary">
            {category.emoji} {category.vi}
          </Badge>
          {node.unescoStatus === "inscribed" && (
            <Badge className="text-xs bg-amber-500/10 text-amber-600 border-amber-500/20 font-bold">
              ⭐ UNESCO
            </Badge>
          )}
          <Badge variant="outline" className="text-xs text-muted-foreground">
            Tier {node.tier}
          </Badge>
          <Badge variant="outline" className="text-xs text-muted-foreground gap-1">
            {getDomainEmoji(node.ichDomain)} {getDomainLabel(node.ichDomain)[locale as "vi" | "en"] ?? getDomainLabel(node.ichDomain).vi}
          </Badge>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-2xl font-black leading-tight">{node.name}</h1>
          <p className="text-sm text-muted-foreground italic mt-0.5">{node.nameEn}</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5 shrink-0" />
          <span>
            {city ? city.name : getProvinceLabel(node.province)}
            {" · "}
            {getProvinceLabel(node.province)}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-foreground/80">
          {node.knowledgeSummary}
        </p>

        {/* Collectibles */}
        <div>
          <h2 className="font-black text-base mb-3">
            {t("collectibles")}
            <span className="ml-2 text-xs font-normal text-muted-foreground">
              {node.items.filter((i) => collectedItemIds.includes(i.id)).length}/{node.items.length}
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-2.5">
            {node.items.map((item) => {
              const collected = collectedItemIds.includes(item.id);
              return (
                <div key={item.id} className="space-y-1">
                  <div className={`aspect-square relative rounded-xl overflow-hidden bg-secondary ${!collected ? "opacity-40" : ""}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 33vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-bold leading-tight line-clamp-2 text-center">
                    {collected ? item.name : "???"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        {!isUnlocked && (
          <Link
            href="/explore"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm"
          >
            <MapPin className="size-4" />
            {t("visitCta")}
          </Link>
        )}
      </div>
    </div>
  );
}
