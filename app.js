const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./config/database');

const bucketlist =  require('./controllers/bucketlist.controller');

const app = express();

const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, './angular-src')));

app.get('/', (req, res) => {
	res.send('invalid response');
});

mongoose.connect(config.database);

app.use('/bucketlist', bucketlist);

app.listen(port, () => {
	console.log('app is running on port ', port);
});