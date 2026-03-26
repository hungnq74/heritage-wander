"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Compass, LayoutGrid, PlusCircle, User, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Museum", href: "/museum", icon: LayoutGrid },
  { name: "Create", href: "/create", icon: PlusCircle },
  { name: "Profile", href: "/profile/me", icon: User },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center border-b border-border bg-background/90 backdrop-blur-sm px-4 md:px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mr-8 shrink-0">
        <div className="size-7 rounded-lg bg-primary flex items-center justify-center">
          <Compass className="size-4 text-primary-foreground" />
        </div>
        <span className="font-semibold text-base tracking-tight text-foreground">Heritage Wander</span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              )}
            >
              <Icon className="size-4" />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile: only show hamburger for extra nav (desktop items handled by bottom bar) */}
      <div className="md:hidden ml-auto">
        <Sheet>
          <SheetTrigger
            className="flex items-center justify-center size-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-0">
            <div className="flex flex-col gap-1 p-4 pt-14">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    )}
                  >
                    <Icon className="size-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
