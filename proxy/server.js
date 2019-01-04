const express = require('express');
const template = require('./template');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(morgan('dev'));

app.use( express.static(path.join(__dirname, 'public')));

app.get('/restaurants/:restaurantId', (req, res)=> {
    const restaurantId = req.params.restaurantId;
    res.status(200);
    res.send(template(restaurantId));
} )
const port = 8000;
server = app.listen(port, () => console.log('Server listening on port: ' + server.address().port));
