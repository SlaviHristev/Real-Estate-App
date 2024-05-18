import express from 'express';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import postRoute from './routes/post.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import testRoute from './routes/test.js';
import cors from 'cors';

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL, credentials:true
}));
app.use(express.json())
app.use(cookieParser());

app.use('/api/post', postRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/test', testRoute);

app.listen(8800, () => {
    console.log('Server is running on port 8880!');
});

