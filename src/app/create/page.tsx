import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Route, Building2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function CreatePage() {
  const t = await getTranslations("create");

  const tiers = [
    {
      id: 1,
      icon: "🌿",
      lucide: MapPin,
      title: t("tiers.tier1Title"),
      titleEn: t("tiers.tier1TitleEn"),
      badge: t("tiers.tier1Badge"),
      description: t("tiers.tier1Desc"),
      earnings: t("tiers.tier1Earnings"),
      href: "/create/node",
      cta: t("tiers.tier1Cta"),
    },
    {
      id: 2,
      icon: "🗺️",
      lucide: Route,
      title: t("tiers.tier2Title"),
      titleEn: t("tiers.tier2TitleEn"),
      badge: t("tiers.tier2Badge"),
      description: t("tiers.tier2Desc"),
      earnings: t("tiers.tier2Earnings"),
      href: "/create/route",
      cta: t("tiers.tier2Cta"),
    },
    {
      id: 3,
      icon: "🏛️",
      lucide: Building2,
      title: t("tiers.tier3Title"),
      titleEn: t("tiers.tier3TitleEn"),
      badge: t("tiers.tier3Badge"),
      description: t("tiers.tier3Desc"),
      earnings: t("tiers.tier3Earnings"),
      href: "/admin",
      cta: t("tiers.tier3Cta"),
    },
  ];

  const knowledgeHolderRoles = [
    { emoji: "🏺", label: t("roles.artisan") },
    { emoji: "🎶", label: t("roles.performer") },
    { emoji: "👴", label: t("roles.elder") },
    { emoji: "📜", label: t("roles.storyteller") },
    { emoji: "🕯️", label: t("roles.ceremonyKeeper") },
    { emoji: "🌿", label: t("roles.healer") },
    { emoji: "🥁", label: t("roles.ritualMaster") },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">
          {t("creatorPlatform")}
        </p>
        <h1 className="text-3xl font-black">
          {t("title")} <span className="text-primary italic">{t("titleHighlight")}</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("subtitle")}
        </p>
      </div>

      {/* Knowledge holder role preview */}
      <div className="mb-6 p-4 rounded-2xl bg-secondary/40 border border-border/50">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">
          {t("whoCanJoin")}
        </p>
        <div className="flex flex-wrap gap-2">
          {knowledgeHolderRoles.map((role) => (
            <div key={role.label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-border/50 text-xs font-medium">
              <span>{role.emoji}</span>
              <span>{role.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tier cards */}
      <div className="space-y-4">
        {tiers.map((tier) => {
          const Icon = tier.lucide;
          return (
            <Card key={tier.id} className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                    {tier.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-black text-base leading-tight">{tier.title}</span>
                      <Badge variant="outline" className="text-[10px] border-primary/30 text-primary shrink-0 ml-auto">
                        {tier.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground italic mb-2">{tier.titleEn}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-primary font-medium">
                      <Icon className="size-3" />
                      <span>{tier.earnings}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={tier.href}
                  className="mt-4 flex items-center justify-between w-full px-4 h-11 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary text-sm font-bold transition-colors group/btn"
                >
                  {tier.cta}
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
