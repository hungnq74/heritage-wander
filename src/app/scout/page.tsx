import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Zap, Clock, Star, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MOCK_MISSIONS = [
  {
    id: "m1",
    title: "The Art of Natural Indigo",
    category: "Textiles",
    community: "Baan Dong, Thailand",
    xp: 250,
    time: "2-3 hours",
    rarity: "Rare",
    status: "Active",
    image: "https://picsum.photos/seed/indigo/800/450"
  },
  {
    id: "m2",
    title: "Rain-Reading Rituals",
    category: "Weather",
    community: "Lao Chai, Vietnam",
    xp: 500,
    time: "Full Session",
    rarity: "Mythical",
    status: "New",
    image: "https://picsum.photos/seed/rain/800/450"
  },
  {
    id: "m3",
    title: "Grandmother's Medicinal Teas",
    category: "Farming",
    community: "Ubud, Bali",
    xp: 150,
    time: "45 mins",
    rarity: "Common",
    status: "Available",
    image: "https://picsum.photos/seed/herbs/800/450"
  }
];

const rarityStyles: Record<string, string> = {
  Common: "bg-primary/10 text-primary border-primary/20",
  Rare: "bg-sky-100 text-sky-700 border-sky-200",
  Mythical: "bg-accent/10 text-accent border-accent/20",
};

function MissionCard({ mission }: { mission: typeof MOCK_MISSIONS[0] }) {
  return (
    <Card className="group overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-[16/9] w-full overflow-hidden relative">
        <Image
          src={mission.image}
          alt={mission.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge
          className={cn(
            "absolute top-3 right-3 border text-xs",
            rarityStyles[mission.rarity] ?? "bg-secondary text-foreground border-border"
          )}
        >
          {mission.rarity}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
          {mission.category}
        </span>
        <CardTitle className="text-base font-semibold leading-snug group-hover:text-primary transition-colors">
          {mission.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="size-3.5" />
          {mission.community}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-3">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="size-3" />
            {mission.time}
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-primary">
            <Star className="size-3" />
            {mission.xp} XP
          </div>
        </div>
        <Button size="sm" className="h-7 px-3 text-xs rounded-md font-medium" asChild>
          <Link href={`/scout/mission/${mission.id}`}>Start</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ScoutDashboard() {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-10 max-w-5xl mx-auto">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">
            Welcome back, <span className="text-primary">Scout.</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">You have 2 missions awaiting your community expertise.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center rounded-lg bg-secondary border border-border px-5 py-2.5">
            <span className="text-xl font-bold text-primary">1,240</span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">Total XP</span>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-secondary border border-border px-5 py-2.5">
            <span className="text-xl font-bold text-accent">#04</span>
            <span className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">Rank</span>
          </div>
        </div>
      </header>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold flex items-center gap-1.5 text-foreground">
            <Zap className="size-4 text-primary" />
            Current Missions
          </h2>
          <Button variant="ghost" size="sm" className="text-primary text-xs font-medium h-7 px-2">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_MISSIONS.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}

          <Link
            href="/scout/capture"
            className="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border/60 bg-transparent p-8 transition-all hover:border-primary/40 hover:bg-primary/5"
          >
            <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-secondary transition-transform group-hover:scale-110">
              <PlusCircle className="size-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold">Custom Capture</h3>
            <p className="mt-1 text-center text-xs text-muted-foreground">
              Document something outside of listed missions.
            </p>
          </Link>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-secondary/40 p-6">
        <h2 className="text-sm font-semibold mb-5 flex items-center gap-1.5">
          <Star className="size-4 text-primary" />
          Your Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Entries Verified", value: "12" },
            { label: "Elders Credited", value: "08" },
            { label: "Royalties Earned", value: "$420" },
            { label: "Global Reach", value: "3 Regions" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-2xl font-bold text-primary">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
