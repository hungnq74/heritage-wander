"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Compass, LayoutGrid, PlusCircle, User } from "lucide-react";
import { useTranslations } from "next-intl";

export function BottomTabBar() {
  const pathname = usePathname();
  const t = useTranslations("navigation");

  const tabs = [
    { name: t("explore"), href: "/explore", icon: Compass },
    { name: t("museum"), href: "/museum", icon: LayoutGrid },
    { name: t("create"), href: "/create", icon: PlusCircle },
    { name: t("profile"), href: "/profile/me", icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-14 flex items-center border-t border-border bg-background/95 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.href || pathname.startsWith(tab.href + "/");
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              "flex-1 flex flex-col items-center justify-center gap-0.5 py-1.5 min-h-[44px] transition-colors",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Icon className="size-5" />
            <span className="text-[10px] font-semibold">{tab.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
