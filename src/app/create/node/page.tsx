"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, MapPin, Video, MessageSquare, Camera, Package, CheckCircle2, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Step = "location" | "story" | "npc" | "challenge" | "items" | "review";

const STEPS: Step[] = ["location", "story", "npc", "challenge", "items", "review"];

const STEP_META: Record<Step, { label: string; icon: React.FC<{ className?: string }> }> = {
  location: { label: "Địa điểm", icon: MapPin },
  story: { label: "Câu chuyện", icon: Video },
  npc: { label: "Nhân vật AI", icon: MessageSquare },
  challenge: { label: "Thử thách", icon: Camera },
  items: { label: "Vật phẩm", icon: Package },
  review: { label: "Xem lại", icon: CheckCircle2 },
};

const CRAFT_CATEGORIES = [
  { id: "carpentry", label: "Mộc / Carpentry", emoji: "🪵" },
  { id: "incense", label: "Hương / Incense", emoji: "🕯️" },
  { id: "silk", label: "Lụa / Silk", emoji: "🧵" },
  { id: "pottery", label: "Gốm / Pottery", emoji: "🏺" },
  { id: "hat-making", label: "Nón / Hat-making", emoji: "👒" },
];

const RARITIES = ["Common", "Rare", "Epic", "Legendary"];

