import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, MapPin, Clock, Star, Zap, Info, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function MissionDetail({ params }: { params: { id: string } }) {
  // In a real app, fetch based on params.id
  const mission = {
    id: params.id,
    title: "The Art of Natural Indigo",
    category: "Textiles",
    community: "Baan Dong, Thailand",
    xp: 250,
    time: "2-3 hours",
    rarity: "Rare",
    image: "https://images.unsplash.com/photo-1590004953392-5aba2e785994?w=1200&q=80",
    description: "Natural indigo dyeing is an ancient craft in Baan Dong. This mission involves documenting the full process from harvesting the 'Khram' (indigo) plant to the final fermentation and dyeing of cotton yarns. You will speak with Mae Som, the community's master dyer.",
    objectives: [
      "Document the plant harvesting and preparation.",
      "Record the fermentation vat creation (the 'indigo mother').",
      "Capture the rhythmic dipping technique.",
      "Get Mae Som's story on why this craft matters today."
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="relative h-[40vh] w-full">
        <img src={mission.image} alt={mission.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <Link href="/scout" className="absolute top-6 left-6 flex size-10 items-center justify-center rounded-full bg-background/50 backdrop-blur-md text-foreground hover:bg-background transition-colors">
          <ChevronLeft className="size-6" />
        </Link>
        <Badge className="absolute bottom-10 left-10 bg-primary/90 text-primary-foreground font-black px-4 py-1">
          {mission.rarity} Mission
        </Badge>
      </div>

      <div className="flex-1 -mt-8 relative rounded-t-[32px] bg-background p-6 md:p-10 lg:px-24">
        <header className="mb-8">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-widest font-black">
            {mission.category}
          </Badge>
          <h1 className="text-4xl font-black md:text-6xl mb-4">{mission.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground font-bold">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {mission.community}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-primary" />
              {mission.time}
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 text-primary" />
              {mission.xp} XP
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                <Info className="size-6 text-primary" />
                Mission Brief
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </div>

            <div className="rounded-3xl border border-border/50 bg-secondary/30 p-8">
              <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                <Zap className="size-6 text-primary" />
                Key Objectives
              </h2>
              <ul className="space-y-4">
                {mission.objectives.map((obj, i) => (
                  <li key={i} className="flex gap-4 items-start text-muted-foreground font-medium">
                    <div className="mt-1.5 size-2 rounded-full bg-primary shrink-0" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border/50 bg-card p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Preparation</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <ShieldCheck className="size-5 text-accent shrink-0" />
                  <p>Ensure you have elder consent before recording.</p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="size-5 text-accent shrink-0" />
                  <p>Charge your device for video capture.</p>
                </div>
                <div className="flex gap-3">
                  <ShieldCheck className="size-5 text-accent shrink-0" />
                  <p>Record in a quiet environment if possible.</p>
                </div>
              </div>
              <Button size="lg" className="w-full mt-8 h-14 rounded-full text-lg font-black shadow-lg shadow-primary/20" asChild>
                <Link href={`/scout/capture?mission=${mission.id}`}>
                  Accept Mission
                </Link>
              </Button>
            </div>
            
            <div className="rounded-3xl border border-border/50 bg-secondary/20 p-6">
              <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Rewards</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-muted-foreground">Base XP</span>
                  <span className="font-black text-primary">+200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-muted-foreground">Media Bonus</span>
                  <span className="font-black text-primary">+50</span>
                </div>
                <div className="flex justify-between items-center border-t border-border/50 pt-4">
                  <span className="font-bold">Total Potential</span>
                  <span className="font-black text-primary">250 XP</span>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
