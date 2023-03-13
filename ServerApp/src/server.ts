import express from 'express';
import { initDb } from './DAL/dbSetUp/initDb';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
});

app.listen(process.env.PORT, () => {
    console.log('The application is listening on port 3001!');
    //checkDbConnection();
    initDb();
});
