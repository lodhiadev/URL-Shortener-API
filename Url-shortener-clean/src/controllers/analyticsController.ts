import { Request, Response } from 'express';
import Analytics from '../models/Analytics';

export async function getAnalytics(req: Request, res: Response) {
  const { shortCode } = req.params;
  const items = await Analytics.find({ shortCode }).sort({ createdAt: -1 }).limit(1000);
  const clicks = items.length;
  res.json({ shortCode, clicks, items });
}
