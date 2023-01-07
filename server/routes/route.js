import express from 'express';

import { addUser, getUser, getUserId, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/View', getUser);
router.get('/:id', getUserId);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

export default router;