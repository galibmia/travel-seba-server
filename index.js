const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const location = require('./data/locationData.json');
const hotelData = require('./data/hotelData.json')

const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
    res.send('Travel Seba API is running')
});


app.get('/location', (req, res) => {
    res.send(location);
})

app.get('/location/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedID = location.find(n => n.id === id);
    console.log(selectedID)
    res.send(selectedID);
})

app.get('/hotel', (req, res) => {
    res.send(hotelData);
})

app.get('/hotel/:id', (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryData = hotelData.filter(data => data.category === categoryId);
    res.send(categoryData);
})

app.listen(port, () => {
    console.log(`Travel Seba API is running on port: ${port}`);
})