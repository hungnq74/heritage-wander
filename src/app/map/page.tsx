import { WorldMap } from "@/components/map/world-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter, Compass, Bell, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function MapPage() {
  return (
    <div className="relative h-[calc(100vh-3.5rem)] w-full flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Map Content */}
      <div className="flex-1 relative h-full">
        <WorldMap />

        {/* Overlay Controls */}
        <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between gap-3 pointer-events-none">
          <div className="flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border shadow-sm pointer-events-auto w-full max-w-sm">
            <Search className="size-4 text-muted-foreground shrink-0" />
            <input
              placeholder="Search by community or craft..."
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-muted-foreground/60"
            />
            <Button variant="ghost" size="icon" className="size-7 rounded-md shrink-0">
              <Filter className="size-3.5" />
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2 pointer-events-auto">
            <Button variant="outline" className="bg-background/90 backdrop-blur-sm gap-1.5 text-sm font-medium h-9 px-4">
              <ShieldCheck className="size-4 text-primary" />
              Verified Only
            </Button>
            <Button size="icon" variant="outline" className="size-9 bg-background/90 backdrop-blur-sm">
              <Bell className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Discovery Sidebar */}
      <aside className="w-full md:w-80 h-1/2 md:h-full bg-card border-t md:border-t-0 md:border-l border-border flex flex-col z-20">
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Compass className="size-4 text-primary" />
            <span className="text-[10px] uppercase font-semibold tracking-widest text-muted-foreground">Region Discovery</span>
          </div>
          <h2 className="text-lg font-semibold">
            Trending in <span className="text-primary">Southeast Asia</span>
          </h2>
        </div>

        <div className="flex-1 overflow-auto p-5 space-y-6">
          <section>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Hotspots</h3>
            <div className="space-y-2">
              {[
                { name: "Lamphun, Thailand", entries: 124, trend: "+12%" },
                { name: "Hué, Vietnam", entries: 86, trend: "+5%" },
                { name: "Yogyakarta, Indonesia", entries: 215, trend: "+18%" }
              ].map((r, i) => (
                <div key={i} className="group cursor-pointer flex items-center justify-between p-3 rounded-lg bg-background border border-border hover:border-primary/40 transition-all hover:bg-secondary/40">
                  <div>
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{r.name}</h4>
                    <span className="text-xs text-muted-foreground">{r.entries} Verified Entries</span>
                  </div>
                  <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 text-xs font-semibold">{r.trend}</Badge>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Recent Discoveries</h3>
            <div className="flex flex-col gap-3">
              {[
                { title: "Kula Indigo Process", location: "Lao Chai, VN", image: "https://picsum.photos/seed/indigo/400/300" },
                { title: "Boreh Healing Paste", location: "Ubud, Bali", image: "https://picsum.photos/seed/healing/400/300" }
              ].map((d, i) => (
                <div key={i} className="flex gap-3 items-center group cursor-pointer">
                  <div className="size-14 rounded-lg overflow-hidden shrink-0 relative">
                    <Image src={d.image} alt={d.title} fill unoptimized className="object-cover transition-transform group-hover:scale-105" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm leading-snug">{d.title}</h4>
                    <span className="text-xs text-muted-foreground">{d.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="p-4 bg-secondary/40 border-t border-border">
          <Button className="w-full h-9 text-sm font-medium" variant="outline">
            Launch Your Search
          </Button>
        </div>
      </aside>
    </div>
  );
}
