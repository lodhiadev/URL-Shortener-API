import mongoose, { Document, Schema } from 'mongoose';

export interface IAnalytics extends Document {
  shortCode: string;
  ip?: string;
  userAgent?: string;
  referrer?: string;
  country?: string;
  createdAt: Date;
}

const AnalyticsSchema = new Schema<IAnalytics>({
  shortCode: { type: String, required: true },
  ip: String,
  userAgent: String,
  referrer: String,
  country: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IAnalytics>('Analytics', AnalyticsSchema);
