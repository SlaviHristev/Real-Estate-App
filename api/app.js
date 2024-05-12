import express from 'express';
import postRoute from './routes/post.js';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';

const app = express();
app.use(express.json())

app.use('/api/post', postRoute);
app.use('api/auth', authRoute);
app.use('/api/user', userRoute);

app.listen(8800, () => {
    console.log('Server is running on port 8880!');
});

