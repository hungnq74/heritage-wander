"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  ChevronLeft, 
  ChevronRight, 
  Mic, 
  Video, 
  Image as ImageIcon, 
  PenTool, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Step = "setup" | "capture" | "refine" | "consent" | "success";

export default function CaptureStudio() {
  const [step, setStep] = useState<Step>("setup");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(20);

  const nextStep = () => {
    if (step === "setup") { setStep("capture"); setProgress(40); }
    else if (step === "capture") { handleProcess(); }
    else if (step === "refine") { setStep("consent"); setProgress(80); }
    else if (step === "consent") { setStep("success"); setProgress(100); }
  };

  const prevStep = () => {
    if (step === "capture") setStep("setup");
    else if (step === "refine") setStep("capture");
    else if (step === "consent") setStep("refine");
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("refine");
      setProgress(60);
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8 flex items-center gap-4">
        <Link href="/scout" className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
          <ChevronLeft className="size-5" />
        </Link>
        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "20%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{step}</span>
      </div>

      <AnimatePresence mode="wait">
        {step === "setup" && (
          <motion.div 
            key="setup"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">Mission <span className="text-primary italic">Setup</span></h1>
              <p className="text-muted-foreground">Who are you documenting today? Identify the knowledge holder.</p>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black uppercase tracking-widest text-muted-foreground">Elder / Knowledge Holder</label>
              <Input placeholder="Enter name..." className="h-14 rounded-2xl bg-secondary/50 text-lg border-border/50" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black uppercase tracking-widest text-muted-foreground">Language / Dialect</label>
              <div className="grid grid-cols-2 gap-3">
                {["Central Thai", "Isan Dialect", "Northern Thai", "English"].map((lang) => (
                  <Button key={lang} variant="outline" className="h-12 rounded-xl border-border/50 hover:border-primary/50 hover:bg-primary/5">
                    {lang}
                  </Button>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full h-14 rounded-full text-lg font-black" onClick={nextStep}>
              Start Capture
            </Button>
          </motion.div>
        )}

        {step === "capture" && (
          <motion.div 
            key="capture"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">Capture <span className="text-primary italic">Studio</span></h1>
              <p className="text-muted-foreground">Record the story. AI will help you structured it later.</p>
            </div>

            {isProcessing ? (
              <div className="flex flex-col items-center justify-center py-20 gap-6">
                <Loader2 className="size-16 text-primary animate-spin" />
                <div className="text-center">
                  <h3 className="text-xl font-bold">AI Structuring...</h3>
                  <p className="text-sm text-muted-foreground italic">Extracting techniques, materials, and steps</p>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center aspect-square rounded-[32px] bg-secondary border border-border/50 transition-all hover:border-primary/50 hover:bg-primary/5 group">
                    <div className="size-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Mic className="size-8 text-primary" />
                    </div>
                    <span className="font-bold">Audio Record</span>
                  </button>
                  <button className="flex flex-col items-center justify-center aspect-square rounded-[32px] bg-secondary border border-border/50 transition-all hover:border-primary/50 hover:bg-primary/5 group">
                    <div className="size-16 rounded-full bg-background flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Video className="size-8 text-accent" />
                    </div>
                    <span className="font-bold">Video Clip</span>
                  </button>
                </div>

                <div className="rounded-3xl border border-border/50 bg-secondary/30 p-6">
                  <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4">Suggested Prompts</h3>
                  <ul className="space-y-3">
                    <li className="text-sm font-medium flex gap-3 text-muted-foreground italic">
                      <Sparkles className="size-4 text-primary shrink-0" />
                      "How did your grandmother learn this technique?"
                    </li>
                    <li className="text-sm font-medium flex gap-3 text-muted-foreground italic">
                      <Sparkles className="size-4 text-primary shrink-0" />
                      "What happens if the indigo vat is too cold?"
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground">Field Notes / Transcription</label>
                  <textarea 
                    className="w-full h-32 rounded-2xl bg-secondary/50 border-border/50 p-4 text-sm resize-none focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Capture key observations here..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full font-bold" onClick={prevStep}>Back</Button>
                  <Button size="lg" className="flex-[2] h-14 rounded-full text-lg font-black" onClick={nextStep}>
                    Process with AI
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        )}

        {step === "refine" && (
          <motion.div 
            key="refine"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="size-5 text-primary" />
                <Badge variant="outline" className="border-primary/30 text-primary">AI Structured</Badge>
              </div>
              <h1 className="text-3xl font-black mb-2">Review & <span className="text-primary italic">Refine</span></h1>
              <p className="text-muted-foreground">Is everything accurate? Fill in any missing details.</p>
            </div>

            <Card className="border-border/50 bg-secondary/20 overflow-hidden">
              <CardContent className="p-6 space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Extracted Summary</label>
                  <p className="mt-2 text-sm leading-relaxed">
                    A rare textile dyeing technique using natural indigofera plants. The process involves multiple fermentation cycles over 3-5 days.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl bg-background/50 border border-border/30">
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground block">Technique</span>
                    <span className="text-xs font-bold text-primary">Vat Fermentation</span>
                  </div>
                  <div className="p-3 rounded-xl bg-background/50 border border-border/30">
                    <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground block">Season</span>
                    <span className="text-xs font-bold text-primary">Post-Harvest (Nov-Jan)</span>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Key Materials</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Indigofera", "Lime", "Sugarcane Juice", "Rice Husk Ash"].map(m => (
                      <Badge key={m} className="bg-secondary text-primary font-bold">{m}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 flex gap-4">
              <AlertCircle className="size-5 text-accent shrink-0" />
              <p className="text-xs text-accent font-medium leading-relaxed">
                <span className="font-bold">Missing Info:</span> We couldn't identify the specific 'Ritual Opening' step. Ask the elder if there's a prayer or song involved.
              </p>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full font-bold" onClick={prevStep}>Back</Button>
              <Button size="lg" className="flex-[2] h-14 rounded-full text-lg font-black" onClick={nextStep}>
                Next: Consent
              </Button>
            </div>
          </motion.div>
        )}

        {step === "consent" && (
          <motion.div 
            key="consent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">Ethics & <span className="text-primary italic">Consent</span></h1>
              <p className="text-muted-foreground">Finalize attribution and verify the elder's permission.</p>
            </div>

            <div className="rounded-3xl border border-border/50 bg-secondary/30 p-8 space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
                <div className="mt-1 size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Attribution Agreement</h4>
                  <p className="text-xs text-muted-foreground mt-1">Mae Som will receive 30% of all future licensing royalties for this entry.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 border border-border/30">
                <div className="mt-1 size-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="size-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Public Visibility</h4>
                  <p className="text-xs text-muted-foreground mt-1">Selective disclosure enabled. Full details only available to verified buyers.</p>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <label className="text-sm font-black uppercase tracking-widest text-muted-foreground">Voice/Video Consent Artifact</label>
                <Button variant="outline" className="w-full h-16 rounded-2xl border-dashed border-2 flex items-center justify-center gap-3">
                  <Mic className="size-5 text-primary" />
                  <span className="font-bold">Record Consent Audio</span>
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full font-bold" onClick={prevStep}>Back</Button>
              <Button size="lg" className="flex-[2] h-14 rounded-full text-lg font-black bg-primary text-primary-foreground shadow-xl shadow-primary/20" onClick={nextStep}>
                Submit Entry
              </Button>
            </div>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 space-y-8 text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary blur-3xl opacity-20 animate-pulse" />
              <div className="size-32 rounded-full bg-primary flex items-center justify-center relative">
                <ShieldCheck className="size-16 text-primary-foreground" />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-black mb-4">Submission <span className="text-primary italic">Received</span></h1>
              <Badge variant="outline" className="h-8 border-primary/50 text-primary px-4 py-1 mb-4">Verification Pending</Badge>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Excellent scouting. Your entry is being reviewed by a community verifier. You've earned a preliminary <span className="text-primary font-bold">+50 XP</span>.
              </p>
            </div>

            <div className="w-full grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border/50">
                <span className="text-2xl font-black text-primary">250</span>
                <span className="block text-[10px] font-bold uppercase text-muted-foreground">Total XP</span>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/50 border border-border/50">
                <span className="text-2xl font-black text-accent">Rare</span>
                <span className="block text-[10px] font-bold uppercase text-muted-foreground">Complexity</span>
              </div>
            </div>

            <div className="w-full space-y-3">
              <Button size="lg" className="w-full h-14 rounded-full text-lg font-black" asChild>
                <Link href="/scout">Return to Dashboard</Link>
              </Button>
              <Button variant="ghost" className="w-full h-14 rounded-full font-bold">
                Share Activity
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
