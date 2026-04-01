import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Compass, Star, Users, MapPin } from "lucide-react";
import dbConnect from "@/lib/db";
import Heritage from "@/models/Heritage";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

export default async function Home() {
  await dbConnect();
  const nodes = await Heritage.find({}).lean();
  const heritageNodes = JSON.parse(JSON.stringify(nodes));
  const totalItems = heritageNodes.reduce((sum: number, n: any) => sum + n.items.length, 0);
  const t = await getTranslations("home");

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center px-5 py-16 text-center">
        {/* Background mosaic of node images */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 gap-1 opacity-15 pointer-events-none">
          {heritageNodes.flatMap((n: any) => n.items).slice(0, 15).map((item: any) => (
            <div key={item.id} className="relative w-full h-40">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) 33vw, 20vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

        {/* Content */}
        <div className="relative z-10 max-w-xl mx-auto">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest">
            <Compass className="size-3 mr-1.5" />
            {t("badge")}
          </Badge>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
            {t("hero.title1")}{" "}
            <span className="text-primary italic">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.title3")}
          </h1>
          <p className="text-lg text-muted-foreground mb-2 leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <p className="text-sm text-muted-foreground/70 italic mb-10">
            {t("hero.subtitleEn")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="h-14 px-8 rounded-full text-base font-black shadow-xl shadow-primary/20" asChild>
              <Link href="/explore">
                <Compass className="size-5 mr-2" />
                {t("hero.ctaExplore")}
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base font-bold" asChild>
              <Link href="/create">{t("hero.ctaCreate")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-5 pb-12">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {[
            { value: `${heritageNodes.length}`, label: t("stats.locations"), icon: MapPin },
            { value: `${totalItems}`, label: t("stats.items"), icon: Star },
            { value: "∞", label: t("stats.journeys"), icon: Users },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex flex-col items-center p-5 rounded-2xl bg-secondary/50 border border-border/50">
                <Icon className="size-5 text-muted-foreground mb-2" />
                <span className="text-3xl font-black text-primary">{stat.value}</span>
                <span className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 pb-16 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-black mb-8 text-center">
          {t("howItWorks.sectionTitle")} <span className="text-primary italic">{t("howItWorks.sectionHighlight")}</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              step: "01",
              emoji: "🗺️",
              title: t("howItWorks.step1Title"),
              titleEn: t("howItWorks.step1TitleEn"),
              desc: t("howItWorks.step1Desc"),
            },
            {
              step: "02",
              emoji: "🔓",
              title: t("howItWorks.step2Title"),
              titleEn: t("howItWorks.step2TitleEn"),
              desc: t("howItWorks.step2Desc"),
            },
            {
              step: "03",
              emoji: "🏆",
              title: t("howItWorks.step3Title"),
              titleEn: t("howItWorks.step3TitleEn"),
              desc: t("howItWorks.step3Desc"),
            },
          ].map((item) => (
            <div key={item.step} className="flex flex-col p-6 rounded-2xl bg-card border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.emoji}</span>
                <Badge variant="outline" className="text-[10px] font-black text-muted-foreground border-border">
                  {t("howItWorks.stepBadge", { step: item.step })}
                </Badge>
              </div>
              <h3 className="font-black text-base mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground italic mb-2">{item.titleEn}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage nodes preview */}
      <section className="px-5 pb-16 max-w-4xl mx-auto w-full">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-black">
            {t("heritageSection.title")} <span className="text-primary italic">{t("heritageSection.titleHighlight")}</span>
          </h2>
          <Link href="/explore" className="text-sm text-primary font-bold hover:underline">
            {t("heritageSection.viewAll")}
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {heritageNodes.slice(0, 6).map((node: any) => (
            <Link
              key={node.id}
              href={`/explore?nodeId=${node.id}`}
              className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-primary/30 transition-all hover:shadow-md"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={node.coverImage}
                  alt={node.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-black text-sm leading-tight">{node.name}</p>
                <p className="text-white/60 text-xs">{t("heritageSection.itemsCount", { count: node.items.length })}</p>
              </div>
              <Badge className="absolute top-2 right-2 text-[9px] bg-black/60 text-white border-0 font-bold">
                Tier {node.tier}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      {/* Creator CTA */}
      <section className="px-5 pb-16 max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl bg-primary/8 border border-primary/20">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-black mb-2">{t("creatorCta.title")}</h3>
            <p className="text-sm text-muted-foreground mb-1">{t("creatorCta.desc")}</p>
            <p className="text-xs text-muted-foreground italic">{t("creatorCta.descEn")}</p>
          </div>
          <Button size="lg" className="h-14 px-8 rounded-full text-base font-black shrink-0" asChild>
            <Link href="/create">{t("creatorCta.cta")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
