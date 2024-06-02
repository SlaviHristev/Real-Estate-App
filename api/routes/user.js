import express from 'express';
import { updateUser, deleteUser, getUsers, getUser, savePost,profilePosts } from '../controllers/user.js';
import { verifyToken } from '../middlewares/verifyToken.js';


const router = express.Router()

router.get('/', getUsers);
// router.get('/:id', verifyToken, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, deleteUser);
router.delete('/save', verifyToken, savePost);
router.get('/profilePosts', verifyToken, profilePosts);


export default router;
