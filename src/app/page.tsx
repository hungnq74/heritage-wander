import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Map, ArrowRight, Sparkles, Globe, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden bg-background px-4">
      {/* Hero */}
      <section className="flex flex-col items-center text-center pt-20 pb-24 max-w-3xl w-full">
        <Badge variant="outline" className="mb-8 px-3 py-1 text-xs font-medium border-border text-muted-foreground">
          <Sparkles className="mr-1.5 size-3 text-accent" />
          Now Scouting in Southeast Asia
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-tight">
          The Living{" "}
          <span className="text-primary">Almanac</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg leading-relaxed">
          An AI-native sanctuary for community-owned cultural intelligence.
          Where youth scouts bridge generations to preserve the future.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="h-11 rounded-lg px-6 text-sm font-semibold" asChild>
            <Link href="/scout">
              Become a Scout <ArrowRight className="ml-1.5 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-11 rounded-lg px-6 text-sm font-semibold" asChild>
            <Link href="/map">
              Explore the Map <Globe className="ml-1.5 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="w-full max-w-4xl border-t border-border" />

      {/* Feature cards */}
      <section className="grid w-full max-w-4xl grid-cols-1 gap-5 py-20 md:grid-cols-3">
        {[
          {
            title: "Guided Capture",
            desc: "AI-assisted interviews that make documenting folklore as easy as chatting.",
            icon: Sparkles,
            color: "text-primary bg-primary/10"
          },
          {
            title: "Provenance Proof",
            desc: "Every entry is verified and linked to its community of origin with radical transparency.",
            icon: ShieldCheck,
            color: "text-accent bg-accent/10"
          },
          {
            title: "Fair Royalties",
            desc: "Automated splits ensure elders and scouts are compensated for their cultural contributions.",
            icon: Map,
            color: "text-primary bg-primary/10"
          }
        ].map((feature, idx) => (
          <div key={idx} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className={`flex size-10 items-center justify-center rounded-lg ${feature.color}`}>
              <feature.icon className="size-5" />
            </div>
            <div>
              <h3 className="mb-1.5 text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      <div className="w-full max-w-4xl border-t border-border" />

      <footer className="py-10 text-xs text-muted-foreground uppercase tracking-widest font-medium">
        Preserving Heritage · Empowering Communities
      </footer>
    </div>
  );
}
