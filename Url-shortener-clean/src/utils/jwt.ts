import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'changeme';

export function sign(payload: object, expiresIn = '7d') {
  return jwt.sign(payload, SECRET, { expiresIn });
}

export function verify(token: string) {
  try {
    return jwt.verify(token, SECRET) as any;
  } catch (err) {
    return null;
  }
}
