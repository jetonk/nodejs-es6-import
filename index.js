import express from 'express';
import MainService from './services/MainService';
const app = express();
const port = 3000;

const mainService = new MainService();
app.get('/', mainService.get);

app.listen(port, () => console.log(`App listening on port ${port}!`))