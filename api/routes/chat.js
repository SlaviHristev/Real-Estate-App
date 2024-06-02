import express from 'express';
import { getChats,getChat,addChat,readChat } from '../controllers/chat.js';
import { verifyToken } from '../middlewares/verifyToken.js';


const router = express.Router()

router.get('/', verifyToken, getChats);
router.get('/:id', verifyToken, getChat);
router.delete('/', verifyToken, addChat);
router.delete('/read/:id', verifyToken, readChat);



export default router;
