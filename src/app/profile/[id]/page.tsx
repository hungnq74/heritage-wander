"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HERITAGE_NODES, TOTAL_ITEMS } from "@/lib/mock-data";
import { getMuseumState, resetMuseum } from "@/lib/museum-store";
import { ItemCard } from "@/components/museum/item-card";
import { LayoutGrid, MapPin, Star, Trophy } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

  useEffect(() => {
    const state = getMuseumState();
    setCollectedIds(state.collectedItemIds);
    setUnlockedIds(state.unlockedNodeIds);
  }, []);

  const allItems = HERITAGE_NODES.flatMap((n) => n.items);
  const earnedItems = allItems.filter((i) => collectedIds.includes(i.id));
  const legendaryCount = earnedItems.filter((i) => i.rarity === "Legendary" || i.rarity === "Endangered").length;

  const handleReset = () => {
    resetMuseum();
    setCollectedIds([]);
    setUnlockedIds([]);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Profile header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="size-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-4xl shrink-0">
          🧭
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-black">Nhà Khám Phá</h1>
          <p className="text-sm text-muted-foreground italic">Heritage Explorer</p>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Huế, Việt Nam</span>
          </div>
        </div>
        <Badge className="bg-primary/10 text-primary border-primary/20 font-black text-xs px-3 py-1.5">
          Level {Math.max(1, Math.floor(collectedIds.length / 3) + 1)}
        </Badge>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-8">
        {[
          { icon: MapPin, value: unlockedIds.length, label: "Địa điểm" },
          { icon: LayoutGrid, value: collectedIds.length, label: "Vật phẩm" },
          { icon: Star, value: legendaryCount, label: "Huyền thoại" },
          { icon: Trophy, value: `${Math.round((collectedIds.length / TOTAL_ITEMS) * 100)}%`, label: "Hoàn thành" },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col items-center p-3 rounded-2xl bg-secondary/50 border border-border/50">
              <Icon className="size-4 text-muted-foreground mb-1.5" />
              <span className="text-xl font-black text-primary">{stat.value}</span>
              <span className="text-[10px] text-muted-foreground font-medium mt-0.5 text-center">{stat.label}</span>
            </div>
          );
        })}
      </div>

      <Tabs defaultValue="collection">
        <TabsList className="mb-6 h-10 bg-secondary rounded-xl p-1">
          <TabsTrigger value="collection" className="gap-1.5 text-sm rounded-lg">
            <LayoutGrid className="size-3.5" />
            Bộ sưu tập
          </TabsTrigger>
          <TabsTrigger value="achievements" className="gap-1.5 text-sm rounded-lg">
            <Trophy className="size-3.5" />
            Thành tích
          </TabsTrigger>
        </TabsList>

        <TabsContent value="collection">
          {earnedItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <span className="text-5xl">🗺️</span>
              <div>
                <h3 className="font-bold text-lg">Chưa có vật phẩm</h3>
                <p className="text-sm text-muted-foreground mt-1">Khám phá làng nghề để bắt đầu sưu tầm.</p>
              </div>
              <Button asChild className="rounded-full h-12 px-6">
                <Link href="/explore">Bắt đầu khám phá</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2.5">
              {earnedItems.map((item) => (
                <ItemCard key={item.id} item={item} collected />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="achievements">
          <div className="space-y-3">
            {[
              { emoji: "🚀", title: "Người tiên phong", titleEn: "Pioneer", desc: "Mở khóa địa điểm đầu tiên", unlocked: unlockedIds.length > 0 },
              { emoji: "🏺", title: "Nhà sưu tập", titleEn: "Collector", desc: "Thu thập 5 vật phẩm", unlocked: collectedIds.length >= 5 },
              { emoji: "⭐", title: "Thợ săn huyền thoại", titleEn: "Legendary Hunter", desc: "Tìm được 1 vật phẩm Huyền thoại", unlocked: legendaryCount > 0 },
              { emoji: "🗺️", title: "Lữ khách Huế", titleEn: "Hue Wanderer", desc: "Khám phá 3 làng nghề Huế", unlocked: unlockedIds.length >= 3 },
              { emoji: "🏆", title: "Nhà bảo tàng", titleEn: "Curator", desc: "Hoàn thành 50% bộ sưu tập", unlocked: (collectedIds.length / TOTAL_ITEMS) >= 0.5 },
            ].map((a) => (
              <div key={a.title} className={`flex items-center gap-4 p-4 rounded-2xl border ${a.unlocked ? "bg-secondary/50 border-border/50" : "opacity-40 border-border/30"}`}>
                <span className="text-2xl">{a.emoji}</span>
                <div className="flex-1">
                  <p className="font-bold text-sm">{a.title} <span className="text-muted-foreground font-normal">· {a.titleEn}</span></p>
                  <p className="text-xs text-muted-foreground">{a.desc}</p>
                </div>
                {a.unlocked && <Badge className="bg-primary/10 text-primary border-0 text-xs">Đạt được ✓</Badge>}
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Debug reset */}
      <div className="mt-12 pt-6 border-t border-border/30">
        <button
          onClick={handleReset}
          className="text-xs text-muted-foreground/50 hover:text-destructive transition-colors"
        >
          Reset museum state (demo only)
        </button>
      </div>
    </div>
  );
}
