import express from 'express';
import dotenv from 'dotenv';
import connetDB from './src/config/mongo.config.js'
import short_url from './src/routes/short_url.route.js';
import user_route from './src/routes/user.route.js';
import auth_route from './src/routes/auth.route.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';


dotenv.config("./.env");

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
console.log("Cookie parser middleware added");
app.use(attachUser);

app.use('/api/user', user_route);
app.use('/api/auth', auth_route);
app.use('/api/create', short_url);
app.get('/:id', redirectFromShortUrl);

app.use(errorHandler);

app.listen(3000, () => {
    connetDB();
    console.log('Server is running on "http://localhost:3000"');
})
