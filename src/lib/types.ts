export type Rarity = "Common" | "Rare" | "Epic" | "Legendary" | "Endangered";
export type CraftCategory = "carpentry" | "incense" | "silk" | "pottery" | "hat-making";

export interface NPCExchange {
  order: number;
  question: string; // quick-reply chip text shown to the user
  answer: string;   // NPC response text
}

export interface PhotoChallenge {
  prompt: string;
  promptEn: string;
  referenceImages: string[];
}

export interface CollectibleItem {
  id: string;
  name: string;       // Vietnamese primary
  nameEn: string;
  craftCategory: CraftCategory;
  sourceNodeId: string;
  sourceNodeName: string;
  artisanName: string;
  image: string;
  rarity: Rarity;
  description: string;
  descriptionEn: string;
  dropRate: number;   // 0–1, probability weight
}

export interface CollectedItem extends CollectibleItem {
  acquiredAt: string; // ISO timestamp
}

export interface HeritageNode {
  id: string;
  name: string;       // Vietnamese primary
  nameEn: string;
  craftCategory: CraftCategory;
  coordinates: [number, number]; // [lng, lat]
  coverImage: string;
  tier: 1 | 2 | 3;
  artisanName: string;
  artisanAvatar: string;
  items: CollectibleItem[];
  videoUrl?: string;
  knowledgeSummary: string;
  knowledgeSummaryEn: string;
  materials: string[];
  npcScript: NPCExchange[];
  photoChallenge: PhotoChallenge;
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
}
