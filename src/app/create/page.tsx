import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Route, Building2 } from "lucide-react";

const tiers = [
  {
    id: 1,
    icon: "🌿",
    lucide: MapPin,
    title: "Người nắm giữ di sản",
    titleEn: "Heritage Knowledge Holder",
    badge: "Tier 1",
    description: "Nghệ nhân, nghệ sĩ biểu diễn, người cao tuổi, người kể chuyện, thầy thuốc nam, thầy cúng, người giữ lễ… Đăng ký địa điểm di sản và chia sẻ câu chuyện của bạn.",
    descriptionEn: "Artisan, performer, elder, storyteller, traditional healer, ceremony keeper… Register your heritage site and share your story.",
    earnings: "Nhận phí tham quan + bản quyền kỹ thuật số",
    earningsEn: "Earn visitor fees + digital royalties",
    href: "/create/node",
    cta: "Tạo địa điểm di sản",
  },
  {
    id: 2,
    icon: "🗺️",
    lucide: Route,
    title: "Hướng dẫn viên",
    titleEn: "Local Guide",
    badge: "Tier 2",
    description: "Tạo tuyến hành trình di sản kết nối nhiều địa điểm thành một hành trình có chủ đề.",
    descriptionEn: "Create heritage routes connecting multiple nodes into themed journeys.",
    earnings: "Nhận subscription + tip từ người khám phá",
    earningsEn: "Earn subscription fees + tips from explorers",
    href: "/create/route",
    cta: "Tạo tuyến đường",
  },
  {
    id: 3,
    icon: "🏛️",
    lucide: Building2,
    title: "Tổ chức văn hóa",
    titleEn: "Cultural Organization",
    badge: "Tier 3 · Xác minh",
    description: "Sở VHTT, tổ chức UNESCO và NGO văn hóa — thêm lớp di sản chính thức được xác minh.",
    descriptionEn: "Culture departments, UNESCO orgs, cultural NGOs — add official verified heritage layers.",
    earnings: "Hợp tác chính phủ + phí cấp phép du lịch",
    earningsEn: "Government partnerships + tourism licensing fees",
    href: "/admin",
    cta: "Truy cập bảng quản lý",
  },
];

const knowledgeHolderRoles = [
  { emoji: "🏺", label: "Nghệ nhân thủ công", labelEn: "Artisan" },
  { emoji: "🎶", label: "Nghệ sĩ biểu diễn", labelEn: "Performer" },
  { emoji: "👴", label: "Người cao tuổi / Già làng", labelEn: "Elder" },
  { emoji: "📜", label: "Người kể chuyện", labelEn: "Storyteller" },
  { emoji: "🕯️", label: "Người giữ lễ / Thầy cúng", labelEn: "Ceremony Keeper" },
  { emoji: "🌿", label: "Thầy thuốc nam", labelEn: "Traditional Healer" },
  { emoji: "🥁", label: "Người truyền dạy nghi lễ", labelEn: "Ritual Master" },
];

export default function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">
          Creator Platform
        </p>
        <h1 className="text-3xl font-black">
          Chia sẻ <span className="text-primary italic">di sản</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Bạn là người nắm giữ di sản văn hóa? Chọn vai trò phù hợp và bắt đầu chia sẻ.
        </p>
      </div>

      {/* Knowledge holder role preview */}
      <div className="mb-6 p-4 rounded-2xl bg-secondary/40 border border-border/50">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">
          Ai có thể tham gia?
        </p>
        <div className="flex flex-wrap gap-2">
          {knowledgeHolderRoles.map((role) => (
            <div key={role.labelEn} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background border border-border/50 text-xs font-medium">
              <span>{role.emoji}</span>
              <span>{role.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tier cards */}
      <div className="space-y-4">
        {tiers.map((tier) => {
          const Icon = tier.lucide;
          return (
            <Card key={tier.id} className="border-border/50 hover:border-primary/30 transition-colors group">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-2xl bg-secondary flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                    {tier.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-black text-base leading-tight">{tier.title}</span>
                      <Badge variant="outline" className="text-[10px] border-primary/30 text-primary shrink-0 ml-auto">
                        {tier.badge}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground italic mb-2">{tier.titleEn}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-primary font-medium">
                      <Icon className="size-3" />
                      <span>{tier.earnings}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={tier.href}
                  className="mt-4 flex items-center justify-between w-full px-4 h-11 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary text-sm font-bold transition-colors group/btn"
                >
                  {tier.cta}
                  <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
