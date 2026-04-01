"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Compass, LayoutGrid, PlusCircle, User, Menu, LogIn, LogOut, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useUser } from "@/hooks/use-user";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Museum", href: "/museum", icon: LayoutGrid },
  { name: "Create", href: "/create", icon: PlusCircle },
];

export function Navbar() {
  const pathname = usePathname();
  const { isLoggedIn, isLoading, user } = useUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center border-b border-border bg-background/90 backdrop-blur-sm px-4 md:px-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5 mr-auto md:mr-8 shrink-0">
        <div className="size-7 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
          <Compass className="size-4 text-primary-foreground transform group-hover:rotate-45 transition-transform duration-500" />
        </div>
        <span className="font-bold text-base tracking-tight text-foreground">Heritage Wander</span>
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
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-secondary text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
              )}
            >
              <Icon className="size-4" />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Auth Section - Desktop */}
      <div className="hidden md:flex items-center gap-3 w-[160px] justify-end">
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end gap-1">
              <div className="h-3 w-16 bg-muted rounded animate-pulse" />
              <div className="h-2 w-12 bg-muted/60 rounded animate-pulse" />
            </div>
            <div className="size-8 bg-muted rounded-full animate-pulse shadow-sm" />
          </div>
        ) : isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 focus:outline-none group cursor-pointer">
              <div className="flex flex-col items-end mr-1">
                <span className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">{user?.name}</span>
                <span className="text-[10px] text-muted-foreground leading-tight">Heritage Explorer</span>
              </div>
              <Avatar className="size-8 border border-border shadow-sm group-hover:border-primary/50 transition-colors">
                <AvatarImage src={user?.image || ""} />
                <AvatarFallback className="bg-primary/5 text-[10px] font-bold text-primary">
                  {user?.name?.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-xl shadow-xl border-border/50">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-normal p-3">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-bold leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2.5 px-3 rounded-lg focus:bg-primary focus:text-primary-foreground transition-all group">
                <Link href={`/profile/${user?.id || 'me'}`} className="flex items-center w-full">
                  <User className="mr-3 size-4 text-primary group-focus:text-primary-foreground" />
                  <span className="font-bold">Của tôi (Profile)</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-2.5 px-3 rounded-lg focus:bg-primary focus:text-primary-foreground transition-all group">
                <Settings className="mr-3 size-4 text-muted-foreground group-focus:text-primary-foreground transition-colors" />
                <span className="font-bold">Cài đặt (Settings)</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer py-2.5 px-3 rounded-lg focus:bg-destructive focus:text-destructive-foreground group transition-all"
                onClick={() => signOut()}
              >
                <LogOut className="mr-3 size-4 transition-transform group-focus:translate-x-0.5 group-focus:text-destructive-foreground" />
                <span className="font-bold">Đăng xuất (Logout)</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="default" size="sm" className="rounded-full h-9 px-4 font-bold shadow-lg shadow-primary/25 animate-in fade-in duration-500">
            <Link href="/login">
              <LogIn className="mr-1.5 size-3.5" />
              Đăng nhập
            </Link>
          </Button>
        )}
      </div>

      {/* Mobile: Hamburger and Mobile Auth */}
      <div className="md:hidden flex items-center gap-2 ml-auto">
        {isLoggedIn && (
          <Link href={`/profile/${user?.id || 'me'}`}>
            <Avatar className="size-8 border border-border">
              <AvatarImage src={user?.image || ""} />
              <AvatarFallback className="text-[10px] bg-primary/5 text-primary">
                {user?.name?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Link>
        )}
        
        <Sheet>
          <SheetTrigger
            className="flex items-center justify-center size-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-0 rounded-l-2xl">
            <div className="flex flex-col h-full">
              <div className="flex flex-col gap-1 p-4 pt-14 flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-3 mb-2">Heritage Menu</p>
                {navItems.concat([{ name: "Profile", href: `/profile/${user?.id || 'me'}`, icon: User }]).map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200",
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-foreground/70 hover:bg-secondary/60"
                      )}
                    >
                      <Icon className="size-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              
              <div className="p-4 border-t border-border bg-secondary/20 min-h-[76px] flex items-center">
                {isLoading ? (
                  <div className="w-full h-11 bg-muted rounded-xl animate-pulse" />
                ) : isLoggedIn ? (
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 font-bold h-11 rounded-xl"
                    onClick={() => signOut()}
                  >
                    <LogOut className="mr-3 size-4" />
                    Đăng xuất
                  </Button>
                ) : (
                  <Button asChild className="w-full font-bold h-11 rounded-xl shadow-lg shadow-primary/20 animate-in fade-in duration-500">
                    <Link href="/login">
                      <LogIn className="mr-2 size-4" />
                      Đăng nhập
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
