const express = require('express');
const template = require('./template');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/:restaurantId', (req, res)=> {
    const restaurantId = req.params.restaurantId;
    res.status(200);
    res.send(template(restaurantId));
} )
const port = 8000;
server = app.listen(port, () => console.log('Server listening on port: ' + server.address().port));
