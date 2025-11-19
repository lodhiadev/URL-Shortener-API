import { Request, Response } from 'express';
import User from '../models/User';
import { hashPassword, comparePassword } from '../utils/password';
import { sign } from '../utils/jwt';

export async function signup(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ error: 'User exists' });
  const hashed = await hashPassword(password);
  const user = await User.create({ email, password: hashed });
  const token = sign({ id: user._id });
  res.json({ token, user: { id: user._id, email: user.email } });
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Missing fields' });
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });
  const ok = await comparePassword(password, user.password);
  if (!ok) return res.status(400).json({ error: 'Invalid credentials' });
  const token = sign({ id: user._id });
  res.json({ token, user: { id: user._id, email: user.email } });
}
