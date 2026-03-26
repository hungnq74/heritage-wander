"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShieldCheck,
  Search,
  Filter,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  User,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MOCK_QUEUE = [
  { id: "s1", title: "Natural Indigo Fermentation", scout: "Hung N.", community: "Baan Dong", category: "Textiles", submitted: "2h ago", priority: "High" },
  { id: "s2", title: "Rain-Reading Rituals", scout: "Linh T.", community: "Lao Chai", category: "Rituals", submitted: "5h ago", priority: "Med" },
  { id: "s3", title: "Medicinal Ginger Tea", scout: "Wayan S.", community: "Ubud", category: "Medicine", submitted: "1d ago", priority: "Low" }
];

export default function VerifierDashboard() {
  const [selected, setSelected] = useState<typeof MOCK_QUEUE[0] | null>(null);

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)] bg-background">
      <header className="px-6 py-4 border-b border-border bg-card flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold flex items-center gap-2">
            <ShieldCheck className="size-5 text-primary" />
            Verifier <span className="text-primary">Console</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-widest">Quality Control & Community Trust</p>
        </div>
        <div className="flex gap-3">
          <div className="px-4 py-2 rounded-lg bg-secondary border border-border flex flex-col items-center">
            <span className="text-lg font-bold text-primary">24</span>
            <span className="text-[10px] font-medium uppercase text-muted-foreground">Pending</span>
          </div>
          <div className="px-4 py-2 rounded-lg bg-secondary border border-border flex flex-col items-center">
            <span className="text-lg font-bold text-accent">98%</span>
            <span className="text-[10px] font-medium uppercase text-muted-foreground">Trust Score</span>
          </div>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Queue List */}
        <section className="w-full md:w-80 border-r border-border flex flex-col bg-card">
          <div className="p-3 border-b border-border flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                placeholder="Search queue..."
                className="w-full bg-background border border-border rounded-md py-1.5 pl-8 pr-3 text-sm outline-none focus:border-primary/50"
              />
            </div>
            <Button variant="outline" size="icon" className="size-8 shrink-0"><Filter className="size-3.5" /></Button>
          </div>

          <div className="flex-1 overflow-auto divide-y divide-border">
            {MOCK_QUEUE.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "p-4 cursor-pointer transition-all hover:bg-secondary/40 flex items-center justify-between gap-3 group",
                  selected?.id === item.id ? "bg-secondary/50 border-l-2 border-primary" : "border-l-2 border-transparent"
                )}
                onClick={() => setSelected(item)}
              >
                <div className="min-w-0 space-y-1">
                  <h4 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors truncate">{item.title}</h4>
                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>{item.scout}</span>
                    <span>·</span>
                    <span>{item.submitted}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs px-2 h-5",
                      item.priority === "High" ? "border-accent/40 text-accent bg-accent/5" : "border-border text-muted-foreground"
                    )}
                  >
                    {item.priority}
                  </Badge>
                  <ChevronRight className="size-3.5 text-muted-foreground/40 group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workspace */}
        <section className="flex-1 bg-background overflow-auto p-6 md:p-8">
          {selected ? (
            <div className="max-w-3xl mx-auto space-y-6">
              <header className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <Badge className="bg-primary/10 text-primary border-primary/20 uppercase font-semibold tracking-wider text-xs">{selected.category}</Badge>
                  <h2 className="text-xl font-bold">{selected.title}</h2>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="size-3.5" /> {selected.scout}</span>
                    <span className="flex items-center gap-1"><Clock className="size-3.5" /> {selected.submitted}</span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <Button variant="outline" size="sm" className="h-8 px-3 text-xs gap-1.5">
                    <MessageSquare className="size-3.5" /> Revisions
                  </Button>
                  <Button size="sm" className="h-8 px-3 text-xs gap-1.5">
                    <CheckCircle2 className="size-3.5" /> Approve
                  </Button>
                </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Evidence */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Main Evidence</h3>
                  <div className="aspect-[4/3] rounded-lg bg-secondary relative overflow-hidden border border-border group">
                    <Image src="https://picsum.photos/seed/indigo/800/600" alt="Evidence" fill unoptimized className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    <Button variant="secondary" size="sm" className="absolute bottom-3 right-3 h-7 px-3 text-xs gap-1.5">
                      <ExternalLink className="size-3" /> View Source
                    </Button>
                  </div>
                  <div className="p-4 rounded-lg border border-border bg-secondary/30">
                    <h4 className="text-[10px] font-semibold uppercase text-muted-foreground mb-2">Partial Transcription</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                      "...and then Mae Som said the lime must be added only when the sun is directly above, otherwise the blue won't stay in the yarn. We waited for three days before the bubbles turned into the right shade of violet..."
                    </p>
                  </div>
                </div>

                {/* AI Review */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-primary">AI-Structured Data Review</h3>
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="p-5 space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-primary/70">Extracted Summary</label>
                        <p className="text-sm leading-relaxed">
                          Ceremonial indigo dyeing technique using 'Khram' plants and sun-timed lime activation.
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-background border border-primary/10">
                        <label className="text-[10px] font-semibold uppercase tracking-widest text-primary/70 block mb-2">Technique Steps</label>
                        <ol className="text-xs space-y-1.5 text-muted-foreground">
                          <li className="flex gap-2"><span className="text-primary font-medium">01.</span> Harvest post-monsoon foliage</li>
                          <li className="flex gap-2"><span className="text-primary font-medium">02.</span> 3-day fermentation in clay vats</li>
                          <li className="flex gap-2"><span className="text-primary font-medium">03.</span> Lime addition at solar noon</li>
                        </ol>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20">
                        <AlertCircle className="size-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <h5 className="text-[10px] font-semibold uppercase text-accent mb-0.5">Confidence Warning</h5>
                          <p className="text-xs text-muted-foreground">Step 03 may be local folklore rather than scientific necessity. Verifier must confirm cultural significance.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="p-4 rounded-lg bg-secondary/40 border border-border">
                    <h4 className="text-[10px] font-semibold uppercase text-muted-foreground mb-3">Community Proof</h4>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-md bg-accent/10 flex items-center justify-center">
                        <ShieldCheck className="size-4 text-accent" />
                      </div>
                      <span className="text-xs text-muted-foreground">Provenance verified via Elder Consent ID: <span className="text-primary font-medium">#SOM-42</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-30 select-none">
              <ShieldCheck className="size-16 mb-4" />
              <h2 className="text-lg font-semibold">Select a submission<br />to begin review</h2>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
