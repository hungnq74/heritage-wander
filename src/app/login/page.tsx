"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Compass, LogIn, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a1a18]">
      {/* Cinematic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
        style={{ backgroundImage: "url('/images/heritage-login-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18] via-transparent to-[#1a1a18]/40" />

      {/* Floating particles/grain for atmosphere */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md px-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
        >
          <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Quay lại trang chủ</span>
        </Link>

        <div className="bg-background/40 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="size-16 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 rotate-3">
              <Compass className="size-8 text-primary-foreground transform group-hover:rotate-45 transition-transform duration-500" />
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl font-black tracking-tight text-white">Heritage Wander</h1>
              <p className="text-white/60 text-sm leading-relaxed max-w-[240px] mx-auto">
                Lưu giữ hành trình khám phá di sản Việt Nam của riêng bạn.
              </p>
            </div>

            <div className="w-full pt-4">
              <Button
                onClick={() => signIn("google", { callbackUrl: "/explore" })}
                variant="default"
                className="w-full h-14 rounded-2xl bg-white text-black hover:bg-white/90 font-bold text-base flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="size-5" />
                Tiếp tục với Google
              </Button>

              <p className="mt-6 text-[10px] text-white/40 uppercase tracking-widest font-black">
                Personal Heritage Collection · Since 2026
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-12 -right-12 size-48 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute -bottom-12 -left-12 size-48 bg-blue-500/10 blur-[100px] rounded-full" />
      </motion.div>

      {/* Footer info */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white/20">
        <div className="text-[10px] font-medium leading-tight">
          VIETNAM<br />HERITAGE EXPLORER
        </div>
        <div className="text-[10px] font-medium text-right">
          AUTHENTICATION<br />SECURED BY GOOGLE
        </div>
      </div>
    </div>
  );
}
