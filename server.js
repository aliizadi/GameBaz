const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var cors = require('cors');

const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'server/dist/index.html'));
});

const port = process.env.PORT || '9193';
app.set('port', port);

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions))

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));