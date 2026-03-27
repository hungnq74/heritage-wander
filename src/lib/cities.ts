import type { City } from "./types";

export const CITIES: City[] = [
  {
    id: "ho-chi-minh-city",
    name: "Thành phố Hồ Chí Minh",
    nameEn: "Ho Chi Minh City",
    coordinates: [106.6983, 10.7769],
    province: "ho-chi-minh-city",
    badgeEmoji: "🌆",
    badgeName: "Nhà thám hiểm Sài Gòn",
    badgeNameEn: "Saigon Explorer",
    badgeDescription:
      "Đã khám phá toàn bộ di sản và địa danh của Thành phố Hồ Chí Minh",
  },
  {
    id: "hue",
    name: "Huế",
    nameEn: "Hue",
    coordinates: [107.5905, 16.4637],
    province: "thua-thien-hue",
    badgeEmoji: "👑",
    badgeName: "Người giữ hồn Kinh đô",
    badgeNameEn: "Imperial Guardian",
    badgeDescription:
      "Đã khám phá toàn bộ di sản văn hoá cố đô Huế — nơi lưu giữ linh hồn triều Nguyễn",
  },
  {
    id: "hoi-an",
    name: "Hội An",
    nameEn: "Hoi An",
    coordinates: [108.3363, 15.8801],
    province: "quang-nam",
    badgeEmoji: "🏮",
    badgeName: "Người bạn của Phố Cổ",
    badgeNameEn: "Ancient Town Keeper",
    badgeDescription:
      "Đã khám phá toàn bộ di sản của Đô thị cổ Hội An — Di sản Thế giới UNESCO",
  },
  {
    id: "ha-noi",
    name: "Hà Nội",
    nameEn: "Hanoi",
    coordinates: [105.8412, 21.0245],
    province: "ha-noi",
    badgeEmoji: "🐢",
    badgeName: "Người con Hồ Tây",
    badgeNameEn: "Hanoi Heritage Keeper",
    badgeDescription:
      "Đã khám phá toàn bộ di sản nghìn năm văn hiến của Thủ đô Hà Nội",
  },
  {
    id: "sapa",
    name: "Sa Pa",
    nameEn: "Sapa",
    coordinates: [103.8446, 22.3364],
    province: "lao-cai",
    badgeEmoji: "⛰️",
    badgeName: "Người bạn của núi rừng",
    badgeNameEn: "Mountain Spirit",
    badgeDescription:
      "Đã khám phá toàn bộ di sản văn hóa các dân tộc vùng núi Sa Pa",
  },
  {
    id: "da-lat",
    name: "Đà Lạt",
    nameEn: "Da Lat",
    coordinates: [108.4583, 11.9465],
    province: "lam-dong",
    badgeEmoji: "🌸",
    badgeName: "Người khám phá thành phố hoa",
    badgeNameEn: "City of Flowers Explorer",
    badgeDescription:
      "Đã khám phá toàn bộ di sản và địa danh của thành phố Đà Lạt",
  },
];

export function getCityById(id: string): City | undefined {
  return CITIES.find((c) => c.id === id);
}
