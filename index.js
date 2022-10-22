const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3002;

app.use(cors());

const places = require('./Data/Place.json');
const hotels = require('./Data/Hotels.json');

app.get('/', (req, res) => {
    res.send(places)
})


app.get('/place/:id', (req, res) => {
    const id = req.params.id
    const hotelsInPlace = hotels.filter(hotel => hotel.place_id === id);
    res.send(hotelsInPlace);
})

app.get('/hotel/:id', (req, res) => {
    const id = req.params.id;
    const hotel = hotels.find(h => h.id === id);
    console.log(hotel)
    res.send(hotel);
})

app.listen(port, () => console.log(`Travel boss is running on port ${port}`))