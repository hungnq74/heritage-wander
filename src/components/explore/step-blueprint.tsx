"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { HeritageNode } from "@/lib/types";
import { Play, User, Package } from "lucide-react";

interface StepBlueprintProps {
  node: HeritageNode;
  onNext: () => void;
}

export function StepBlueprint({ node, onNext }: StepBlueprintProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background max-w-2xl mx-auto">
      {/* Video area */}
      <div className="relative aspect-video w-full bg-foreground/10 overflow-hidden shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.coverImage}
          alt={node.name}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="size-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
            <Play className="size-7 text-primary ml-0.5" />
          </button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-0 text-xs font-bold">
            Bản thiết kế · {node.nameEn}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-6 space-y-6 overflow-y-auto">
        {/* Title */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">
            Khám phá làng nghề
          </p>
          <h2 className="text-2xl font-black">{node.name}</h2>
          <p className="text-sm text-muted-foreground italic mt-0.5">{node.nameEn}</p>
        </div>

        {/* Knowledge summary */}
        <Card className="border-border/50 bg-secondary/30">
          <CardContent className="p-4 space-y-3">
            <p className="text-sm leading-relaxed">{node.knowledgeSummary}</p>
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              {node.knowledgeSummaryEn}
            </p>
          </CardContent>
        </Card>

        {/* Materials */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Package className="size-4 text-muted-foreground" />
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Nguyên liệu / Materials
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {node.materials.map((m) => (
              <Badge key={m} className="bg-secondary text-primary font-bold border-0 text-xs">
                {m}
              </Badge>
            ))}
          </div>
        </div>

        {/* Artisan */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-secondary/40 border border-border/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={node.artisanAvatar}
            alt={node.artisanName}
            className="size-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-bold">{node.artisanName}</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <User className="size-3" />
              <span>Nghệ nhân · Tier {node.tier}</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
            Xác minh ✓
          </Badge>
        </div>

        {/* Items preview */}
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">
            Vật phẩm có thể nhận · {node.items.length} items
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {node.items.map((item) => (
              <div
                key={item.id}
                className="shrink-0 flex flex-col items-center gap-1 w-16"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-14 rounded-xl object-cover border border-border/50"
                />
                <span className="text-[9px] text-center text-muted-foreground font-medium leading-tight line-clamp-2">
                  {item.rarity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer for button */}
        <div className="h-4" />
      </div>

      {/* CTA — sticky */}
      <div className="sticky bottom-0 px-5 py-4 bg-background/95 backdrop-blur-sm border-t border-border/50">
        <Button
          size="lg"
          className="w-full h-14 rounded-full text-base font-black"
          onClick={onNext}
        >
          Gặp nghệ nhân →
        </Button>
      </div>
    </div>
  );
}
