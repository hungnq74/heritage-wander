import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  Award, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Share2, 
  ShieldCheck, 
  Star,
  Users,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScoutProfile({ params }: { params: { id: string } }) {
  const scout = {
    name: "Hung N.",
    id: params.id,
    rank: "Master Scout",
    level: 24,
    xp: 12450,
    joinDate: "March 2024",
    location: "Vietnam / Thailand",
    bio: "Passionate about documenting the hidden craft techniques of Southeast Asian hill tribes. Bridging the gap between ancient wisdom and digital permanence.",
    stats: [
      { label: "Entries", value: "48", icon: Star },
      { label: "Verified", value: "92%", icon: ShieldCheck },
      { label: "Elders", value: "32", icon: Users },
      { label: "Royalties", value: "$1,420", icon: Wallet },
    ],
    badges: [
      { name: "Indigo Seeker", rarity: "Legendary", icon: Award },
      { name: "First Contact", rarity: "Common", icon: Award },
      { name: "River Ritualist", rarity: "Rare", icon: Award },
      { name: "Forest Healer", rarity: "Epic", icon: Award },
    ],
    recentEntries: [
      { id: "e1", title: "The Art of Natural Indigo", community: "Baan Dong, TH", status: "Verified", date: "2 days ago" },
      { id: "e2", title: "Rain-Reading Rituals", community: "Lao Chai, VN", status: "In Review", date: "5 days ago" },
      { id: "e3", title: "Boreh Healing Paste", community: "Ubud, Bali", status: "Verified", date: "1 week ago" }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header / Banner */}
      <div className="h-48 w-full bg-gradient-to-r from-secondary to-background relative border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,oklch(0.7_0.12_85_/_0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 -mt-24 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12">
          {/* Sidebar: Profile Info */}
          <aside className="space-y-8">
            <div className="flex flex-col items-center lg:items-start">
              <div className="size-48 rounded-[48px] bg-card border-4 border-background shadow-2xl overflow-hidden mb-6 relative group">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${scout.name}`} 
                  alt={scout.name}
                  className="size-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Share2 className="size-8 text-white" />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-black mb-2">{scout.name}</h1>
                <Badge className="bg-primary/20 text-primary border-primary/30 uppercase font-black tracking-widest text-xs px-4 py-1">
                  {scout.rank}
                </Badge>
                <div className="flex flex-col gap-2 mt-6 text-sm text-muted-foreground font-bold">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-primary" />
                    {scout.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="size-4 text-primary" />
                    Scouting since {scout.joinDate}
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border/50 bg-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">Mastery Badge Shelf</h3>
                <div className="grid grid-cols-2 gap-3">
                  {scout.badges.map((badge, i) => (
                    <div key={i} className="flex flex-col items-center p-3 rounded-2xl bg-background/50 border border-border/30 text-center group cursor-pointer hover:border-primary/50 transition-colors">
                      <badge.icon className={cn(
                        "size-8 mb-2",
                        badge.rarity === "Legendary" ? "text-primary" : "text-muted-foreground"
                      )} />
                      <span className="text-[10px] font-bold leading-tight">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Button className="w-full h-14 rounded-full font-black text-lg gap-3" variant="outline">
              <Share2 className="size-5" />
              Share Scout ID
            </Button>
          </aside>

          {/* Main Content: Stats & Activity */}
          <main className="space-y-12">
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {scout.stats.map((stat, i) => (
                <div key={i} className="rounded-3xl border border-border/50 bg-card p-6 flex flex-col justify-center transition-transform hover:scale-105">
                  <stat.icon className="size-5 text-primary mb-4" />
                  <span className="text-3xl font-black">{stat.value}</span>
                  <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black flex items-center gap-2 italic">
                  <TrendingUp className="size-6 text-primary" />
                  Recent <span className="text-primary">Contributions</span>
                </h2>
                <Button variant="ghost" className="text-primary font-bold">See All Entries</Button>
              </div>

              <div className="space-y-4">
                {scout.recentEntries.map((entry) => (
                  <div key={entry.id} className="group relative rounded-[2rem] border border-border/50 bg-card/50 p-6 flex items-center justify-between transition-all hover:bg-card hover:border-primary/30">
                    <div className="flex items-center gap-6">
                      <div className="size-16 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                        <Star className={cn(
                          "size-8",
                          entry.status === "Verified" ? "text-primary" : "text-muted-foreground/30"
                        )} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{entry.title}</h4>
                        <div className="flex gap-4 text-xs font-bold text-muted-foreground mt-1">
                          <span>{entry.community}</span>
                          <span className="text-primary/50 text-xs tracking-tighter uppercase">{entry.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <Badge variant={entry.status === "Verified" ? "default" : "outline"} className={cn(
                         "rounded-full font-black px-4",
                         entry.status === "Verified" ? "bg-primary text-primary-foreground" : "text-muted-foreground border-border/50"
                       )}>
                        {entry.status}
                       </Badge>
                       <span className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/50">+250 XP Pending</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reputation Section */}
            <section className="rounded-[40px] border border-border/50 bg-gradient-to-br from-secondary/50 to-background p-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <ShieldCheck className="size-32 text-primary" />
               </div>
               <div className="relative z-10 max-w-lg">
                 <h2 className="text-3xl font-black mb-4">Reputation <span className="text-primary italic">Proof</span></h2>
                 <p className="text-muted-foreground font-medium italic mb-8">
                   "This Scout has demonstrated exceptional integrity in documenting textile fermentation. Their entries have a 95% community verification rate."
                 </p>
                 <div className="flex gap-6">
                   <div className="flex flex-col">
                     <span className="text-4xl font-black">Level {scout.level}</span>
                     <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Intelligence Rank</span>
                   </div>
                   <div className="h-12 w-px bg-border/50" />
                   <div className="flex flex-col text-primary">
                     <span className="text-4xl font-black">4.9/5</span>
                     <span className="text-xs font-black uppercase tracking-widest opacity-70">Elder Rating</span>
                   </div>
                 </div>
               </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
