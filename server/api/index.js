import { Router } from 'express';

import messages from './messages';

const router = Router();

router.use(messages);

export default router;
