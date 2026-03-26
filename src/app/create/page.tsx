import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Route, Building2 } from "lucide-react";

const tiers = [
  {
    id: 1,
    icon: "🪵",
    lucide: MapPin,
    title: "Nghệ nhân",
    titleEn: "Artisan",
    badge: "Tier 1",
    description: "Đăng ký địa điểm làng nghề, chia sẻ câu chuyện và kỹ thuật của bạn.",
    descriptionEn: "Register your craft village location, share your story and techniques.",
    earnings: "Nhận phí tham quan + bản quyền kỹ thuật số",
    earningsEn: "Earn visitor fees + digital royalties",
    href: "/create/node",
    cta: "Tạo địa điểm",
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

export default function CreatePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">
          Creator Platform
        </p>
        <h1 className="text-3xl font-black">
          Chia sẻ <span className="text-primary italic">làng nghề</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Bạn là nghệ nhân, hướng dẫn viên hay tổ chức văn hóa? Chọn cấp độ phù hợp.
        </p>
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
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-black text-base">{tier.title}</span>
                      <span className="text-sm text-muted-foreground italic">{tier.titleEn}</span>
                      <Badge variant="outline" className="text-[10px] border-primary/30 text-primary ml-auto shrink-0">
                        {tier.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-1">
                      {tier.description}
                    </p>
                    <p className="text-xs text-muted-foreground/70 italic">{tier.descriptionEn}</p>
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
