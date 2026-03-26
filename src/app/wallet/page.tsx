"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  History,
  ShieldCheck,
  ExternalLink,
  Users,
  PieChart,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

const MOCK_TRANSACTIONS = [
  { id: "t1", title: "Indigo Collection License", type: "Credit", amount: "$75.00", scout: "Hung N.", date: "Mar 24, 2024", split: "30% Scout Share" },
  { id: "t2", title: "Boreh Healing Paste Dataset", type: "Credit", amount: "$135.00", scout: "Hung N.", date: "Mar 22, 2024", split: "30% Scout Share" },
  { id: "t3", title: "Hué Silk Pattern Rights", type: "Credit", amount: "$210.00", scout: "Hung N.", date: "Mar 18, 2024", split: "30% Scout Share" },
  { id: "t4", title: "Platform Fee Recovery", type: "Debit", amount: "-$12.50", scout: "System", date: "Mar 15, 2024", split: "N/A" }
];

export default function WalletPage() {
  return (
    <div className="flex flex-col bg-background p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[10px] uppercase font-semibold tracking-widest text-muted-foreground mb-1">Transparent Royalty Ledger</p>
          <h1 className="text-2xl font-bold md:text-3xl flex items-center gap-2">
            <Wallet className="size-6 text-primary" />
            My <span className="text-primary">Wallet</span>
          </h1>
        </div>
        <Button className="h-10 px-6 text-sm font-medium gap-2">
          <ArrowDownLeft className="size-4" /> Withdraw Earnings
        </Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-6">
          {/* Main Balance Card */}
          <Card className="overflow-hidden">
            <CardContent className="p-6 space-y-5">
              <div className="space-y-0.5">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Available Balance</span>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">
                  $<span className="text-primary">1,420</span>.50
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-secondary/60 border border-border flex items-center gap-4">
                  <div className="size-9 rounded-md bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="size-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase text-muted-foreground">Month to Date</span>
                    <p className="text-lg font-bold text-primary">+$420.00</p>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/60 border border-border flex items-center gap-4">
                  <div className="size-9 rounded-md bg-accent/10 flex items-center justify-center">
                    <ShieldCheck className="size-4 text-accent" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium uppercase text-muted-foreground">Status Score</span>
                    <p className="text-lg font-bold text-accent">Top 5%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transaction History */}
          <section className="space-y-3">
            <h2 className="text-sm font-semibold flex items-center gap-1.5">
              <History className="size-4 text-primary" />
              Recent Ledger Entries
            </h2>
            <div className="space-y-2">
              {MOCK_TRANSACTIONS.map((t) => (
                <div key={t.id} className="group p-4 rounded-lg border border-border bg-card flex items-center justify-between transition-all hover:border-primary/40 hover:shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "size-9 rounded-md flex items-center justify-center shrink-0",
                      t.type === "Credit" ? "bg-primary/10" : "bg-destructive/10"
                    )}>
                      {t.type === "Credit"
                        ? <ArrowDownLeft className="size-4 text-primary" />
                        : <ArrowUpRight className="size-4 text-destructive" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">{t.title}</h4>
                      <div className="flex gap-3 text-xs text-muted-foreground mt-0.5">
                        <span>{t.date}</span>
                        <span>{t.split}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={cn(
                      "text-sm font-semibold",
                      t.type === "Credit" ? "text-primary" : "text-destructive"
                    )}>{t.amount}</div>
                    <Badge variant="outline" className="text-[9px] rounded border-border text-muted-foreground mt-0.5">Verified</Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="w-full h-9 text-xs text-muted-foreground hover:text-primary">View Full History</Button>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold">
                Standard <span className="text-primary">Split Policy</span>
              </CardTitle>
              <CardDescription className="text-xs">Radical transparency in cultural compensation.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                {[
                  { label: "Knowledge Holder (Elder)", value: "50%", icon: Users, color: "text-accent" },
                  { label: "Knowledge Scout (Youth)", value: "30%", icon: Star, color: "text-primary" },
                  { label: "Platform Sustainability", value: "20%", icon: PieChart, color: "text-muted-foreground" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border">
                    <div className="flex items-center gap-2">
                      <item.icon className={cn("size-3.5", item.color)} />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 flex gap-3">
                <ShieldCheck className="size-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  All royalties are distributed automatically via the community treasury.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-xl border border-dashed border-border p-6 text-center space-y-4">
            <div className="size-12 rounded-lg bg-secondary mx-auto flex items-center justify-center">
              <ExternalLink className="size-5 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-medium">Connect External Bank</h3>
              <p className="text-xs text-muted-foreground">Link your account for faster withdrawals.</p>
            </div>
            <Button variant="outline" size="sm" className="w-full h-9 text-xs font-medium">Link Account</Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
