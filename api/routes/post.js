import express from 'express';


const router = express.Router()

router.get('/test', (req,res) => {
    console.log('ok');
});
router.post('/test', (req,res) => {
    console.log('ok');
});
router.put('/test', (req,res) => {
    console.log('ok');
});
router.delete('/test', (req,res) => {
    console.log('ok');
});

export default router;
