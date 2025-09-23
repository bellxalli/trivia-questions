import express from 'express';
import pug from 'pug';

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));

let score = [];










const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});