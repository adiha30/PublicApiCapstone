import axios from 'axios';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public/styles"));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/get-image', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const imageUrl = response.data.message;
        res.render('index.ejs', { url: imageUrl });
    } catch (error) {
        res.render('index.ejs', { error: error });
    }
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
