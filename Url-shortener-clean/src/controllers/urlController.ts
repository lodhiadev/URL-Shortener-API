import { Request, Response } from 'express';
import Url from '../models/Url';
import Analytics from '../models/Analytics';
import { generateShortCode } from '../utils/shortcode';
import { AuthRequest } from '../middleware/auth';
import { BASE_URL } from '../config';

export async function shorten(req: AuthRequest, res: Response) {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ error: 'Missing longUrl' });
  let code = generateShortCode();
  // ensure unique
  while (await Url.findOne({ shortCode: code })) code = generateShortCode();
  const shortUrl = `${BASE_URL || ''}/${code}`;
  const doc = await Url.create({ userId: req.userId, longUrl, shortCode: code, shortUrl });
  res.json({ shortUrl, shortCode: doc.shortCode, longUrl: doc.longUrl });
}

export async function redirect(req: Request, res: Response) {
  const { shortCode } = req.params;
  const doc = await Url.findOne({ shortCode });
  if (!doc) return res.status(404).json({ error: 'Not found' });
  // record analytics
  await Analytics.create({
    shortCode,
    ip: req.ip,
    userAgent: req.headers['user-agent'] as string,
    referrer: req.get('Referrer') || undefined
  });
  return res.redirect(doc.longUrl);
}
