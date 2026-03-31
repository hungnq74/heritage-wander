import mongoose, { Schema, Document } from "mongoose";

export interface IHeritage extends Document {
  id: string; // Custom string ID (e.g., "hcmc-chua-giac-lam")
  cityId: string;
  category: string;
  name: string;
  nameEn: string;
  ichDomain: string;
  province: string;
  unescoStatus: string;
  coordinates: [number, number];
  coverImage: string;
  teaserImage?: string;
  tier: number;
  knowledgeHolder: {
    name: string;
    nameEn: string;
    avatar: string;
    role: string;
    roleEn: string;
  };
  knowledgeSummary: string;
  knowledgeSummaryEn: string;
  elements: string[];
  videoUrl?: string; // Optional field
  ethnicGroup?: string; // Optional field
  npcScript: Array<{
    order: number;
    question: string;
    answer: string;
  }>;
  photoChallenge: {
    prompt: string;
    promptEn: string;
    referenceImages: string[];
  };
  items: Array<{
    id: string;
    name: string;
    nameEn: string;
    ichDomain: string;
    sourceNodeId: string;
    sourceNodeName: string;
    knowledgeHolderName: string;
    image: string;
    rarity: string;
    description: string;
    descriptionEn: string;
    dropRate: number;
  }>;
}

const HeritageSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    cityId: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    nameEn: { type: String, required: true },
    ichDomain: { type: String, required: true },
    province: { type: String, required: true },
    unescoStatus: { type: String, required: true },
    coordinates: { type: [Number], required: true },
    coverImage: { type: String, required: true },
    teaserImage: { type: String },
    tier: { type: Number, required: true },
    knowledgeHolder: {
      name: { type: String, required: true },
      nameEn: { type: String, required: true },
      avatar: { type: String, required: true },
      role: { type: String, required: true },
      roleEn: { type: String, required: true },
    },
    knowledgeSummary: { type: String, required: true },
    knowledgeSummaryEn: { type: String, required: true },
    elements: [{ type: String }],
    videoUrl: { type: String },
    ethnicGroup: { type: String },
    npcScript: [
      {
        order: { type: Number, required: true },
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    photoChallenge: {
      prompt: { type: String, required: true },
      promptEn: { type: String, required: true },
      referenceImages: [{ type: String }],
    },
    items: [
      {
        id: { type: String, required: true },
        name: { type: String, required: true },
        nameEn: { type: String, required: true },
        ichDomain: { type: String, required: true },
        sourceNodeId: { type: String, required: true },
        sourceNodeName: { type: String, required: true },
        knowledgeHolderName: { type: String, required: true },
        image: { type: String, required: true },
        rarity: { type: String, required: true },
        description: { type: String, required: true },
        descriptionEn: { type: String, required: true },
        dropRate: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Heritage || mongoose.model<IHeritage>("Heritage", HeritageSchema);
