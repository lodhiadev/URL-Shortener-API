import mongoose, { Document, Schema } from 'mongoose';

export interface IUrl extends Document {
  userId?: string;
  longUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
}

const UrlSchema = new Schema<IUrl>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  longUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  shortUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IUrl>('Url', UrlSchema);
