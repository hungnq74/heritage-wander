"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HERITAGE_NODES, TOTAL_ITEMS } from "@/lib/mock-data";
import { getMuseumState, resetMuseum, syncFromCloud } from "@/lib/museum-store";
import { ItemCard } from "@/components/museum/item-card";
import { LayoutGrid, MapPin, Star, Trophy, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/hooks/use-user";
import { signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { userId, anonymousId, isLoggedIn, user } = useUser();
  const [collectedIds, setCollectedIds] = useState<string[]>([]);
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

  useEffect(() => {
    async function loadData() {
      if (userId) {
        await syncFromCloud(userId, anonymousId || undefined);
        const state = getMuseumState();
        setCollectedIds(state.collectedItemIds);
        setUnlockedIds(state.unlockedNodeIds);
      }
    }
    loadData();
  }, [userId, anonymousId]);

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
      <div className="relative mb-10 p-6 md:p-8 rounded-[2.5rem] bg-secondary/30 border border-border/50 overflow-hidden group">
        {/* Background glow */}
        <div className="absolute top-0 right-0 size-40 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-700" />

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
          <div className="relative group/avatar">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover/avatar:scale-110 transition-transform duration-500" />
            <div className="size-24 rounded-[2rem] overflow-hidden border-2 border-primary/20 bg-background flex items-center justify-center shrink-0 shadow-xl relative z-10 transition-transform duration-500 hover:rotate-2 hover:scale-105">
              {user?.image ? (
                <img src={user.image} alt={user.name} className="size-full object-cover" />
              ) : (
                <span className="text-5xl">🧭</span>
              )}
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <h1 className="text-2xl font-black tracking-tight">{user?.name || "Nhà Khám Phá"}</h1>
                {isLoggedIn && (
                  <Badge className="bg-primary/10 text-primary border-primary/20 font-bold text-[10px] px-2 py-0">
                    Verified ✓
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest leading-none opacity-60">
                {isLoggedIn ? "Thành viên lữ hành" : "Khách tham quan"} · Since 2026
              </p>
            </div>

            {isLoggedIn ? (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 animate-in fade-in slide-in-from-top-2 duration-700">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Dữ liệu đã được đồng bộ hóa với Google
              </div>
            ) : (
              <Button asChild variant="outline" size="sm" className="h-9 px-4 rounded-full text-xs font-bold border-dashed hover:border-primary transition-all">
                <Link href="/login">
                  <LogIn className="size-3.5 mr-2" />
                  Đăng nhập để lưu tiến trình
                </Link>
              </Button>
            )}
          </div>

          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="text-[10px] font-black text-muted-foreground uppercase tracking-tighter opacity-40">Cấp độ</div>
            <div className="size-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg shadow-primary/20">
              {Math.max(1, Math.floor(collectedIds.length / 3) + 1)}
            </div>
          </div>
        </div>
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
