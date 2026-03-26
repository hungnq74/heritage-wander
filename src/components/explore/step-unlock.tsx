"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { HeritageNode } from "@/lib/types";
import { getDomainEmoji, getDomainLabel, getProvinceLabel } from "@/lib/ich-utils";
import { MapPin, Unlock } from "lucide-react";

interface StepUnlockProps {
  node: HeritageNode;
  onNext: () => void;
}

export function StepUnlock({ node, onNext }: StepUnlockProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(t);
  }, []);

  const domainEmoji = getDomainEmoji(node.ichDomain);
  const domainLabel = getDomainLabel(node.ichDomain);
  const provinceLabel = getProvinceLabel(node.province);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[oklch(0.10_0.01_80)] text-white overflow-hidden px-6 py-12">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.coverImage}
          alt={node.name}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.01_80)/80] via-transparent to-[oklch(0.10_0.01_80)]" />
      </div>

      {/* Radiating rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/20"
          initial={{ width: 80, height: 80, opacity: 0 }}
          animate={{ width: 80 + i * 120, height: 80 + i * 120, opacity: [0, 0.4, 0] }}
          transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeOut" }}
        />
      ))}

      {/* Unlock icon */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
        className="relative z-10 size-20 rounded-full bg-primary flex items-center justify-center mb-8 shadow-2xl shadow-primary/40"
      >
        <Unlock className="size-9 text-primary-foreground" />
      </motion.div>

      {/* Stamp animation */}
      <motion.div
        initial={{ scale: 3, opacity: 0, rotate: -15 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
        className="relative z-10 mb-4"
      >
        <div className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-primary/60 bg-primary/10 backdrop-blur-sm">
          <span className="text-primary text-sm font-black uppercase tracking-widest">Đã Mở Khóa</span>
          <span className="text-lg">{domainEmoji}</span>
        </div>
      </motion.div>

      {/* Node name — unblurs */}
      {showContent && (
        <motion.div
          initial={{ filter: "blur(12px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center mb-3"
        >
          <h1 className="text-4xl font-black leading-tight">{node.name}</h1>
          <p className="text-lg text-white/60 mt-1 font-medium">{node.nameEn}</p>
        </motion.div>
      )}

      {/* Location + tier */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="relative z-10 flex items-center gap-3 mb-12"
      >
        <div className="flex items-center gap-1.5 text-white/50 text-sm">
          <MapPin className="size-4" />
          <span>{provinceLabel}, Việt Nam</span>
        </div>
        <Badge className="bg-white/10 text-white/80 border-white/20 text-xs">
          Tier {node.tier}
        </Badge>
        {node.unescoStatus === "inscribed" && (
          <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
            ⭐ UNESCO
          </Badge>
        )}
        <Badge className="bg-white/10 text-white/80 border-white/20 text-xs">
          {domainLabel.vi}
        </Badge>
      </motion.div>

      {/* Knowledge holder card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 mb-8"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.knowledgeHolder.avatar}
          alt={node.knowledgeHolder.name}
          className="size-12 rounded-full object-cover border-2 border-primary/40"
        />
        <div>
          <p className="font-bold text-sm">{node.knowledgeHolder.name}</p>
          <p className="text-xs text-white/50">{node.knowledgeHolder.roleEn} · {node.nameEn}</p>
        </div>
        <div className="ml-auto text-xl">{domainEmoji}</div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 w-full max-w-sm"
      >
        <Button
          size="lg"
          className="w-full h-14 rounded-full text-base font-black bg-primary shadow-xl shadow-primary/30"
          onClick={onNext}
        >
          Khám phá →
        </Button>
      </motion.div>
    </div>
  );
}
