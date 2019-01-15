const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));
app.listen(PORT, () => console.log('Fuck se2 listening on port '+ PORT));
app.get('/', (req, res) => res.send('FaCk SE2!'));
