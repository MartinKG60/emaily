const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({
        hello: 'world'
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// Heroku URL
// https://agile-springs-67245.herokuapp.com/
