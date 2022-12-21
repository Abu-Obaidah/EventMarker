import express, { response } from 'express';

import { addUser, getUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/View', getUser);

export default router;