"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight, X, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MOCK_ENTRIES = [
  {
    id: "e1",
    title: "Celestial Indigo",
    category: "Textiles",
    scout: "Hung N.",
    xp: 250,
    rarity: "Rare",
    image: "https://picsum.photos/seed/indigo/400/300",
    top: "40%", left: "30%"
  },
  {
    id: "e2",
    title: "Rain-Reading Ritual",
    category: "Rituals",
    scout: "Linh T.",
    xp: 500,
    rarity: "Mythical",
    image: "https://picsum.photos/seed/rain/400/300",
    top: "25%", left: "60%"
  },
  {
    id: "e3",
    title: "Boreh Healing Paste",
    category: "Medicine",
    scout: "Wayan S.",
    xp: 150,
    rarity: "Common",
    image: "https://picsum.photos/seed/healing/400/300",
    top: "70%", left: "45%"
  }
];

export function WorldMap() {
  const [selectedEntry, setSelectedEntry] = useState<typeof MOCK_ENTRIES[0] | null>(null);

  return (
    <div className="relative h-full w-full bg-[#EEE9E0] flex flex-col items-center justify-center overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80')] bg-cover bg-center grayscale" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Interactive Markers */}
      <div className="relative w-full h-full max-w-4xl mx-auto">
        {MOCK_ENTRIES.map((entry) => (
          <div
            key={entry.id}
            className="absolute transition-transform hover:scale-110 cursor-pointer group z-20"
            style={{ top: entry.top, left: entry.left }}
            onClick={() => setSelectedEntry(entry)}
          >
            <div className={cn(
              "size-9 rounded-full border-2 border-background shadow-md flex items-center justify-center",
              entry.rarity === "Mythical" ? "bg-accent" : "bg-primary"
            )}>
              <MapPin className="size-4 text-primary-foreground" />
            </div>

            <div className="absolute top-11 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-background border border-border p-2 rounded-lg whitespace-nowrap shadow-md pointer-events-none">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-primary mb-0.5">{entry.category}</p>
              <p className="text-xs font-medium">{entry.title}</p>
            </div>
          </div>
        ))}

        {/* Selected Entry Detail Popover */}
        {selectedEntry && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-64">
            <Card className="shadow-lg animate-in zoom-in-95 duration-200 p-0 overflow-hidden">
              <div className="relative h-28">
                <Image src={selectedEntry.image} alt={selectedEntry.title} fill unoptimized className="object-cover" />
                <button
                  onClick={() => setSelectedEntry(null)}
                  className="absolute top-2 right-2 size-7 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors border border-border/50"
                >
                  <X className="size-3.5" />
                </button>
              </div>
              <CardHeader className="p-4 pb-2 space-y-1">
                <Badge variant="outline" className="w-fit text-[9px] border-primary/30 text-primary uppercase font-semibold tracking-widest">
                  {selectedEntry.rarity}
                </Badge>
                <CardTitle className="text-base font-semibold">{selectedEntry.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Scout</span>
                    <span className="text-sm font-medium">{selectedEntry.scout}</span>
                  </div>
                  <Button size="sm" className="h-8 px-3 text-xs gap-1.5 font-medium" asChild>
                    <Link href={`/scout/mission/${selectedEntry.id}`}>
                      View <ArrowRight className="size-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Active Region indicator */}
      <div className="absolute bottom-8 left-6 z-30">
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-background/90 backdrop-blur-sm border border-border shadow-sm">
          <div className="size-8 rounded-md bg-primary/10 flex items-center justify-center">
            <Globe className="size-4 text-primary" />
          </div>
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Active Region</h4>
            <p className="text-sm font-medium text-foreground">Southeast Asia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
