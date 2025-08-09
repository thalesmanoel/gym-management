import mongoose, { Schema, Document } from "mongoose";
import Level from "../enums/Level";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  level: Level;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    level: {
      type: String,
      enum: Object.values(Level),
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
