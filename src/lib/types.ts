export type Rarity = "Common" | "Rare" | "Epic" | "Legendary" | "Endangered";

export type HeritageCategory =
  | "intangible-heritage"
  | "must-visit"
  | "tourist-landmark";

export type ICHDomain =
  | "craftsmanship"
  | "performing-arts"
  | "ritual"
  | "oral-tradition"
  | "traditional-knowledge"
  | "culinary"
  | "ethnic-minority";

export type VietnamProvince =
  | "thua-thien-hue"
  | "quang-nam"
  | "ha-noi"
  | "bac-ninh"
  | "lao-cai"
  | "lam-dong"
  | "ninh-binh"
  | "can-tho"
  | "ninh-thuan"
  | "quang-ngai"
  | "gia-lai"
  | "ho-chi-minh-city"
  | "da-nang";

export type UNESCOStatus =
  | "inscribed"
  | "urgent-safeguarding"
  | "best-practice"
  | "nominated"
  | "unrecognized";

export type KnowledgeHolderRole =
  | "artisan"
  | "performer"
  | "elder"
  | "storyteller"
  | "ceremony-keeper"
  | "healer"
  | "ritual-master";

export interface KnowledgeHolder {
  name: string;
  nameEn: string;
  avatar: string;
  role: KnowledgeHolderRole;
  roleEn: string;
}

export interface NPCExchange {
  order: number;
  question: string;
  answer: string;
}

export interface PhotoChallenge {
  prompt: string;
  promptEn: string;
  referenceImages: string[];
}

export interface CollectibleItem {
  id: string;
  name: string;
  nameEn: string;
  ichDomain: ICHDomain;
  sourceNodeId: string;
  sourceNodeName: string;
  knowledgeHolderName: string;
  image: string;
  rarity: Rarity;
  description: string;
  descriptionEn: string;
  dropRate: number;
}

export interface CollectedItem extends CollectibleItem {
  acquiredAt: string;
}

export interface HeritageNode {
  id: string;
  name: string;
  nameEn: string;
  cityId: string;
  category: HeritageCategory;
  ichDomain: ICHDomain;
  province: VietnamProvince;
  unescoStatus?: UNESCOStatus;
  ethnicGroup?: string;
  coordinates: [number, number];
  coverImage: string;
  teaserImage?: string;
  tier: 1 | 2 | 3;
  knowledgeHolder: KnowledgeHolder;
  items: CollectibleItem[];
  videoUrl?: string;
  knowledgeSummary: string;
  knowledgeSummaryEn: string;
  elements: string[];
  npcScript: NPCExchange[];
  photoChallenge: PhotoChallenge;
}

export interface City {
  id: string;
  name: string;
  nameEn: string;
  coordinates: [number, number];
  province: VietnamProvince;
  badgeEmoji: string;
  badgeName: string;
  badgeNameEn: string;
  badgeDescription: string;
}

export interface CityBadge {
  cityId: string;
  name: string;
  nameEn: string;
  description: string;
  emoji: string;
}

export interface HeritageRoute {
  id: string;
  name: string;
  creatorId: string;
  nodeIds: string[];
  description: string;
  estimatedDuration: string;
  totalItems: number;
}

export interface MuseumState {
  unlockedNodeIds: string[];
  collectedItemIds: string[];
  earnedBadgeIds: string[];
  navigationMode?: "gps" | "manual";
}
