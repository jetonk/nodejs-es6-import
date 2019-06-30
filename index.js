const express = require('express');
const app = express();
const port = 3000;
import MainService from './services/MainService';

const mainService = new MainService();
app.get('/', mainService.get);

app.listen(port, () => console.log(`App listening on port ${port}!`))