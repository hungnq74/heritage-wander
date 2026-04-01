"use client";

import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocale } from "@/actions/locale";
import { cn } from "@/lib/utils";
import { Globe, Info, MousePointer2, MapPin } from "lucide-react";
import { getMuseumState, setNavigationMode } from "@/lib/museum-store";
import { useEffect } from "react";

interface SettingsClientProps {
  currentLocale: string;
}

export function SettingsClient({ currentLocale }: SettingsClientProps) {
  const t = useTranslations("settings");
  const [isPending, startTransition] = useTransition();
  const [activeLocale, setActiveLocale] = useState(currentLocale);
  const [navMode, setNavMode] = useState<"gps" | "manual">("gps");
  const router = useRouter();

  useEffect(() => {
    const state = getMuseumState();
    if (state.navigationMode) {
      setNavMode(state.navigationMode);
    }
  }, []);

  const handleLocaleChange = (locale: "vi" | "en") => {
    if (locale === activeLocale || isPending) return;
    setActiveLocale(locale);
    startTransition(async () => {
      await setLocale(locale);
      router.refresh();
    });
  };

  const handleNavModeChange = (mode: "gps" | "manual") => {
    if (mode === navMode) return;
    setNavMode(mode);
    setNavigationMode(mode);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black mb-1">{t("title")}</h1>
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </div>

      {/* Language Section */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Globe className="size-4 text-muted-foreground" />
          <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            {t("language.sectionTitle")}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{t("language.sectionSubtitle")}</p>

        <div className="flex gap-3">
          {(["vi", "en"] as const).map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              disabled={isPending}
              className={cn(
                "flex-1 h-14 rounded-2xl border-2 font-bold text-base transition-all duration-200",
                activeLocale === locale
                  ? "border-primary bg-primary/10 text-primary shadow-sm"
                  : "border-border hover:border-primary/40 text-muted-foreground hover:text-foreground",
                isPending && "opacity-60 cursor-not-allowed"
              )}
            >
              {isPending && activeLocale === locale
                ? t("language.switching")
                : t(`language.${locale}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Navigation Mode Section */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <MousePointer2 className="size-4 text-muted-foreground" />
          <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            {t("navigation.sectionTitle")}
          </h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{t("navigation.sectionSubtitle")}</p>

        <div className="grid grid-cols-1 gap-3">
          {(["gps", "manual"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => handleNavModeChange(mode)}
              className={cn(
                "group relative flex items-start gap-4 p-4 rounded-2xl border-2 transition-all duration-200 text-left",
                navMode === mode
                  ? "border-primary bg-primary/10 shadow-sm"
                  : "border-border hover:border-primary/40 bg-background hover:bg-secondary/20"
              )}
            >
              <div className={cn(
                "mt-0.5 p-2 rounded-xl transition-colors",
                navMode === mode ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground group-hover:text-foreground"
              )}>
                {mode === "gps" ? <MapPin className="size-5" /> : <MousePointer2 className="size-5" />}
              </div>
              <div className="flex-1">
                <div className={cn(
                  "font-bold text-lg leading-tight mb-0.5",
                  navMode === mode ? "text-primary" : "text-foreground"
                )}>
                  {t(`navigation.${mode}.label`)}
                </div>
                <p className="text-sm text-muted-foreground leading-snug">
                  {t(`navigation.${mode}.description`)}
                </p>
              </div>
              {navMode === mode && (
                <div className="absolute top-4 right-4 size-2 rounded-full bg-primary animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Info className="size-4 text-muted-foreground" />
          <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
            {t("about.sectionTitle")}
          </h2>
        </div>
        <div className="p-4 rounded-2xl bg-secondary/40 border border-border/50">
          <p className="text-sm font-medium">{t("about.version")}</p>
        </div>
      </section>
    </div>
  );
}
