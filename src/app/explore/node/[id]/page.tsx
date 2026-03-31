"use client";

import { use, useState, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { unlockNode, addItems, checkAndAwardCityBadge, syncFromCloud } from "@/lib/museum-store";
import { BadgeCelebration } from "@/components/museum/badge-celebration";
import { useUser } from "@/hooks/use-user";
import type { HeritageNode } from "@/lib/types";

// Step components (imported below)
import { StepUnlock } from "@/components/explore/step-unlock";
import { StepBlueprint } from "@/components/explore/step-blueprint";
import { StepNpc } from "@/components/explore/step-npc";
import { StepPhoto } from "@/components/explore/step-photo";
import { StepReward } from "@/components/explore/step-reward";

type NodeStep = "unlock" | "blueprint" | "npc" | "photo" | "reward";

const STEPS: NodeStep[] = ["unlock", "blueprint", "npc", "photo", "reward"];
const STEP_LABELS: Record<NodeStep, string> = {
  unlock: "Mở Khóa",
  blueprint: "Khám Phá",
  npc: "Gặp Gỡ",
  photo: "Chụp Ảnh",
  reward: "Nhận Quà",
};

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function NodeFlowPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { userId } = useUser();
  const [node, setNode] = useState<HeritageNode | null>(null);
  const [cityNodes, setCityNodes] = useState<HeritageNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<NodeStep>("unlock");
  const [earnedBadgeId, setEarnedBadgeId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/heritages");
        const json = await res.json();
        if (json.success) {
          const allNodes: HeritageNode[] = json.data;
          const target = allNodes.find((n) => n.id === id);
          if (target) {
            setNode(target);
            setCityNodes(allNodes.filter((n) => n.cityId === target.cityId));
          }
        }
        
        // Also sync cloud progress if we have userId
        if (userId) {
          await syncFromCloud(userId);
        }
      } catch (err) {
        console.error("Failed to fetch heritage:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id, userId]);

  if (loading) return <div className="fixed inset-0 flex items-center justify-center bg-background">Loading...</div>;
  if (!node) notFound();

  const stepIndex = STEPS.indexOf(step);

  const goNext = () => {
    const next = STEPS[stepIndex + 1];
    if (next) setStep(next);
  };

  const goPrev = () => {
    if (stepIndex === 0) {
      router.push("/explore");
    } else {
      setStep(STEPS[stepIndex - 1]);
    }
  };

  const handleUnlocked = () => {
    unlockNode(node.id);
    goNext();
  };

  const handleCollected = (itemIds: string[]) => {
    addItems(itemIds);
    // Check if this unlocked a city badge
    if (node.cityId) {
      const awarded = checkAndAwardCityBadge(node.cityId, cityNodes);
      if (awarded) setEarnedBadgeId(awarded);
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-background flex flex-col">
      {/* Step progress bar — hidden on reward screen */}
      {step !== "reward" && (
        <div className="flex items-center gap-3 px-4 h-14 shrink-0 border-b border-border bg-background/95 backdrop-blur-sm">
          <button
            onClick={goPrev}
            className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Step dots */}
          <div className="flex items-center gap-1.5 flex-1">
            {STEPS.filter((s) => s !== "reward").map((s, i) => (
              <div key={s} className="flex items-center gap-1.5 flex-1">
                <div
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    i <= STEPS.indexOf(step) ? "bg-primary" : "bg-secondary"
                  }`}
                />
              </div>
            ))}
          </div>

          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground shrink-0">
            {STEP_LABELS[step]}
          </span>
        </div>
      )}

      {/* Badge celebration overlay */}
      {earnedBadgeId && (
        <BadgeCelebration cityId={earnedBadgeId} onDismiss={() => setEarnedBadgeId(null)} />
      )}

      {/* Step content */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-full"
          >
            {step === "unlock" && (
              <StepUnlock node={node} onNext={handleUnlocked} />
            )}
            {step === "blueprint" && (
              <StepBlueprint node={node} onNext={goNext} />
            )}
            {step === "npc" && (
              <StepNpc node={node} onNext={goNext} />
            )}
            {step === "photo" && (
              <StepPhoto node={node} onNext={goNext} />
            )}
            {step === "reward" && (
              <StepReward
                items={node.items}
                nodeId={node.id}
                nodeName={node.name}
                totalNodeItems={node.items.length}
                onCollected={handleCollected}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
