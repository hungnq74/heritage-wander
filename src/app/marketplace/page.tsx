"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Filter,
  Globe,
  ShieldCheck,
  ShoppingBag,
  Eye,
  Info
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MOCK_ASSETS = [
  {
    id: "a1",
    title: "The Indigo Collection",
    category: "Textiles",
    community: "Baan Dong, TH",
    price: "$250 / license",
    reliability: "98%",
    rarity: "Rare",
    image: "https://picsum.photos/seed/indigo/800/600"
  },
  {
    id: "a2",
    title: "Lao Chai Ritual Library",
    category: "Rituals/Audio",
    community: "Hmong Community, VN",
    price: "$1,200 / full access",
    reliability: "100%",
    rarity: "Mythical",
    image: "https://picsum.photos/seed/ritual/800/600"
  },
  {
    id: "a3",
    title: "Medicinal Herb Taxonomy",
    category: "Medicine",
    community: "Ubud, ID",
    price: "$450 / dataset",
    reliability: "95%",
    rarity: "Epic",
    image: "https://picsum.photos/seed/herbs/800/600"
  },
  {
    id: "a4",
    title: "Terracotta Firing Methods",
    category: "Ceramics",
    community: "Bau Truc, VN",
    price: "$300 / license",
    reliability: "94%",
    rarity: "Common",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80"
  }
];

const rarityStyles: Record<string, string> = {
  Common: "bg-primary/10 text-primary border-primary/20",
  Rare: "bg-sky-100 text-sky-700 border-sky-200",
  Epic: "bg-accent/10 text-accent border-accent/20",
  Mythical: "bg-amber-100 text-amber-700 border-amber-200",
};

export default function Marketplace() {
  return (
    <div className="flex flex-col bg-background p-6 md:p-10 max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-8">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
            <ShoppingBag className="size-4" />
            <span className="text-[10px] uppercase font-semibold tracking-widest">Institutional Access</span>
          </div>
          <h1 className="text-2xl font-bold md:text-3xl">
            Cultural <span className="text-primary">Assets</span>
          </h1>
          <p className="text-sm text-muted-foreground">Provenance-verified, licensable community intelligence.</p>
        </div>

        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2 w-full max-w-sm shadow-sm">
          <Search className="size-4 text-muted-foreground shrink-0" />
          <input placeholder="Search archives..." className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/60" />
          <Filter className="size-4 text-muted-foreground shrink-0" />
        </div>
      </header>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {["All", "Textiles", "Rituals", "Medicine", "Agriculture", "Ceramics", "Folklore"].map((cat, i) => (
          <Button
            key={cat}
            variant={i === 0 ? "default" : "outline"}
            size="sm"
            className={cn("h-8 px-3 text-xs rounded-md font-medium", i === 0 ? "" : "border-border text-muted-foreground hover:text-foreground")}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Asset grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {MOCK_ASSETS.map((asset) => (
          <Card key={asset.id} className="group overflow-hidden transition-shadow hover:shadow-md">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image src={asset.image} alt={asset.title} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <Badge
                className={cn(
                  "absolute top-3 right-3 border text-xs",
                  rarityStyles[asset.rarity] ?? "bg-secondary text-foreground border-border"
                )}
              >
                {asset.rarity}
              </Badge>
              <div className="absolute top-3 left-3">
                <Badge variant="outline" className="bg-background/85 backdrop-blur-sm border-border/60 text-foreground text-xs">
                  {asset.category}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
                {asset.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="flex items-center justify-between text-sm mb-3">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Globe className="size-3.5" />
                  {asset.community}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ShieldCheck className="size-3.5 text-primary" />
                  Verified
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Reliability</span>
                  <span className="text-sm font-semibold text-primary">{asset.reliability}</span>
                </div>
                <div className="h-5 w-px bg-border" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Price</span>
                  <span className="text-sm font-semibold text-foreground">{asset.price}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0 flex gap-2">
              <Button className="flex-1 h-9 text-xs font-medium" asChild>
                <Link href={`/marketplace/request/${asset.id}`}>Request License</Link>
              </Button>
              <Button size="icon" variant="outline" className="size-9 border-border shrink-0">
                <Eye className="size-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Info Section */}
      <section className="mt-12 p-8 rounded-xl border border-border bg-secondary/30 flex flex-col md:flex-row items-start gap-6">
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
          <Info className="size-5 text-primary" />
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-base font-semibold">
            Marketplace <span className="text-primary">Provenance</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every asset in this gallery is backed by documented elder consent and community identity proof. We provide the bridge between preservation and commercial utility.
          </p>
          <div className="flex gap-2 pt-1">
            <Button variant="outline" size="sm" className="h-8 px-4 text-xs font-medium">Licensing FAQ</Button>
            <Button variant="ghost" size="sm" className="h-8 px-4 text-xs font-medium">Community Guidelines</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
