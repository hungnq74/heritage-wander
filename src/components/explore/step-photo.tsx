"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { HeritageNode } from "@/lib/types";
import { Camera, CheckCircle2, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface StepPhotoProps {
  node: HeritageNode;
  onNext: () => void;
}

export function StepPhoto({ node, onNext }: StepPhotoProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = useTranslations("stepPhoto");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const handleVerify = () => {
    setVerified(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background max-w-2xl mx-auto px-5 py-6">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">
          {t("sectionLabel")}
        </p>
        <h2 className="text-2xl font-black">{node.photoChallenge.prompt}</h2>
        <p className="text-sm text-muted-foreground italic mt-1">
          {node.photoChallenge.promptEn}
        </p>
      </div>

      {/* Camera viewfinder / preview */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div
          className={cn(
            "relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden border-2 transition-all duration-500",
            verified
              ? "border-primary shadow-lg shadow-primary/20"
              : preview
              ? "border-accent"
              : "border-dashed border-muted-foreground/30"
          )}
        >
          {preview ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Captured" className="w-full h-full object-cover" />
              {/* Corner accents */}
              {!verified && (
                <>
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-sm" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-sm" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-sm" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-sm" />
                </>
              )}
              {verified && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="absolute inset-0 flex items-center justify-center bg-primary/20"
                >
                  <div className="size-20 rounded-full bg-primary flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="size-10 text-primary-foreground" />
                  </div>
                </motion.div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-secondary/30">
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-muted-foreground/40 rounded-tl-sm" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-muted-foreground/40 rounded-tr-sm" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-muted-foreground/40 rounded-bl-sm" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-muted-foreground/40 rounded-br-sm" />
              <Camera className="size-12 text-muted-foreground/40" />
              <p className="text-sm text-muted-foreground text-center px-4">
                {t("cameraHint")}
              </p>
            </div>
          )}
        </div>

        {/* Reference images */}
        {node.photoChallenge.referenceImages.length > 0 && !preview && (
          <div className="w-full max-w-sm">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
              {t("referenceLabel")}
            </p>
            <div className="flex gap-2">
              {node.photoChallenge.referenceImages.map((img, i) => (
                <div key={i} className="relative size-16 rounded-xl overflow-hidden border border-border/50 opacity-60">
                  <Image
                    src={img}
                    alt={`Reference ${i + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Camera input (hidden) */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* CTA */}
      <div className="mt-6 space-y-3">
        <AnimatePresence mode="wait">
          {verified ? (
            <motion.div
              key="verified"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                size="lg"
                className="w-full h-14 rounded-full text-base font-black bg-primary shadow-xl shadow-primary/20"
                onClick={onNext}
              >
                {t("receiveItemsBtn")}
              </Button>
            </motion.div>
          ) : preview ? (
            <motion.div
              key="preview-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              <Button
                size="lg"
                className="w-full h-14 rounded-full text-base font-black"
                onClick={handleVerify}
              >
                <CheckCircle2 className="size-5 mr-2" />
                {t("confirmBtn")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-14 rounded-full font-bold"
                onClick={() => {
                  setPreview(null);
                  fileInputRef.current?.click();
                }}
              >
                {t("retakeBtn")}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="capture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2"
            >
              {/* Mobile: native camera */}
              <Button
                size="lg"
                className="w-full h-14 rounded-full text-base font-black"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="size-5 mr-2" />
                {t("captureBtn")}
              </Button>
              {/* Desktop fallback */}
              <button
                onClick={() => {
                  const input = fileInputRef.current;
                  if (input) {
                    input.removeAttribute("capture");
                    input.click();
                    setTimeout(() => input.setAttribute("capture", "environment"), 500);
                  }
                }}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full text-sm text-muted-foreground hover:text-foreground border border-dashed border-border hover:border-primary/50 transition-colors"
              >
                <Upload className="size-4" />
                {t("uploadBtn")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
