import { Router } from 'express';
import { shorten, redirect } from '../controllers/urlController';
import { authenticate } from '../middleware/auth';

const router = Router();
router.post('/shorten', authenticate, shorten);
router.get('/:shortCode', redirect);

export default router;
