const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const cors= require('cors');

app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }))

app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Todo app" });
});

require('./APIroute.js')(app);

app.listen(4008, () => {
    console.log("API call started");
});

