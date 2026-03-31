import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  id: string; // The anonymousId or userId
  name?: string;
  email?: string;
  image?: string;
  avatar?: string; // Legacy field
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String },
    email: { type: String },
    image: { type: String },
    avatar: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
