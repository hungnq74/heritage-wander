import type { ICHDomain, VietnamProvince, HeritageNode } from "./types";

export function getDomainEmoji(domain: ICHDomain): string {
  const map: Record<ICHDomain, string> = {
    "craftsmanship": "🏺",
    "performing-arts": "🎶",
    "ritual": "🕯️",
    "oral-tradition": "📜",
    "traditional-knowledge": "🌿",
    "culinary": "🍲",
    "ethnic-minority": "🧵",
  };
  return map[domain] ?? "🏛️";
}

export function getDomainLabel(domain: ICHDomain): { vi: string; en: string } {
  const map: Record<ICHDomain, { vi: string; en: string }> = {
    "craftsmanship": { vi: "Nghề thủ công", en: "Traditional Craftsmanship" },
    "performing-arts": { vi: "Nghệ thuật biểu diễn", en: "Performing Arts" },
    "ritual": { vi: "Lễ hội & Nghi lễ", en: "Rituals & Festivals" },
    "oral-tradition": { vi: "Truyền khẩu", en: "Oral Traditions" },
    "traditional-knowledge": { vi: "Tri thức dân gian", en: "Traditional Knowledge" },
    "culinary": { vi: "Ẩm thực di sản", en: "Culinary Heritage" },
    "ethnic-minority": { vi: "Văn hóa dân tộc", en: "Ethnic Minority Culture" },
  };
  return map[domain] ?? { vi: "Di sản", en: "Heritage" };
}

export function getElementsLabel(domain: ICHDomain): { vi: string; en: string } {
  const map: Record<ICHDomain, { vi: string; en: string }> = {
    "craftsmanship": { vi: "Nguyên liệu", en: "Materials" },
    "performing-arts": { vi: "Nhạc cụ & Yếu tố", en: "Instruments & Elements" },
    "ritual": { vi: "Đồ lễ & Yếu tố", en: "Ritual Elements" },
    "oral-tradition": { vi: "Hình thức truyền khẩu", en: "Oral Forms" },
    "traditional-knowledge": { vi: "Kiến thức & Công cụ", en: "Knowledge & Tools" },
    "culinary": { vi: "Nguyên liệu & Kỹ thuật", en: "Ingredients & Techniques" },
    "ethnic-minority": { vi: "Yếu tố văn hóa", en: "Cultural Elements" },
  };
  return map[domain] ?? { vi: "Yếu tố", en: "Elements" };
}

export function getKnowledgeHolderLabel(domain: ICHDomain): { vi: string; en: string } {
  const map: Record<ICHDomain, { vi: string; en: string }> = {
    "craftsmanship": { vi: "Gặp nghệ nhân", en: "Meet the Artisan" },
    "performing-arts": { vi: "Gặp nghệ sĩ", en: "Meet the Performer" },
    "ritual": { vi: "Gặp người giữ lễ", en: "Meet the Ceremony Keeper" },
    "oral-tradition": { vi: "Gặp người kể chuyện", en: "Meet the Storyteller" },
    "traditional-knowledge": { vi: "Gặp người cao tuổi", en: "Meet the Elder" },
    "culinary": { vi: "Gặp người giữ công thức", en: "Meet the Recipe Keeper" },
    "ethnic-minority": { vi: "Gặp người giữ văn hóa", en: "Meet the Culture Keeper" },
  };
  return map[domain] ?? { vi: "Gặp người hướng dẫn", en: "Meet the Guide" };
}

export function getProvinceLabel(province: VietnamProvince): string {
  const map: Record<VietnamProvince, string> = {
    "thua-thien-hue": "Thừa Thiên Huế",
    "quang-nam": "Quảng Nam",
    "ha-noi": "Hà Nội",
    "bac-ninh": "Bắc Ninh",
    "lao-cai": "Lào Cai",
    "lam-dong": "Lâm Đồng",
    "ninh-binh": "Ninh Bình",
    "can-tho": "Cần Thơ",
    "ninh-thuan": "Ninh Thuận",
    "quang-ngai": "Quảng Ngãi",
    "gia-lai": "Gia Lai",
  };
  return map[province] ?? province;
}

export function groupNodesByProvince(nodes: HeritageNode[]): Partial<Record<VietnamProvince, HeritageNode[]>> {
  return nodes.reduce((acc, node) => {
    if (!acc[node.province]) acc[node.province] = [];
    acc[node.province]!.push(node);
    return acc;
  }, {} as Partial<Record<VietnamProvince, HeritageNode[]>>);
}

export function groupNodesByDomain(nodes: HeritageNode[]): Partial<Record<ICHDomain, HeritageNode[]>> {
  return nodes.reduce((acc, node) => {
    if (!acc[node.ichDomain]) acc[node.ichDomain] = [];
    acc[node.ichDomain]!.push(node);
    return acc;
  }, {} as Partial<Record<ICHDomain, HeritageNode[]>>);
}
