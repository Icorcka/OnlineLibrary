import express from 'express';
import { checkDbConnection } from './DAL/connection';
import { initDb } from './DAL/dbSetUp/initDb';

const app = express();

app.get('/', (req, res) => {
    res.send('This is a test web page!');
});

app.listen(3001, () => {
    console.log('The application is listening on port 3001!');
    //checkDbConnection();
    initDb();
});
