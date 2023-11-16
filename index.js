import axios from 'axios';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/get-image', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        const imageUrl = response.data.message;
        console.log('Image URL:', imageUrl); // Add this line
        res.render('index.ejs', { url: imageUrl });
    } catch (error) {
        console.error('Error fetching image:', error); // Add this line
        res.render('index.ejs', { error: error });
    }
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
