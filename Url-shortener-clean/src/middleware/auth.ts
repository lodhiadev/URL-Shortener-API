import { Request, Response, NextFunction } from 'express';
import { verify } from '../utils/jwt';

export interface AuthRequest extends Request {
  userId?: string;
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'No token provided' });
  const parts = auth.split(' ');
  const token = parts.length === 2 ? parts[1] : parts[0];
  const data = verify(token);
  if (!data) return res.status(401).json({ error: 'Invalid token' });
  req.userId = (data as any).id;
  next();
}
