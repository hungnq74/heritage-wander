"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { HeritageNode } from "@/lib/types";
import { useTranslations } from "next-intl";

interface Message {
  id: number;
  from: "npc" | "user";
  text: string;
}

interface StepNpcProps {
  node: HeritageNode;
  onNext: () => void;
}

export function StepNpc({ node, onNext }: StepNpcProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [exchangeIndex, setExchangeIndex] = useState(0);
  const [done, setDone] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("stepNpc");

  // Auto-send NPC greeting on mount
  useEffect(() => {
    const greeting = t("greeting", {
      name: node.knowledgeHolder.name,
      role: node.knowledgeHolder.roleEn,
      location: node.nameEn,
    });
    const timer = setTimeout(() => {
      setMessages([{ id: 0, from: "npc", text: greeting }]);
    }, 600);
    return () => clearTimeout(timer);
  }, [node, t]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleQuickReply = (exchange: (typeof node.npcScript)[0]) => {
    const userMsg: Message = { id: Date.now(), from: "user", text: exchange.question };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const npcMsg: Message = { id: Date.now() + 1, from: "npc", text: exchange.answer };
      setMessages((prev) => [...prev, npcMsg]);

      const nextIndex = exchangeIndex + 1;
      setExchangeIndex(nextIndex);
      if (nextIndex >= node.npcScript.length) {
        setTimeout(() => setDone(true), 600);
      }
    }, 1200 + Math.random() * 600);
  };

  const availableExchanges = node.npcScript.slice(0, exchangeIndex + 1).filter(
    (e) => e.order === exchangeIndex + 1
  );
  const currentExchange = node.npcScript[exchangeIndex];
  const showReplies = currentExchange && !isTyping && messages.some((m) => m.from === "npc");

  // Suppress unused variable warning for availableExchanges
  void availableExchanges;

  return (
    <div className="flex flex-col h-screen bg-background max-w-2xl mx-auto">
      {/* NPC header */}
      <div className="flex flex-col items-center pt-6 pb-4 px-5 border-b border-border/50 bg-background shrink-0">
        <div className="relative mb-3">
          <div className="relative size-16 rounded-full overflow-hidden border-2 border-primary/40">
            <Image
              src={node.knowledgeHolder.avatar}
              alt={node.knowledgeHolder.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
          <span className="absolute bottom-0 right-0 flex size-4 items-center justify-center rounded-full bg-background">
            <span className="size-2.5 rounded-full bg-accent animate-pulse" />
          </span>
        </div>
        <p className="font-black text-base">{node.knowledgeHolder.name}</p>
        <p className="text-xs text-muted-foreground">{node.knowledgeHolder.roleEn} · {node.nameEn}</p>
      </div>

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "npc" && (
                <div className="relative size-7 rounded-full overflow-hidden mr-2 mt-1 shrink-0">
                  <Image
                    src={node.knowledgeHolder.avatar}
                    alt=""
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  msg.from === "npc"
                    ? "bg-secondary text-foreground rounded-tl-sm"
                    : "bg-primary text-primary-foreground rounded-tr-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="relative size-7 rounded-full overflow-hidden mr-2 mt-1 shrink-0">
                <Image
                  src={node.knowledgeHolder.avatar}
                  alt=""
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </div>
              <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="size-2 rounded-full bg-muted-foreground/50"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick replies / CTA */}
      <div className="shrink-0 px-4 pb-4 pt-3 border-t border-border/50 bg-background space-y-2">
        <AnimatePresence mode="wait">
          {done ? (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                size="lg"
                className="w-full h-14 rounded-full text-base font-black"
                onClick={onNext}
              >
                {t("photoChallengeBtn")}
              </Button>
            </motion.div>
          ) : showReplies && currentExchange ? (
            <motion.div
              key={`reply-${exchangeIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">
                {t("askLabel", { role: node.knowledgeHolder.roleEn })}
              </p>
              <button
                onClick={() => handleQuickReply(currentExchange)}
                className="w-full text-left px-4 py-3 rounded-xl border border-border bg-secondary/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
              >
                💬 {currentExchange.question}
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
