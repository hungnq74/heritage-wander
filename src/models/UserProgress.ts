import mongoose, { Schema, Document } from "mongoose";

export interface IUserProgress extends Document {
  userId: string;
  unlockedNodeIds: string[];
  collectedItemIds: string[];
  earnedBadgeIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

const UserProgressSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    unlockedNodeIds: [{ type: String }],
    collectedItemIds: [{ type: String }],
    earnedBadgeIds: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.UserProgress || mongoose.model<IUserProgress>("UserProgress", UserProgressSchema);