export default function CreateNodePage() {
  const [step, setStep] = useState<Step>("location");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const stepIndex = STEPS.indexOf(step);
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  const nextStep = () => {
    const next = STEPS[stepIndex + 1];
    if (next) setStep(next);
  };
  const prevStep = () => {
    const prev = STEPS[stepIndex - 1];
    if (prev) setStep(prev);
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8 flex items-center gap-4">
        {stepIndex === 0 ? (
          <Link href="/create" className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
            <ChevronLeft className="size-5" />
          </Link>
        ) : (
          <button onClick={prevStep} className="flex size-8 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-foreground">
            <ChevronLeft className="size-5" />
          </button>
        )}
        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
          {stepIndex + 1}/{STEPS.length}
        </span>
      </div>

      <AnimatePresence mode="wait">
        {step === "location" && (
          <motion.div key="location"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">
                <span className="text-primary italic">Địa điểm</span> của bạn
              </h1>
              <p className="text-muted-foreground text-sm">Làng nghề hoặc địa điểm thủ công bạn muốn đăng ký.</p>
            </div>
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Tên địa điểm</label>
              <Input placeholder="VD: Làng gốm Bát Tràng..." className="h-14 rounded-2xl bg-secondary/50 text-base border-border/50" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Loại nghề thủ công</label>
              <div className="grid grid-cols-2 gap-3">
                {CRAFT_CATEGORIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCategory(c.id)}
                    className={cn(
                      "flex items-center gap-2.5 h-12 px-4 rounded-xl border transition-all text-sm font-medium",
                      selectedCategory === c.id
                        ? "border-primary bg-primary/10 text-primary font-bold"
                        : "border-border/50 hover:border-primary/40"
                    )}
                  >
                    <span>{c.emoji}</span> {c.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Tọa độ GPS</label>
              <div className="flex gap-2">
                <Input placeholder="Vĩ độ (Lat)" className="h-12 rounded-xl bg-secondary/50 border-border/50" />
                <Input placeholder="Kinh độ (Lng)" className="h-12 rounded-xl bg-secondary/50 border-border/50" />
              </div>
              <p className="text-xs text-muted-foreground">Hoặc chọn trực tiếp trên bản đồ trong phiên bản đầy đủ.</p>
            </div>
            <Button size="lg" className="w-full h-14 rounded-full text-base font-black" onClick={nextStep}>
              Tiếp theo →
            </Button>
          </motion.div>
        )}

        {step === "story" && (
          <motion.div key="story"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">
                <span className="text-primary italic">Câu chuyện</span> làng nghề
              </h1>
              <p className="text-muted-foreground text-sm">Chia sẻ kiến thức và lịch sử nghề thủ công của bạn.</p>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Video giới thiệu (2–3 phút)</label>
              <button className="w-full h-32 rounded-2xl border-2 border-dashed border-border hover:border-primary/50 bg-secondary/30 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Video className="size-8" />
                <span className="text-sm font-medium">Tải video lên</span>
              </button>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Tóm tắt kiến thức</label>
              <textarea
                className="w-full h-36 rounded-2xl bg-secondary/50 border border-border/50 p-4 text-sm resize-none focus:outline-none focus:border-primary/50"
                placeholder="Mô tả lịch sử, kỹ thuật, và điều đặc biệt của làng nghề..."
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Nguyên liệu chính</label>
              <div className="flex gap-2">
                <Input placeholder="VD: Gỗ mít, đục chạm..." className="h-11 rounded-xl bg-secondary/50 border-border/50 flex-1" />
                <Button variant="outline" size="sm" className="h-11 px-4 rounded-xl">
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full" onClick={prevStep}>Quay lại</Button>
              <Button size="lg" className="flex-[2] h-14 rounded-full text-base font-black" onClick={nextStep}>Tiếp theo →</Button>
            </div>
          </motion.div>
        )}

        {step === "npc" && (
          <motion.div key="npc"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">
                Nhân vật <span className="text-primary italic">AI</span>
              </h1>
              <p className="text-muted-foreground text-sm">Định nghĩa 3–5 câu hỏi và câu trả lời cho nhân vật NPC đại diện bạn.</p>
            </div>
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-border/50 bg-secondary/20">
                <CardContent className="p-4 space-y-3">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">Câu {i}</Badge>
                  <Input placeholder="Câu hỏi người dùng có thể hỏi..." className="h-10 rounded-xl bg-background/50 border-border/30 text-sm" />
                  <textarea
                    className="w-full h-20 rounded-xl bg-background/50 border border-border/30 p-3 text-sm resize-none focus:outline-none focus:border-primary/50"
                    placeholder="Câu trả lời của nghệ nhân (viết theo ngôi thứ nhất)..."
                  />
                </CardContent>
              </Card>
            ))}
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full" onClick={prevStep}>Quay lại</Button>
              <Button size="lg" className="flex-[2] h-14 rounded-full text-base font-black" onClick={nextStep}>Tiếp theo →</Button>
            </div>
          </motion.div>
        )}

        {step === "challenge" && (
          <motion.div key="challenge"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">
                <span className="text-primary italic">Thử thách</span> ảnh
              </h1>
              <p className="text-muted-foreground text-sm">Yêu cầu người khám phá chụp ảnh gì để xác nhận sự hiện diện tại địa điểm.</p>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Mô tả thử thách</label>
              <Input placeholder="VD: Chụp ảnh giá phơi hương dưới nắng..." className="h-14 rounded-2xl bg-secondary/50 text-base border-border/50" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Ảnh tham khảo (1–3 ảnh)</label>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <button key={i} className="aspect-square rounded-2xl border-2 border-dashed border-border hover:border-primary/50 bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                    <Camera className="size-6" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full" onClick={prevStep}>Quay lại</Button>
              <Button size="lg" className="flex-[2] h-14 rounded-full text-base font-black" onClick={nextStep}>Tiếp theo →</Button>
            </div>
          </motion.div>
        )}

        {step === "items" && (
          <motion.div key="items"
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-3xl font-black mb-2">
                <span className="text-primary italic">Vật phẩm</span> sưu tập
              </h1>
              <p className="text-muted-foreground text-sm">Định nghĩa 2–5 vật phẩm người khám phá có thể nhận được.</p>
            </div>
            {[1, 2].map((i) => (
              <Card key={i} className="border-border/50 bg-secondary/20">
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary">Vật phẩm {i}</Badge>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-3">
                    <Input placeholder="Tên vật phẩm..." className="h-10 rounded-xl bg-background/50 border-border/30 text-sm" />
                    <button className="size-10 rounded-xl border-2 border-dashed border-border bg-secondary/50 flex items-center justify-center text-muted-foreground">
                      <Camera className="size-4" />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {RARITIES.map((r) => (
                      <button key={r} className="flex-1 h-8 rounded-lg border border-border/50 text-xs font-bold text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors">
                        {r}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button variant="outline" className="w-full h-12 rounded-2xl border-dashed gap-2">
              <Plus className="size-4" /> Thêm vật phẩm
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="flex-1 h-14 rounded-full" onClick={prevStep}>Quay lại</Button>
              <Button size="lg" className="flex-[2] h-14 rounded-full text-base font-black" onClick={nextStep}>Xem lại →</Button>
            </div>
          </motion.div>
        )}

        {step === "review" && (
          <motion.div key="review"
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            className="space-y-8 text-center"
          >
            <div className="size-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="size-12 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-black mb-2">Sẵn sàng <span className="text-primary italic">gửi đi!</span></h1>
              <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                Địa điểm của bạn sẽ được xem xét bởi đội ngũ Heritage Wander và cộng đồng Tier 3 trước khi xuất hiện trên bản đồ.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-left">
              {[
                { label: "Địa điểm", value: "✓ Đã điền" },
                { label: "Câu chuyện", value: "✓ Đã điền" },
                { label: "Nhân vật AI", value: "✓ 3 câu hỏi" },
                { label: "Vật phẩm", value: "✓ 2 vật phẩm" },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-secondary/50 border border-border/50">
                  <span className="text-xs text-muted-foreground block">{item.label}</span>
                  <span className="text-sm font-bold text-primary">{item.value}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full h-14 rounded-full text-base font-black bg-primary shadow-xl shadow-primary/20">
              Gửi để xác minh
            </Button>
            <Link href="/create" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quay lại trang Creator
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
