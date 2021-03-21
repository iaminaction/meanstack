const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors())

require('./configs/database')

const usersController = require('./controllers/usersController');

app.use(bodyParser.urlencoded({extended : true}))
.use(bodyParser.json());

app.use('/api/users', usersController);

app.listen(8000);

console.log('Server runs');